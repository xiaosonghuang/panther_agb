import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {speciesAnalyzeRoutes} from './components'

export const speciesRoutes: Routes = [
  ...speciesAnalyzeRoutes,
];

export const speciesAnalyzeRoutingProviders: any[] = [];

export const speciesAnalyzeRouting: ModuleWithProviders = RouterModule.forRoot(speciesRoutes);
