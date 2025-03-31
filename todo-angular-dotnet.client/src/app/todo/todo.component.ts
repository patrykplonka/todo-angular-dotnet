import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService, TodoItem } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TodoComponent implements OnInit {
  todoItems: TodoItem[] = [];
  newTodo: string = '';
  theme: string = 'light';

  constructor(private todoService: TodoService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadTodoItems();
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme = savedTheme;
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  applyTheme(): void {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(this.theme === 'dark' ? 'dark-theme' : 'light-theme');
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
