import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private menuController: MenuController) { }

  ngOnInit() {
  }

  goToRegister() {
    this.router.navigateByUrl('auth/register');
  }
  login() {
    this.router.navigateByUrl('home');
  }

}
