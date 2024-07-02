import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule, FormsModule],
  exports: [TestComponent]
})
export class TestModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(TestComponent, { injector: injector });
    customElements.define('angular-test-component', element);
  }
}
