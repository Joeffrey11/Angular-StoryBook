import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userPosition = new BehaviorSubject<string>('');

  changeUserPosition(position: string) {
    this.userPosition.next(position);
  }

  getUserPosition() {
    return this.userPosition.getValue();
  }

  constructor() {}
}
