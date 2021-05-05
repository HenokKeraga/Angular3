import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {State} from 'src/app/app.reducer';
import {getAllPosts, Post} from './state/post.reducer';
import {loadPost} from './state/post.action';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'title', 'description', 'Edit'];
  dataSource = new MatTableDataSource<Post>();
  subscription: Subscription;


  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadPost());
    this.subscription = this.store.select(getAllPosts).subscribe(posts =>
      this.dataSource.data = posts);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
