import Vue from 'vue';


const componentList = [];
let isAlreadyFocused = false;
Vue.directive('focus', {
    inserted: function (el, {value = {disabled: false}}, vNode) {
        const currentComponentInstance = vNode.componentInstance;
        componentList.push({currentComponentInstance, disabled: value.disabled});

        if (!value.disabled && !isAlreadyFocused) {
            isAlreadyFocused = true;
            currentComponentInstance.$refs.input.focus();
        }

        const input = currentComponentInstance.$refs.input;
        if (!input) {
            return;
        }

        input.addEventListener('keyup', event => {
            const tag = input.tagName;
            if (tag !== 'INPUT') {
                return;
            }

            if (event.key === 'Enter') {
                const currentIndex = componentList.findIndex(
                    row => row.currentComponentInstance === currentComponentInstance
                )

                const nextIndex = componentList.findIndex(
                    (row, index) => !row.disabled && index > currentIndex
                )

                if (nextIndex === -1) {
                    return;
                }

                componentList[nextIndex].currentComponentInstance.$refs.input.focus();
            }
        });
    }
})