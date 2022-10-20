import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    TodoComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ]
})
export class TodoModule { }
