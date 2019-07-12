import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'bluejay',
    loadChildren: () => import('./bluejay/bluejay.module').then(m => m.BluejayModule)
  },
  {
    path: 'jackdaw',
    loadChildren: () => import('./jackdaw/jackdaw.module').then(m => m.JackdawModule)
  },
  {
    path: 'magpie',
    loadChildren: () => import('./magpie/magpie.module').then(m => m.MagpieModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
