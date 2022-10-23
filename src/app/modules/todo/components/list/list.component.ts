import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "src/app/core/services/todo/todo.service";

@Component({selector: "app-list", templateUrl: "./list.component.html", styleUrls: ["./list.component.scss"]})
export class ListComponent implements OnInit {
  public hasBeenTouched: boolean = false;

  createToDo: FormGroup = this.fb.group({
    todo: [
      "",
      [Validators.required]
    ]
  });

  constructor(private fb : FormBuilder, public todoService : TodoService) {}

  ngOnInit(): void {}

  submit() {
    this.hasBeenTouched = true;
    
    if (this.createToDo.controls["todo"].value != "") {
      this.todoService.insert(this.createToDo.controls["todo"].value);
      this.createToDo.controls["todo"].setValue("");
      this.hasBeenTouched = false;
    }
  }
}
