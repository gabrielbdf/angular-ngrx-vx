import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Input() book: Book;
  @Output() add = new EventEmitter<{ bookId: string, season: string }>();

  

  deixarAzul() {

  }
}
