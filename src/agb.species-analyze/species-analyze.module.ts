import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from '../material.module';

import {
  ConcentrationTableComponent,
  ManualComponent,
  MeasurementComponent,
  UploadComponent,
  SampleComponent,
  speciesAnalyzeComponent
} from './components';

import { speciesAnalyzeRoutingProviders, speciesAnalyzeRouting } from './species-analyze.routes';

import { agbCommonModule } from '../agb.common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,

    speciesAnalyzeRouting,
    agbCommonModule
  ],
  providers: [speciesAnalyzeRoutingProviders],
  declarations: [
    ConcentrationTableComponent,
    ManualComponent,
    MeasurementComponent,
    UploadComponent,
    SampleComponent,
    speciesAnalyzeComponent
  ],
  exports: [

  ]
})
export class speciesAnalyzeModule { }
