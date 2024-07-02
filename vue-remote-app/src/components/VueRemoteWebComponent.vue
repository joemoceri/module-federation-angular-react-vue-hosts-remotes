<script>
    import { defineCustomElement } from 'vue';

    const VueRemoteWebComponent = defineCustomElement({
        styles: [``],
        template: `<h1>Vue Remote Web Component</h1>`
    });

    customElements.define("vue-remote-web-component", VueRemoteWebComponent);

    export default VueRemoteWebComponent;
</script>