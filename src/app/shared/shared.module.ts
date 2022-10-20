import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoTableComponent } from './components/to-do-table/to-do-table.component';



@NgModule({
  declarations: [
    ToDoTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ToDoTableComponent]
})
export class SharedModule { }
