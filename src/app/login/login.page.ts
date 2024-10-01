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
      const email = this.login.Uusario;
      const password = this.login.Password;

      this.authService.login(email, password).subscribe(
        (user) => {
          if (email.endsWith('@profesor.duocuc.cl')){
            this.presentToast("Bienvenidx docenete")
            this.router.navigate(['/home']);
          } else if (email.endsWith('@duocuc.cl')){
            this.presentToast("Bienvenide Alumne");
            this.router.navigate(['/home-alumno']);
          }
        },
        (error) => {
          this.presentToast(error);
        }
      );
      } else {
        this.presentToast("Falta: "+this.field);
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
