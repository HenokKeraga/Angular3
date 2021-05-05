import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {auto_login, auto_logout, login, loginSuccess, sighup_start, sighup_success} from './auth.action';
import {catchError, exhaustMap, map, mergeMap, tap} from 'rxjs/operators';
import {AuthService} from '../service/auth.service';
import {User} from '../model/User.model';
import {Store} from '@ngrx/store';
import {State} from 'src/app/app.reducer';
import {setErrorMessage, stopLoading} from '../../shared/shared.action';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {log} from 'util';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<State>,
    private router: Router
  ) {
  }

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(login),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(stopLoading());
            const user: User = this.authService.formatData(data);
            this.authService.saveUserInLocalStorage(user);
            return loginSuccess({user});
          }),
          catchError((err) => {
            this.store.dispatch(stopLoading());
            return of(
              setErrorMessage({
                errorMessage: err.error.error.errors[0].message,
              })
            );
          })
        );
      })
    );
  }, {dispatch: true});

  loginRedirect$ = createEffect(() => {
    return this.action$.pipe(ofType(...[loginSuccess, sighup_success]), tap(action => {
      this.router.navigate(['/']);
    }));
  }, {dispatch: false});

  signUp$ = createEffect(() => {
    return this.action$.pipe(ofType(sighup_start), exhaustMap(
      (action) => {
        return this.authService.signup(action.email, action.password)
          .pipe(map(response => {
            this.store.dispatch(stopLoading());
            const user: User = this.authService.formatData(response);
            this.authService.saveUserInLocalStorage(user);
            return sighup_success({user});
          }));
      }));
  }, {dispatch: true});

  autoLogIn$ = createEffect(() => {
    return this.action$.pipe(ofType(auto_login), mergeMap((action) => {
      const user: User = this.authService.getUserDataFromLocalStorage();
      console.log(user);
      return of(loginSuccess({user}));
    }));
  });

  autoLogout$ = createEffect(() => {

    return this.action$.pipe(ofType(auto_logout), mergeMap(action => {
      // this.router.navigate(['/auth']);
      this.authService.logout();
      return of(auto_logout());
    }));
  }, {dispatch: false});


}
