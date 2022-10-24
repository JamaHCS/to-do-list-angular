import {MatTableDataSource} from "@angular/material/table";
import {ToDoItem} from "./../../../../core/models/item/item.model";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "src/app/core/services/todo/todo.service";

@Component({selector: "app-list", templateUrl: "./list.component.html", styleUrls: ["./list.component.scss"]})
export class ListComponent implements OnInit {
  public hasBeenTouched: boolean = false;
  public toDoItems: ToDoItem[] = [];
  public displayedColumns: string[] = ["id", "name", "status", "actions"];
  public dataSource: MatTableDataSource<ToDoItem> = new MatTableDataSource();

  createToDo: FormGroup = this.fb.group({
    todo: [
      "",
      [Validators.required]
    ]
  });

  constructor(private fb : FormBuilder, public todoService : TodoService) {}

  ngOnInit(): void {
    this.getItems();
  }

  submit() {
    this.hasBeenTouched = true;

    if (this.createToDo.controls["todo"].value != "") {
      this.todoService.insert(this.createToDo.controls["todo"].value);
      this.createToDo.controls["todo"].setValue("");
      this.hasBeenTouched = false;
    }

    this.getItems();
  }

  getItems() {
    this.toDoItems = this.todoService.getAll();
    this.dataSource = new MatTableDataSource(this.toDoItems);
  }

  onDelete(id : number) {
    this.todoService.delete(id);
    this.getItems();
  }

  onChecking(id: number){
    this.todoService.doCheck(id);
    this.getItems();
  }
}
