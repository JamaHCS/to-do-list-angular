import { TodoService } from './../../../core/services/todo/todo.service';
import {Component, EventEmitter, OnInit, Output, Input} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({selector: "app-create-todo", templateUrl: "./create-todo.component.html", styleUrls: ["./create-todo.component.scss"]})
export class CreateTodoComponent implements OnInit {
  
  @Output() isCreating: EventEmitter<void> = new EventEmitter();
  @Input() hasBeenTouched: boolean = false; 
  @Input() createToDo!: FormGroup;

  constructor( ) {}

  ngOnInit(): void {
    
  }

  isTouch($event: any) {
    if($event.key == 'Enter'){
      this.isCreating.emit();
    }

    this.hasBeenTouched = true;
  }

  submit(){
    this.isCreating.emit();
  }
}
