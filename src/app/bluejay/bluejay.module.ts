import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BluejayComponent } from './bluejay.component';
import { BluejayRoutingModule } from './bluejay-routing.module';

@NgModule({
  declarations: [BluejayComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BluejayRoutingModule,
    MaterialModule
  ],
  exports: [
    BluejayComponent
  ]
})
export class BluejayModule { }
