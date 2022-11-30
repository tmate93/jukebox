import { Injectable } from '@angular/core';
import { User } from "../../models/user/user.model";
import { Router } from "@angular/router";

const localStorageName = 'users';
const currentUserLocalStorageName = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User | null;

  constructor(private router: Router) {
    this.currentUser = this.getCurrentUerFromStorage();
  }

  register (user: User): void {

    if (!user.firstName || !user.lastName || !user.password || !user.email) {
      return;
    }

    this.addUser(user);
    this.router.navigate(['../../public/login']);
  }

  private addUser (user: User): void {
    let users = [];
    if (localStorage.getItem(localStorageName)) {
      users = JSON.parse(<string>localStorage.getItem(localStorageName));
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem(localStorageName, JSON.stringify(users));
  }

  login(loginEmail: string, loginPassword: string): void {
    const users = this.getUsersFromStorage()

    users.forEach( (user: User) => {
      if (loginEmail === user.email && loginPassword === user.password) {
        localStorage.setItem(currentUserLocalStorageName, JSON.stringify(user));
        this.currentUser = user;
        console.log(this.currentUser);
        this.router.navigate(['../../protected/main']);
      }
    });
  }

  logout(): void {
    localStorage.removeItem(currentUserLocalStorageName);
    this.currentUser = null
    this.router.navigate(['../../']);
  }

  private getUsersFromStorage(): User[] {
    const rawUsers = localStorage.getItem(localStorageName);
    if (!rawUsers) {
      return [];
    }
    return JSON.parse(rawUsers);
  }

  private getCurrentUerFromStorage(): User | null {
    const rawUser = localStorage.getItem(currentUserLocalStorageName)
    if (!rawUser) {
      return null;
    }
    return JSON.parse(rawUser);
  }
}
