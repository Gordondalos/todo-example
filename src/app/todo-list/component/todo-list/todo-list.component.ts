import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { Subject, takeUntil } from 'rxjs';
import { TodoItemInterface } from '../../interfaces/todo-item.interface';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnDestroy, OnInit {

  destroy$ = new Subject();

  dataSource: TodoItemInterface[] = [];

  displayedColumns: string[] = ['title', 'description', 'completed'];


  constructor(
    private todoListService: TodoListService) {
    this.todoListService.todoList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: TodoItemInterface[]) => {
        this.dataSource = data;
      });
  }

  ngOnInit() {
    this.todoListService.load();
  }


  ngOnDestroy() {
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  add() {
    this.todoListService.add();
  }
}
