import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { addPostData, addPostSuccess, loadPost, loadPostSuccess} from './post.action';
import {exhaustMap, map, mergeMap, switchMap} from 'rxjs/operators';
import {PostService} from '../post.service';
import {Post} from './post.reducer';


@Injectable()
export class PostEffects {
  constructor(private action$: Actions, private postService: PostService) {
  }

  loadPost$ = createEffect(() => {
    return this.action$.pipe(ofType(loadPost), mergeMap(action => {
      return this.postService.getPost().pipe(map(posts => {
        return loadPostSuccess({posts});
      }));
    }));
  });

  addPost$ = createEffect(() => {
    return this.action$.pipe(ofType(addPostData), exhaustMap(action => {
      return this.postService.addPostData(action.post).pipe(map(data => {
        const post: Post = {...action.post, id: data.name};
        console.log(post);
        return addPostSuccess({post});
      }));
    }));
  });
}
