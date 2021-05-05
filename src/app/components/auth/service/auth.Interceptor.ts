import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {State} from '../../../app.reducer';
import {Store} from '@ngrx/store';
import {exhaustMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {getTokenString} from '../state/auth.selector';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<State>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getTokenString).pipe(exhaustMap(token => {
        console.log(token);
        if (!token) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: req.params.append('auth', token)
        });
        return next.handle(modifiedReq);
      }
    ));

  }
}
