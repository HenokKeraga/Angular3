import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { State } from 'src/app/app.reducer';
import { custom } from '../counter.action';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent implements OnInit {
  myForm:FormGroup

  constructor(private fb:FormBuilder,private store:Store<{count:State}>) {}

  ngOnInit(): void {

   this.myForm= this.fb.group({
      customValue:['']
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.store.dispatch(custom(this.myForm.value));
  }
}
