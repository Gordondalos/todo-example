import { TodoListRepositoryService } from './services/todo-list-repository.service';
import { TodoItemInterface } from './interfaces/todo-item.interface';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TodoListModel {

  constructor(
    private todoListRepositoryService: TodoListRepositoryService,
  ) {
  }


  loadData() {
    return this.todoListRepositoryService.getList()
      .pipe(map((response: TodoItemInterface[]) => this.drawDataAdapter(response)));
  }

  drawDataAdapter(data: TodoItemInterface[]) {
    return data;
  }

  addEditTodo(data: Partial<TodoItemInterface>) {
    if (data.id) {
      this.updateTodo(data);
    } else {
      this.createTodo(data);
    }
  }


  private updateTodo(data: Partial<TodoItemInterface>) {
    console.log('updateTodo', data)

  }

  private createTodo(data: Partial<TodoItemInterface>) {
    console.log('createTodo', data)

  }
}
