import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CurrencymetabolitesService, AppDataLoader} from './services';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    AppDataLoader,
    CurrencymetabolitesService
  ],
})
export class agbCommonModule { }
