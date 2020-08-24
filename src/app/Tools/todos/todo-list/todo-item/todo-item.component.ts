import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/task.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TodosService } from '../../todos.service';
import { TodoAddEditDialogService } from '../todo-add-edit-dialog.service';
import { TodoAddEditDialogComponent } from '../todo-add-edit-dialog/todo-add-edit-dialog.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor(
    private todosService: TodosService,
    private todoAddEditDialogService: TodoAddEditDialogService
    ) { }

  @Input()
  todo: Todo;
  
  selected: boolean = true;

  // @HostListener('mouseover') onMouseOver() {
  //   this.selected = true;
  // }

  // @HostListener('mouseout') onMouseOut() {
  //   this.selected = false;
  // }
  
  ngOnInit(): void {

  }

  onDeleteTodo() {
    this.todosService.deleteTodo(this.todo.id);
  }

  onEditTodo() {
    const data = {
      title: "Edit todo",
      type: 'Save',
      description: this.todo.description,
    }

    const dialogRef: MatDialogRef<TodoAddEditDialogComponent> = this.todoAddEditDialogService.openDialog(data);
    dialogRef.afterClosed().subscribe(description => {
      if(description) {
        this.todo = {id: this.todo.id, description: description}
      }
    });
  }

}

