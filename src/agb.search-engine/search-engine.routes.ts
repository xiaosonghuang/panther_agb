import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  speciesDetailComponent,
  speciesComponent,
  geneDetailsComponent,
  SearchResultComponent,
  SearchPageComponent
} from "./components";

export const SearchEngineRoutes: Routes = [
  { path: 'gene/:ptn', component: geneDetailsComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'search-result/:query', component: SearchResultComponent },
  {
    path: 'species', component: speciesComponent,
    //children: [{ path: ':id', component: speciesDetailComponent }]
  },
  {path: 'species/:id', component: speciesDetailComponent},
  //{ path: 'species', component: speciesComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

export const searchEngineRouting: ModuleWithProviders = RouterModule.forRoot(SearchEngineRoutes);
