import { TodoListRepositoryService } from './services/todo-list-repository.service';
import { TodoItemInterface } from './interfaces/todo-item.interface';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

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

  addEditTodo(data: TodoItemInterface) {
    if (data.id) {
      this.updateTodo(data);
    } else {
      this.createTodo(data);
    }
  }


  private updateTodo(data: TodoItemInterface) {
    console.log('updateTodo', data)
    lastValueFrom(this.todoListRepositoryService.updateTodo(data))
      .then(() => {
        this.loadData();
      })

  }

  private createTodo(data: TodoItemInterface) {
    console.log('createTodo', data)
    lastValueFrom(this.todoListRepositoryService.createTodo(data))
      .then(() => {
        this.loadData();
      })

  }
}
