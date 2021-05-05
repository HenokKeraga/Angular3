import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {AuthResponseData} from '../model/AuthResponseData.model';
import {User} from '../model/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`;
  signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`;

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.loginUrl, {
      email,
      password,
      returnSecureToken: true,
    });
  }

  formatData(data: AuthResponseData): User {

    const user: User = new User(data.email, data.localId, data.idToken, data.expiresIn);
    return user;
  }


  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.signUpUrl, {
      email, password, returnSecureToken: true
    });

  }


  saveUserInLocalStorage(user: User): void {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  getUserDataFromLocalStorage(): User | null {
    const userData = localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      const user: User = new User(userData.email, userData.localld, userData.token, userData.expiresIn);
      return user;
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem('userData');
  }
}
