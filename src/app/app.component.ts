import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.action'
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<FromApp.AppState>,
    @Inject(PLATFORM_ID) private platformId
  ) { }
  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.store.dispatch(new AuthActions.AutoLogin())
    // }
    // console.log("hello from Appcomponent");

  }
}
