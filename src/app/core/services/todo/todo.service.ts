import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoItem } from '../../models/todo/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: ToDoItem[] = [];

  constructor(private router: Router) {
    if(localStorage.getItem('todoList')) {
      this.todoList = JSON.parse(localStorage.getItem('todoItems')!);
    } else {
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
  }

  test(){
    console.log('test');
  }
}
