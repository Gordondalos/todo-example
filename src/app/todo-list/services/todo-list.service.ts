import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItemInterface } from '../interfaces/todo-item.interface';
import { TodoListModel } from '../todo-list-model';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoItemFormComponent } from '../component/add-todo-item-form/add-todo-item-form.component';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList$ = new BehaviorSubject<TodoItemInterface[]>([]);

  constructor(
    private todoListModel: TodoListModel,
    private dialog: MatDialog
  ) {

  }

  load() {
    this.todoListModel.loadData()
      .subscribe((data: TodoItemInterface[]) => {
        this.todoList$.next(data);
      });
  }

  add() {
    const dialogRef = this.dialog.open(AddTodoItemFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed()
      .subscribe((data) => {
        this.todoListModel.addEditTodo(data);
      });
  }


}
