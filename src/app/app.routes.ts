import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(comp=> comp.HomeComponent)
  },
  {
    path: 'chart',
    loadComponent: () => import('./pages/chart/chart.component').then(comp=> comp.ChartComponent)
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];
