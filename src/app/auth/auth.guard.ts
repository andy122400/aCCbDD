import {inject} from "@angular/core";
import {CanActivateFn, Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    // Redirect to the login page if not authenticated
    return router.parseUrl('/login');
  }
};
