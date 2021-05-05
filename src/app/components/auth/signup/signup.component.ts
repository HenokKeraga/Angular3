import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../../app.reducer';
import {sighup_start} from '../state/auth.action';
import {startLoading} from '../../shared/shared.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  sighup: any;

  constructor(private  fb: FormBuilder, private  store: Store<State>) { }

  ngOnInit(): void {
    this.sighup = this.fb.group({
      email: [''],
      password: ['']
    });
  }


  // tslint:disable-next-line:typedef
  onSignUp() {
    console.log(this.sighup.value);

    const email = this.sighup.value.email;
    const password = this.sighup.value.password;
    this.store.dispatch(startLoading());
    this.store.dispatch(sighup_start({email , password }));
  }
}
