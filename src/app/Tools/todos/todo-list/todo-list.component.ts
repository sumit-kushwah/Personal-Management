import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

import { TodosService } from '../todos.service';
import { Todo } from '../models/task.model';
import { TodoAddEditDialogService } from './todo-add-edit-dialog.service';
import { TodoAddEditDialogComponent } from './todo-add-edit-dialog/todo-add-edit-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(
    private todosService: TodosService,
    private todoAddEditDialogService: TodoAddEditDialogService
  ) { }

  @Input()
  listName: string = "My todos";
  todos: Todo[];
  ids = 100;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.todos = this.todosService.todos;
    this.todosService.todosSubject$.subscribe(todos => {
      this.todos = todos;
    })
  }

  onAddTodo() {

    const data = {
      title: "New todo",
      type: 'Add',
      description: null,
    }

    const dialogRef: MatDialogRef<TodoAddEditDialogComponent> = this.todoAddEditDialogService.openDialog(data);
    dialogRef.afterClosed().subscribe(description => {
      if(description) {
        this.todosService.addTodo({
          id: (this.ids++).toString(),
          description: description
        })
      }
    });

  }
}




