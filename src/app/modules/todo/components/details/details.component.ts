import {ToDoItem} from "./../../../../core/models/item/item.model";
import {TodoService} from "./../../../../core/services/todo/todo.service";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({selector: "app-details", templateUrl: "./details.component.html", styleUrls: ["./details.component.scss"]})
export class DetailsComponent implements OnInit {
  public id: string | null = this.route.snapshot.paramMap.get("id");
  public item: ToDoItem;

  constructor(private todoService : TodoService, private route : ActivatedRoute) {
    this.item = {
      id: 0,
      name: "",
      done: false
    };
  }

  getItem() {
    this.item = this.todoService.get(parseInt(this.id !))!;

    if (this.item == undefined || this.item == null) {
      console.error("item no encontrado.");
    }
  }

  ngOnInit(): void {
    this.todoService.test();
    this.getItem();
  }
}
