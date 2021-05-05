import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from 'src/app/app.reducer';
import {addPostData} from '../state/post.action';
import {Post} from '../state/post.reducer';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})
export class AddpostComponent implements OnInit {
  myForm: FormGroup;


  constructor(private fb: FormBuilder, private store: Store<State>) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: [''],
      description: [''],
    });
  }

  onSubmit(event): void {
   // event.preventDefault();
    const post: Post = this.myForm.value;
    this.store.dispatch(addPostData({post}));
  }



}
