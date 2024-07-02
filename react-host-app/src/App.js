import './App.css';
import ReactRemoteApp from "./modules/ReactRemoteApp"; // react
import AngularRemoteApp from './modules/AngularRemoteApp'; // angular
import "vueRemoteApp/VueRemoteWebComponent"; // vue web component

function App() {
    return (
        <div>
            <h1>React Host App</h1>
            <AngularRemoteApp></AngularRemoteApp>
            <ReactRemoteApp></ReactRemoteApp>
            <vue-remote-web-component></vue-remote-web-component>
        </div>
    );
}

export default App;
