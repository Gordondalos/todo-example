import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/component/todo-list/todo-list.component';
import { TodoListModel } from './todo-list/todo-list-model';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',

  },
  {
    path: 'list',
    component: TodoListComponent,
  }
];
