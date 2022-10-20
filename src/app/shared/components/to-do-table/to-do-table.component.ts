import { TodoService } from './../../../core/services/todo/todo.service';
import { ToDoItem } from './../../../core/models/todo/item.model';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.scss']
})
export class ToDoTableComponent implements OnInit {
  public toDoItems: ToDoItem[] = [];
  public displayedColumns: string[] = ['id', 'name', 'done', 'actions'];

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  getItems() {
    this.toDoItems = this.todoService.getAll();
    console.log(this.toDoItems);
  }
}
