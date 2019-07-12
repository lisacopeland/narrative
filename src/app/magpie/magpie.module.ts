import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MagpieComponent } from './magpie.component';
import { MagpieRoutingModule } from './magpie-routing.module';

@NgModule({
  declarations: [MagpieComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MagpieRoutingModule,
    MaterialModule
  ],
  exports: [
    MagpieComponent
  ]
})
export class MagpieModule { }
