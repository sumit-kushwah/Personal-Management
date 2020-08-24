import { Todo } from './task.model';

export interface TodoList{
    id: string;
    name: string;
    todos: Todo[];
}