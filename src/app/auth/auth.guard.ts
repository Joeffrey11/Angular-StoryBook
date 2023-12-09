import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isLoggedOut() === true
    ? true
    : inject(Router).createUrlTree(['/login']);
};
