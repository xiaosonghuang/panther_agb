import { Component, Input } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.css']
})
export class AccordionComponent {

  @Input() title: String;
  isBig: Boolean;

  toggle() {
    this.isBig = !this.isBig;
  }

}