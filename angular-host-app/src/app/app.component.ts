import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ElementRef, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-host-app';

  // to render the react web component
  @ViewChild('reactElementRef', { read: ElementRef, static: true })
  reactElementRef!: ElementRef;

  // use a view container to instantiate the remote angular component
  @ViewChild('angularViewContainerRef', { read: ViewContainerRef })
  angularViewContainerRef!: ViewContainerRef;

  // to render the vue web component
  @ViewChild("vueElementRef", { static: true })
  vueElementRef!: ElementRef;

  constructor(private renderer: Renderer2) {

  }

  async loadAngular(): Promise<void> {
    const m = await import('angularRemoteApp/TestComponent');
    const ref = this.angularViewContainerRef.createComponent(m.TestComponent);
  }

  async loadReact(): Promise<void> {
    const remoteReact = await loadRemoteModule({
      remoteEntry: 'http://localhost:3002/remoteEntry.js',
      remoteName: 'reactRemoteApp',
      exposedModule: './TestComponent'
    });

    const e = document.createElement('react-remote-test-component-element');
    this.reactElementRef.nativeElement.appendChild(e);
  }

  async loadVue(): Promise<void> {
    const module = await import('vueRemoteApp/VueRemoteWebComponent');
    this.renderer.appendChild(
      this.vueElementRef.nativeElement,
      new module.default()
    );
  }
}
