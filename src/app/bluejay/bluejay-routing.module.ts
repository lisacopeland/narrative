import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BluejayComponent } from './bluejay.component';

const routes: Routes = [
  {
    path: '',
    component: BluejayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BluejayRoutingModule {
}
