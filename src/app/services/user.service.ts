import { User } from '../models/user.model';
import {Subject} from 'rxjs';

export class UserService {
   userSubject = new Subject<any[]>();
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
];
  

   emitUserSubject() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User) {
    this.users.push(user);
    this.emitUserSubject() ;
    
  }
}