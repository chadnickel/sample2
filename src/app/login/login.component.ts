import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorageService';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface Iuser {
  id?: number;
  username: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Iuser = {

    username: null,
    password: null,

  };


  constructor(private router: Router, private toastService: ToastService) {
  }

  ngOnInit() {

  }

  login(user: Iuser) {

    console.log('from login user', user);
    const presetUser = { username: 'chad', password: 'nickel' };
    if (user.username != null && user.password != null && user.username !== '' && user.password !== '') {
      console.log('from within if statement');

      if (user.username === presetUser.username && user.password === presetUser.password) {
        this.router.navigate(['contacts', user]);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.toastService.showToast('danger', 2000, 'username or password is invalid');
      }
    } else {
      console.log('must specify credentials');
      this.toastService.showToast('warning', 2000, 'Username or password must not be blank!');
    }




  }

}
