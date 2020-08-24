import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Todo } from './models/task.model';

@Injectable()
export class TodosService {

    todosSubject$: Subject<Todo[]> = new Subject();

    todos: Todo[] = [
        {
          id: '1',
          description: 'first task',
        }, 
        {
          id: '2',
          description: 'second task',
        }, 
        {
          id: '3',
          description: 'third task',
        }, 
        {
          id: '4',
          description: 'fourth task',
        }, 
        {
          id: '5',
          description: 'fifth task',
        }, 
      ];
    
      deleteTodo(id: string) {
          this.todos = this.todos.filter((todo) => todo.id != id);
          this.todosSubject$.next(this.todos);
      }

      addTodo(todo: Todo) {
          this.todos.push(todo);
          this.todosSubject$.next(this.todos);
      }
}