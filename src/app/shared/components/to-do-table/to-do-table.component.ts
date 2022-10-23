import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
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

  @Input() toDoItems: ToDoItem[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<ToDoItem> = new MatTableDataSource();

  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onChecking: EventEmitter<number> = new EventEmitter();
  
  constructor(public todoService: TodoService, public router: Router) { }

  ngOnInit(): void {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleting(id: number) {
    this.onDelete.emit(id);
  }

  checking(id: number){
    this.onChecking.emit(id);
  }
}
