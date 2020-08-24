import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {A11yModule} from '@angular/cdk/a11y';
import { TodoAddEditDialogComponent } from './todo-add-edit-dialog.component';


@NgModule({
  declarations: [TodoAddEditDialogComponent],
  imports: [
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    A11yModule
  ],
  exports: [TodoAddEditDialogComponent]
})
export class TodoAddEditDialogModule { }
