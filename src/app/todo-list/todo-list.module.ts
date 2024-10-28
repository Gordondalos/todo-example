import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoListModel } from './todo-list-model';
import { MatButton } from '@angular/material/button';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButton,
  ],

})
export class TodoListModule {
}
