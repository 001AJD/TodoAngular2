import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'Todo 1',
        completed : false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed : false
      },
      {
        id: 3,
        title: 'Todo Three',
        completed : true
      }
    ];
  }
}
