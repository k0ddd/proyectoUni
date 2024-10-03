import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

>>>>>>> parent of d973033 (routing authguard hecho)

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  constructor(private router: Router) { }
=======
  constructor(private toastController: ToastController, private router: Router ) { }
>>>>>>> parent of d973033 (routing authguard hecho)
=======
  constructor(private toastController: ToastController, private router: Router ) { }
>>>>>>> parent of d973033 (routing authguard hecho)

  ngOnInit() {
  }

  goToRecuperarContrasena(){
    this.router.navigate(['/recuperar-contrasena']);
  }

}
