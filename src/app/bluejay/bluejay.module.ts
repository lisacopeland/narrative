import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BluejayComponent } from './bluejay.component';
import { BluejayRoutingModule } from './bluejay-routing.module';

@NgModule({
  declarations: [BluejayComponent],
  imports: [
    CommonModule,
    BluejayRoutingModule,
    MaterialModule
  ],
  exports: [
    BluejayComponent
  ]
})
export class BluejayModule { }
