import { ref, onMounted, onBeforeUnmount, onUpdated } from 'vue';
import ReactDOM from 'react-dom';
import React from 'react';

export default {
    name: 'ReactTestComponent',
    props: {

    },
    setup(props) {
        const root = ref(null);
        const TestComponent = ref(null);

        onMounted(updateReactComponent);
        onUpdated(updateReactComponent);
        onBeforeUnmount(unmountReactComponent);

        (async () => {
            return (await import('reactRemoteApp/TestComponent')).default;
        })().then(b => {
                TestComponent.value = b;
                updateReactComponent();
            })
            .catch(e => {
                console.log(e);
            });

        return { root };

        function updateReactComponent() {
            if (!TestComponent.value) {
                return;
            }

            ReactDOM.render(React.createElement(TestComponent.value, props), root.value);
        }

        function unmountReactComponent() {
            root.value && ReactDOM.unmountComponentAtNode(root.value);
        }
    },
    template: '<div ref="root"></div>'
};
