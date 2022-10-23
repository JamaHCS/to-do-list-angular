import { TodoService } from './../../../core/services/todo/todo.service';
import { ToDoItem } from '../../../core/models/item/item.model';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.scss']
})
export class ToDoTableComponent implements OnInit {
  public toDoItems: ToDoItem[] = [];
  public displayedColumns: string[] = ['id', 'name', 'status', 'actions'];
  public dataSource: MatTableDataSource<ToDoItem> = new MatTableDataSource();

  constructor(public todoService: TodoService, public router: Router) { }

  ngOnInit(): void {
    this.getItems();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getItems() {
    this.toDoItems = this.todoService.getAll();
    this.dataSource = new MatTableDataSource(this.toDoItems);

    console.log('getItems', this.toDoItems);
  }

  onDelete(id: number) {
    this.todoService.delete(id);
    this.getItems();
  }
}
