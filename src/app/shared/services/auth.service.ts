import {inject, Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {signIn, signOut} from "../store/auth/auth.action";
import UserModel from "../models/user.model";

const USER_KEY = '@user'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private router = inject(Router)
  // private store = inject(Store)

  private _user$ = new BehaviorSubject<UserModel | undefined>(undefined)
  public user$: Observable<UserModel | undefined> = this._user$;

  constructor(private router: Router, private store: Store) {
    this._user$.next(this.getUser())
    console.log("hello", this.router, this.store)
  }

  async login(user: UserModel) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.store.dispatch(signIn(user))
    await this.router.navigateByUrl(this.router.parseUrl(""))
  }

  async logout() {
    this.store.dispatch(signOut())
    localStorage.clear();
    await this.router.navigateByUrl(this.router.parseUrl("login"))
  }

  isAuthenticated(): boolean {
    return this.getUser() != undefined;
  }

  private getUser(): UserModel | undefined {
    // Retrieve user data from local storage
    const userData = localStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : undefined;
  }
}
