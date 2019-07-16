import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RavenComponent } from './raven.component';
import { RavenRoutingModule } from './raven-routing.module';

@NgModule({
  declarations: [RavenComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RavenRoutingModule,
    MaterialModule
  ],
  exports: [
    RavenComponent
  ]
})
export class RavenModule { }
