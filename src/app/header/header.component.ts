import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getIsAuthencated} from '../components/auth/state/auth.selector';
import {auto_logout} from '../components/auth/state/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(getIsAuthencated);
  }

  onLogout($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(auto_logout());
  }


}
