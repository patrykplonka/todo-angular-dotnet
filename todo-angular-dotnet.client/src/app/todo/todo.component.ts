import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Dodaj ten import
import { TodoService, TodoItem } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Dodaj CommonModule obok FormsModule
})
export class TodoComponent implements OnInit {
  todoItems: TodoItem[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodoItems();
  }

  loadTodoItems(): void {
    this.todoService.getTodoItems().subscribe(items => this.todoItems = items);
  }

  addTodo(): void {
    if (this.newTodo.trim()) {
      const newItem: TodoItem = { id: 0, title: this.newTodo, isComplete: false };
      this.todoService.addTodoItem(newItem).subscribe(item => {
        this.todoItems.push(item);
        this.newTodo = '';
      });
    }
  }

  toggleComplete(item: TodoItem): void {
    item.isComplete = !item.isComplete;
    this.todoService.updateTodoItem(item.id, item).subscribe();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodoItem(id).subscribe(() => {
      this.todoItems = this.todoItems.filter(item => item.id !== id);
    });
  }
}
