import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TodoAddEditDialogComponent } from './todo-add-edit-dialog/todo-add-edit-dialog.component';

@Injectable()
export class TodoAddEditDialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(data: any): MatDialogRef<TodoAddEditDialogComponent> {
    const dialogRef: MatDialogRef<TodoAddEditDialogComponent> = this.dialog.open(TodoAddEditDialogComponent, {
      width: '400px',
      data: data
    });
    return dialogRef;
  }
}
