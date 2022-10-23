import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoTableComponent } from './components/to-do-table/to-do-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ToDoTableComponent,
    NavbarComponent,
    FooterComponent,
    CreateTodoComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
ReactiveFormsModule, 
        MatInputModule
  ],
  exports: [ToDoTableComponent, NavbarComponent, FooterComponent, CreateTodoComponent]
})
export class SharedModule { }
