import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoItem } from '../../models/todo/item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: ToDoItem[] = [
    {
      id: 1, description: "To do 1", done: false, name: "to-do-1"
    },
    {
      id: 2, description: "To do 2", done: false, name: "to-do-2"
    }];

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

  getAll(): ToDoItem[] {
    return this.todoList;
  }
}
