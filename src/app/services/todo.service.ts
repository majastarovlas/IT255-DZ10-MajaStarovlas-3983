import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url: string = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  getTodo(id: number): Observable<Todo> {
    const modUrl = this.url + '/' + id;
    return this.http.get<Todo>(modUrl);
  }
}
