import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  email: string;
  loggedInEmailSub: Subscription
  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    this.loggedInEmailSub = this.authService.loggedInEmail$.subscribe({
      next: (email) => {//feliratkozun kés ettöl az email automatikusan frisul
        this.email = email;
      }

    })
  }

  ngOnDestroy() {//amikor megszünik a component le kell iratkozni, kuülönben memory leak
    if (this.loggedInEmailSub) {
      this.loggedInEmailSub.unsubscribe();
    }
  }
}
