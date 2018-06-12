import { SampleComponent } from "./sample/sample.component";
import { Routes } from '@angular/router';

import { AuthGuard } from "../../agb.auth";

import { ConcentrationTableComponent } from './concentration-table';
import { ManualComponent } from './manual/manual.component';
import { UploadComponent } from './upload/upload.component';
import { speciesAnalyzeComponent } from './species-analyze.component';
import { MeasurementComponent } from './measurement/measurement.component';

export const speciesAnalyzeRoutes: Routes = [
  {
    path: 'analyze',
    component: speciesAnalyzeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'manual', component: ManualComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'measurement', component: MeasurementComponent },
      { path: 'sample', component: SampleComponent },
      { path: '', redirectTo: 'measurement', pathMatch: 'full' }
    ]
  }
];
