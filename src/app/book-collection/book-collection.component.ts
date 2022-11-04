import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css'],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();

  @ViewChild('titulo') titulo: ElementRef;

  constructor() { }

  deixarTextoVermelho() {
    //this.renderer.setStyle(this.titulo.nativeElement, "color", "red");
    //(this.titulo.nativeElement as HTMLParagraphElement).style.color = 'red';
  }
}
