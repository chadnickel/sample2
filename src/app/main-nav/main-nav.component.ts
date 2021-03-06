import { Component, OnInit } from '@angular/core';
import { ToastService} from '../toast/toast.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private toastService: ToastService, private router: Router) { }

  ngOnInit() {
  }

  showAbout(){
    this.toastService.showToast('success', 2000, 'This sas made by Chad Nickel (c) 2019');
  }

  logout() {
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify({}));
    this.router.navigate(['login']);
  }
}
