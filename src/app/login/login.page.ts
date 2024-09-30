import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
      login:any={
      Usuario:"",
      Password:""
  }
  field:string=""

  constructor(private toastController: ToastController, private router: Router, private authService: AuthService ) { }

  ngOnInit() {}

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  ingresar(){
    if(this.validateModel(this.login)){
      this.presentToast("Bienvenido "+this.login.Usuario);
      let navigationExtras:NavigationExtras={
        state: {user:this.login.Usuario}
      }
      this.router.navigate(['home'], navigationExtras);
    }else{
      this.presentToast("falta: "+this.field);
    }
  }

  validateModel(model:any){
    for (var [key, value] of Object.entries(model)){
      if (value==""){
        this.field=key;
        return false;
      }
    }
    return true;
  }

  goToRecuperarContrasena(){
    this.router.navigate(['/recuperar-contrasena']);
  }

}
