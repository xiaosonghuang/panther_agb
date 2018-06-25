import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  speciesDetailComponent,
  speciesComponent,
  geneDetailsComponent,
  //SearchResultComponent,
  //SearchPageComponent
} from "./components";

export const SearchEngineRoutes: Routes = [
  { path: 'gene/:ptn', component: geneDetailsComponent },
  {
    path: 'species', component: speciesComponent,
    children: [{ path: ':id', component: speciesDetailComponent,
                 children: [{ path: ':ptn', component: geneDetailsComponent }] }]
  },
  //{path: 'species/:id', component: speciesDetailComponent},
  //{ path: 'species', component: speciesComponent },
  { path: '', redirectTo: 'species', pathMatch: 'full' }
];

export const searchEngineRouting: ModuleWithProviders = RouterModule.forRoot(SearchEngineRoutes);
