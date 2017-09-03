import { Component } from '@angular/core';

@Component({
  selector: 'using-observables',
  template: '<p>Using, {{theme}}!</p>',
})
export class UsingObservablesComponent {
  theme: string;

  constructor() {
    this.theme = 'observabeles'
  }
}