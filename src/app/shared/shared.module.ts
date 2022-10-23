import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoTableComponent } from './components/to-do-table/to-do-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    ToDoTableComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    MatFormFieldModule,

        MatInputModule
  ],
  exports: [ToDoTableComponent, NavbarComponent, FooterComponent]
})
export class SharedModule { }
