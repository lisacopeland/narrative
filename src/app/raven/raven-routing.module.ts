import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RavenComponent } from './raven.component';

const routes: Routes = [
  {
    path: '',
    component: RavenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RavenRoutingModule {
}
