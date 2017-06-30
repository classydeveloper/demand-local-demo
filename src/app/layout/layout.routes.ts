import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'analytics', pathMatch: 'full' },
    { path: 'analytics', loadChildren: '../charts/charts.module#ChartsModule' },
    { path: 'search', loadChildren: '../maps/maps.module#MapsModule' }
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
