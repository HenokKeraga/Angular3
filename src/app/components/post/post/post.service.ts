import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './state/post.reducer';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://gebeya-d1743-default-rtdb.firebaseio.com/post.json';

  constructor(private http: HttpClient) {
  }

  getPost(): Observable<Post[]> {
    return this.http.get(this.url).pipe(map(data => {
      const post: Post[] = [];
      for (const key in data) {
        post.push({id: key, ...data[key]});
      }
      return post;
    }));
  }

  addPostData(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(this.url, post);
  }
}
