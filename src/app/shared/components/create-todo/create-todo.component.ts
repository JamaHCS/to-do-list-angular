import { TodoService } from './../../../core/services/todo/todo.service';
import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({selector: "app-create-todo", templateUrl: "./create-todo.component.html", styleUrls: ["./create-todo.component.scss"]})
export class CreateTodoComponent implements OnInit {
  
  @Output() hasUpdated: EventEmitter<void> = new EventEmitter();
  public hasTouched: boolean = false;

  
  createToDo: FormGroup = this.fb.group({
    todo: ['', [Validators.required]]
  });

  constructor(private fb : FormBuilder, public todoService: TodoService) {}

  ngOnInit(): void {
    
  }

  submit(){
    this.hasTouched = true;

    this.todoService.insert(this.createToDo.controls['todo'].value);

    this.hasUpdated.emit();
  }

  isTouch($event: any) {
    if($event.key == 'Enter'){
      this.submit();
    }

    this.hasTouched = true;
  }
}
