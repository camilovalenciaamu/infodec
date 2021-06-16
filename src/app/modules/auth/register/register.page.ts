import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserI } from "@core/interfaces/user.interface";
import { UserService } from "@core/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  product_success: boolean = false;
  userForm: FormGroup;
  errorMessages: any = {
    nombre: [
      { type: 'required', message: 'El nombre es requerido' },
    ],
    apellido: [
      { type: 'required', message: 'El apellido es requerido' },
    ],
    cedula: [
      { type: 'required', message: 'La identificación es requerida' },
    ],
    es_comercio: [
      { type: 'required', message: '¿Es o no comercial?' },
    ],
  }

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private menuController: MenuController) {
    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      es_comercio: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigateByUrl('auth/login');
  }
  addUser(user: UserI) {
    this.userService.addUser(user).subscribe(
      (resp) => {
        this.product_success = true;
        this.router.navigateByUrl('home');
      }
    );
  }

  saveUser(values: any) {
    let user: UserI = {
      nombre: values.nombre,
      apellido: values.apellido,
      cedula: (values.cedula).toString(),
      es_comercio: values.es_comercio,
    };
    this.addUser(user);
  }

  getError(field: string) {
    if (this.userForm?.controls[field]?.errors?.required && (this.userForm?.controls[field]?.dirty || this.userForm?.controls[field]?.touched)) {
      return this.errorMessages[field][0]?.message;
    }
    return null;
  }
}
