import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['./css/font-awesome.min.css',
    './css/sb-admin-2.css',
    './css/style.css',

  ],
  directives: [ROUTER_DIRECTIVES],
})
export class PanelComponent {

  constructor() { }


}
