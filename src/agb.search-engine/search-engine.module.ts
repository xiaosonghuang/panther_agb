import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';

import { NgPipesModule } from 'ngx-pipes';
import {NgxPaginationModule} from 'ngx-pagination';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import {
  //ChemicalEquationComponent,
  geneDetailsComponent,
  //metaboliteDetailsComponent,
  //SearchBarComponent,
  //SearchPageComponent,
  //SearchResultComponent,
  speciesComponent,
  speciesDetailComponent
} from './components';

//import { VisualizationModule } from "../agb.visualization";
import { searchEngineRouting } from './search-engine.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    FlexLayoutModule,
    NgPipesModule,
    NgxPaginationModule,

    searchEngineRouting,
    TreeModule
    //VisualizationModule,
  ],
  //providers: [searchEngineRoutingProviders],
  declarations: [
    //ChemicalEquationComponent,
    geneDetailsComponent,
    //metaboliteDetailsComponent,
    //SearchBarComponent,
    //SearchPageComponent,
    //SearchResultComponent,
    speciesComponent,
    speciesDetailComponent
  ]
})
export class SearchEngineModule { }
