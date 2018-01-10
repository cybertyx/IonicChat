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
  apiKey: "AIzaSyBWUGmZj8rz2SI1cjJxeJaZT9KaVruAO7s",
  authDomain: "meuchat-6bd4c.firebaseapp.com",
  databaseURL: "https://meuchat-6bd4c.firebaseio.com",
  projectId: "meuchat-6bd4c",
  storageBucket: "",
  messagingSenderId: "536344889305"
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
