import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JackdawComponent } from './jackdaw.component';
import { JackdawRoutingModule } from './jackdaw-routing.module';

@NgModule({
  declarations: [JackdawComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    JackdawRoutingModule,
    MaterialModule
  ],
  exports: [
    JackdawComponent
  ]
})
export class JackdawModule { }
