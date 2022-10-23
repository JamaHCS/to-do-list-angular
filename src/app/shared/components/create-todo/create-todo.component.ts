import { ActivityService } from './../../../core/services/activity/activity.service';
import { TodoService } from './../../../core/services/todo/todo.service';
import {Component, EventEmitter, OnInit, Output, Input} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({selector: "app-create-todo", templateUrl: "./create-todo.component.html", styleUrls: ["./create-todo.component.scss"]})
export class CreateTodoComponent implements OnInit {
  
  public activity: string = '';

  @Output() isCreating: EventEmitter<void> = new EventEmitter();
  @Input() hasBeenTouched: boolean = false; 
  @Input() createToDo!: FormGroup;

  constructor(public activityService: ActivityService) {}

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity(){
    this.activityService.getRandomActivity().subscribe(res => this.activity = res.activity);
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
