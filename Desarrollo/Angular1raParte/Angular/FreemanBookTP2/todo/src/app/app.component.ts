import { Component } from '@angular/core';
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Rulo", [
    new TodoItem("Salir a correr", true),
    new TodoItem("Comida Lana"),
    new TodoItem("Estudiar DAM"),
  ]);  
  
  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem) {
    if (newItem != "") {
        this.list.addItem(newItem);
    }
  }

  showComplete: boolean = false;
}
