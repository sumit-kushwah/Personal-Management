import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoHeaderModule } from './todo-header/todo-header.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodosService } from './todos.service';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodoHeaderModule,
    TodoListModule
  ],
  exports: [TodosComponent],
  providers: [TodosService],
})
export class TodosModule { }
