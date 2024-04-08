import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInEmail = new BehaviorSubject<string>(null)

  constructor(private router: Router) {
    this.initLoggedInEmail();
  }

  get loggedInEmail$() {
    return this.loggedInEmail.asObservable()
  }

  initLoggedInEmail() {
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    this.loggedInEmail.next(loggedInEmail)

  }

  getLoggedInEmailValue() {//aktuális érték
    return this.loggedInEmail.value;
  }

  login(email: string) {
    localStorage.setItem('loggedInEmail', email);
    this.loggedInEmail.next(email);
    this.router.navigate(['users'])
  }

  logout() {
    localStorage.removeItem('loggedInEmail');
    this.loggedInEmail.next(null);
    this.router.navigate(['login'])
  }
}
