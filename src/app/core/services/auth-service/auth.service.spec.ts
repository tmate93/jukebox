import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from "../../models/user/user.model";
import { Router } from "@angular/router";

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: User = {
    firstName: 'First',
    lastName: 'Last',
    email: 'email@provider.com',
    password: '12345'
  }
  let mockRouter = {
    navigate: () => {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: mockRouter },
      ]
    });
    service = TestBed.inject(AuthService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register user to localStorage', () => {
    service.register(mockUser);
    let users = JSON.parse(<string>localStorage.getItem('users'));
    expect(users.find((user: any) => mockUser.email === user.email && mockUser.password === user.password)).toBeTruthy();
  });

  it('should log in', () => {
    service.register(mockUser);
    service.login(mockUser.email, mockUser.password);
    expect(service.currentUser).toEqual(mockUser);
  });
});
