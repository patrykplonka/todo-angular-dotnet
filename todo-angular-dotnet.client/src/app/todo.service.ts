import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TodoItem {
  id: number;
  title: string;
  isComplete: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://localhost:7210/api/todo';

  constructor(private http: HttpClient) { }

  getTodoItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.apiUrl);
  }

  addTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, todoItem);
  }

  updateTodoItem(id: number, todoItem: TodoItem): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, todoItem);
  }

  deleteTodoItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
