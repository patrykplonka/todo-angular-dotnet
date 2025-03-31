import { Component, OnInit } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TodoComponent]
})
export class AppComponent implements OnInit {
  ngOnInit(): void { }
}
