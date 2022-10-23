import { ToDoItem } from "../../models/item/item.model";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class TodoService {
  private todoId: number = 3;
  private todoList: ToDoItem[] = [
    {
      id: 1,
      done: false,
      name: "to-do-1"
    }, {
      id: 2,
      done: false,
      name: "to-do-2"
    }
  ];

  constructor(private router: Router) {
    if (localStorage.getItem("todoList")) {
      console.log("true sercice");
      this.todoList = JSON.parse(localStorage.getItem("todoList")!);
      console.log(this.todoList);
    } else {
      console.log("false sercice");
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      console.log(this.todoList);
    }

    if (localStorage.getItem("todoId")) {
      console.log("true id");
      this.todoId = parseInt(JSON.parse(localStorage.getItem("todoId")!));
      console.log(this.todoId);
    } else {
      console.log("false id");
      localStorage.setItem("todoId", JSON.stringify(this.todoList));
      console.log(this.todoList);
    }
  }

  delete(id: number) {
    const newToDoList: ToDoItem[] = this.todoList.filter((item) => item.id != id);
    this.updateList(newToDoList);
  }

  private updateList(list: ToDoItem[]) {
    localStorage.setItem("todoList", JSON.stringify(list));
    this.rechargeListFromStorage();
  }

  private rechargeListFromStorage() {
    this.todoList = JSON.parse(localStorage.getItem("todoList")!);
  }

  test() {
    console.log("test");
  }

  getAll(): ToDoItem[] {
    console.log("getAll service", this.todoList);
    return this.todoList;
  }

  doCheck(id: number) {
    const item: ToDoItem | undefined = this.todoList.find((item) => item.id == id);

    if (item) {
      const index: number = this.todoList.indexOf(item);
      const newList: ToDoItem[] = [...this.todoList];

      newList[index].done = true;

      this.updateList(newList);
    } else {
      console.error("item couldn`t find");
    }
  }

  insert(item: ToDoItem) {
    item.id = this.todoId;
    this.todoId++;

    const newList = [...this.todoList];

    newList.push(item);
    this.updateList(newList);
  }
}
