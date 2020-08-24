import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-todo-add-edit-dialog',
  templateUrl: './todo-add-edit-dialog.component.html',
  styleUrls: ['./todo-add-edit-dialog.component.css']
})
export class TodoAddEditDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TodoAddEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
