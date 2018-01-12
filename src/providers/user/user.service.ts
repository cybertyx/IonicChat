import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.models';
import { FirebaseListObservable, AngularFire } from 'angularfire2';

@Injectable()
export class UserService {

  users: FirebaseListObservable<User[]>;

  constructor(
    public af: AngularFire,
    public http: HttpModule,
  ) {
    this.users = this.af.database.list(`/users`);
  }

  create(user: User): firebase.Promise<void> {
    return this.users.push(user);
  }

}
