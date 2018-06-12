import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  speciesDetailComponent,
  speciesComponent,
  geneDetailsComponent,
  SearchResultComponent,
  SearchPageComponent,
  metaboliteDetailsComponent,
  AnalysisSearchComponent
} from "./components";

export const SearchEngineRoutes: Routes = [
  { path: 'metabolite/:id', component: metaboliteDetailsComponent },
  { path: 'gene/:id', component: geneDetailsComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'search-analysis', component: AnalysisSearchComponent },
  { path: 'search-result/:query', component: SearchResultComponent },
  {
    path: 'species', component: speciesComponent,
    children: [{ path: 'detail/:id', component: speciesDetailComponent }]
  },
  { path: 'species', component: speciesComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

export const searchEngineRouting: ModuleWithProviders = RouterModule.forRoot(SearchEngineRoutes);
