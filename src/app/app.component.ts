import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GoogleBooksService } from './book-list/books.service';
import { addBookSummer, addBookWinter, removeBook, retrievedBookList } from './state/books.actions';
import { selectBookCollectionSummer, selectBookCollectionWinter, selectBooks } from './state/books.selectors';

import { Moment } from 'moment';

import * as moment from 'moment';

import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollectionSummer$ = this.store.select(selectBookCollectionSummer);
  bookCollectionWinter$ = this.store.select(selectBookCollectionWinter);

  //@ViewChild('collection') collection: BookCollectionComponent;

  tempoFinal: Moment;

  numbers: Observable<number>;
  contador = 0;
  tempoParaContar = 0;

  constructor(private booksService: GoogleBooksService, private store: Store) {

    this.numbers = interval(1000);

    if (localStorage.getItem('tempoFinal')) {
      this.tempoFinal = moment(JSON.parse(localStorage.getItem('tempoFinal')))
      this.contarTimer(this.tempoFinal);
    }

  }

  ngOnInit() {
    this.booksService.getBooks().subscribe((books) => {
      this.store.dispatch(retrievedBookList({ books }));
    });

  }


  contarTimer(outroTempo: Moment) {
    if (!outroTempo) {
      this.tempoFinal = moment(new Date()).add('seconds', this.tempoParaContar);
      localStorage.setItem('tempoFinal', JSON.stringify(this.tempoFinal.format()));
    }

    this.numbers
      .subscribe(res => {
        const diferenca = this.tempoFinal.diff(moment(), 'seconds');
        if (diferenca >= 0) {
          this.contador = diferenca;
        }
      });

  }











  onAdd(ob: { bookId: string, season: string }) {
    switch (ob.season) {
      case 'summer':
        this.store.dispatch(addBookSummer(ob))
        break;
      case 'winter':
        this.store.dispatch(addBookWinter(ob))
        break;
      default:
        break;
    }
  }


  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }




}
