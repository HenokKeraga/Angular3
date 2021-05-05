import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {State} from 'src/app/app.reducer';
import {updatePost} from '../state/post.action';
import {getPostPerId, Post} from '../state/post.reducer';
import {Update} from '@ngrx/entity';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  routeSubscription: Subscription;
  id: string;

  constructor(
    private fb: FormBuilder,
    // private route: ActivatedRoute,
    private store: Store<State>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // this.routeSubscription = this.route.paramMap.subscribe((params) => {
    //   this.id = params.get('id');
    //
    //   this.store.select(getPostPerId, {id: this.id}).subscribe((postPerId) => {
    //     const post = postPerId;
    //     this.myForm = this.fb.group({
    //       title: [post?.title],
    //       description: [post?.description],
    //     });
    //   });
    // });
    this.routeSubscription = this.store.select(getPostPerId).subscribe(post => {
      console.log(post);
      this.myForm = this.fb.group({
        title: [post?.title],
        description: [post?.description]
      });
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  updatePost(): void {

    const dataPost: Update<Post> = {
      id: this.id,
      changes: {...this.myForm.value, id: this.id}
    };
    this.store.dispatch(updatePost({post: dataPost}));
    // this.router.navigate(['post']);
  }
}
