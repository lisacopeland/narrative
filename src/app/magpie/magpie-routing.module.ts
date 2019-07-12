import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagpieComponent } from './magpie.component';

const routes: Routes = [
  {
    path: '',
    component: MagpieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagpieRoutingModule {
}
