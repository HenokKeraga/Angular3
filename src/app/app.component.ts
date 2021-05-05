import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {State} from './app.reducer';
import {getErrorMessage, getLoadingStatus} from './components/shared/shared.selector';
import {auto_login} from './components/auth/state/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  errorMessage$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<State>) {

  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getLoadingStatus);
    this.errorMessage$ = this.store.select(getErrorMessage);
    this.store.dispatch(auto_login());
  }

}
