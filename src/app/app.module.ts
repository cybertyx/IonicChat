import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2'; 
import { SignupPage } from '../pages/signup/signup';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAzCRyq0dpqvCOSW53n1vZ04VnkzPUxiww",
  authDomain: "bruno-chat.firebaseapp.com",
  databaseURL: "https://bruno-chat.firebaseio.com",
  storageBucket: "bruno-chat.appspot.com",
  messagingSenderId: "761487959668"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
