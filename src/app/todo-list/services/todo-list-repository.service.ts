import { Injectable } from '@angular/core';
import { FatherService } from '../../services/father.service';
import { HttpClient } from '@angular/common/http';
import { TodoItemInterface } from '../interfaces/todo-item.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoListRepositoryService extends FatherService {

  constructor(public override http: HttpClient) {
    super(http);
  }


  getList() {
    const url = '/data/todo-list.json';
    return this.getO(url);
  }

  updateTodo(data: TodoItemInterface) {
    const url = '';
    return this.postO(url, data);
  }

  createTodo(data: TodoItemInterface) {
    const url = '';
    return this.postO(url, data);

  }

}
