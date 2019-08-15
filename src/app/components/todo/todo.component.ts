import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    this.todoservice.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {

    // remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // remove from server
    this.todoservice.deleteTodo(todo).subscribe() ;
  }

  addTodo(todo: Todo) {
    // add in UI
    this.todoservice.addTodo(todo).subscribe( todo => {
      this.todos.push(todo);
    });
    // add onto server
  }

}
