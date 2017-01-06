import { Component } from '@angular/core';

import 'assets/images/founders.jpg';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex-container" fxLayout="column" fxLayoutAlign="start stretch">
      <stc-app-header></stc-app-header>
      <stc-coming-soon></stc-coming-soon>
      <stc-mission-statement></stc-mission-statement>
    </div>
  `
})
export class AppComponent {
  
}
