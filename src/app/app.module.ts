import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule } from 'angular2-notifications'
import { NgPipesModule } from 'ngx-pipes';
import { MaterialModule } from '../material.module';


import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

//import { DocumentationModule } from '../documentation';
import { agbCommonModule } from '../agb.common';
import { SearchEngineModule } from "../agb.search-engine";
//import { VisualizationModule } from "../agb.visualization";
import { agbAuthModule } from "../agb.auth";
import { speciesAnalyzeModule } from "../agb.species-analyze";
//import { agbPanelModule } from '../agb.panel';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    agbCommonModule,
    //DocumentationModule,
    agbAuthModule,
    SearchEngineModule,
    speciesAnalyzeModule,
    //agbPanelModule,
    //VisualizationModule,

    NgPipesModule,
    MaterialModule,
    SimpleNotificationsModule.forRoot(),

    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
