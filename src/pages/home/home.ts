import { UserService } from './../../providers/user/user.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { User } from '../../models/user.models';
import { FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: FirebaseListObservable<User[]>; 

  constructor(
    public navCtrl: NavController,
    public userService: UserService
  ) {

  }

  ionViewDidLoad(){
    this.users = this.userService.users;
  }

  onChatCreate(user: User): void{
    console.log('User:', user);
  }

  onSignup(){
    this.navCtrl.push(SignupPage);
  }

}
