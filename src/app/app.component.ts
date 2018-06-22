import { Component, OnInit } from '@angular/core';
import {AppSettings} from './app.settings';
import {AppDataLoader} from '../agb.common/services'
//import {LoginService} from '../agb.auth/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notificationOptions = AppSettings.NOTIFICATION_OPTIONS;

  //constructor(public loginService: LoginService) { }


}
