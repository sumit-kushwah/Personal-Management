import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { TodosModule } from './Tools/todos/todos.module';
import { TodoListModule } from './Tools/todos/todo-list/todo-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    TodosModule,
    TodoListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
