import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { OverviewComponent } from './overview.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditDialogModule } from '../edit-dialog/edit-dialog.module';
import { AlertDialogModule } from '../shared/dialogs/alert-dialog/alert-dialog.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    EditDialogModule,
    AlertDialogModule
  ], exports: [
    OverviewComponent
  ]
})
export class OverviewModule { }
