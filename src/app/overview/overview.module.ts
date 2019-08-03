import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { OverviewComponent } from './overview.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ], exports: [
    OverviewComponent
  ]
})
export class OverviewModule { }
