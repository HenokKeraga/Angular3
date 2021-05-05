import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getCounter, State } from 'src/app/app.reducer';
import { deceremnt, increment, reset } from './counter.action';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
   this.count$ = this.store.select(getCounter);
      
  }

  increment() {
    this.store.dispatch(increment());
  }
  decerment() {
    this.store.dispatch(deceremnt());
  }
  resetValue() {
    this.store.dispatch(reset());
  }
}
