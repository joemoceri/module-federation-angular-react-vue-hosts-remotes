<template>
    <div>
        <!-- Provide the app root for the angular web components but don't display it -->
        <app-root style="display: none"></app-root>

        <h1>Vue Host App</h1>

        <!-- Angular main app web component -->
        <angular-app-component></angular-app-component>

        <!-- Angular test component -->
        <angular-test-component></angular-test-component>

        <!-- React -->
        <react-test-component></react-test-component>

        <!-- Vue app component -->
        <vue-remote-app-component></vue-remote-app-component>

        <!-- Vue web component -->
        <vue-remote-web-component></vue-remote-web-component>
    </div>
</template>

<script>
    // import the web component
    import('vueRemoteApp/VueRemoteWebComponent')

    import { mount } from 'angularRemoteApp/angularRemoteApp';

    // mount the angular app
    mount();

    export default {

    }
</script>

<style>

</style>
