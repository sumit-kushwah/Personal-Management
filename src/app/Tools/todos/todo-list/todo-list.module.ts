import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

import { TodoListComponent } from './todo-list.component';
import { TodoItemModule } from './todo-item/todo-item.module';
import { TodoAddEditDialogModule } from './todo-add-edit-dialog/todo-add-edit-dialog.module';
import { TodoAddEditDialogService } from './todo-add-edit-dialog.service';


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoItemModule,
    DragDropModule,
    TodoAddEditDialogModule
  ],
  exports: [TodoListComponent],
  providers: [TodoAddEditDialogService]
})
export class TodoListModule { }
