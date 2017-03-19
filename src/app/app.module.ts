import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AF } from "./providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

// Must export the config
export const firebaseConfig = {
  /*apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'*/
  apiKey: "AIzaSyAcmXCUbvKahUqiKlaOUhwwUzXAoXcbVJg",
  authDomain: "fir-crud-166fa.firebaseapp.com",
  databaseURL: "https://fir-crud-166fa.firebaseio.com",
  storageBucket: "fir-crud-166fa.appspot.com",
  messagingSenderId: "1071325212249"
};

/*
<script src="https://www.gstatic.com/firebasejs/3.7.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAcmXCUbvKahUqiKlaOUhwwUzXAoXcbVJg",
    authDomain: "fir-crud-166fa.firebaseapp.com",
    databaseURL: "https://fir-crud-166fa.firebaseio.com",
    storageBucket: "fir-crud-166fa.appspot.com",
    messagingSenderId: "1071325212249"
  };
  firebase.initializeApp(config);
</script>
*/

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
