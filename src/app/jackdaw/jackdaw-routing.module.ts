import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JackdawComponent } from './jackdaw.component';

const routes: Routes = [
  {
    path: '',
    component: JackdawComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JackdawRoutingModule {
}
