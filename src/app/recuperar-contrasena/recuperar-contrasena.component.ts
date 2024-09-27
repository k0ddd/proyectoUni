import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss'],
})
export class RecuperarContrasenaComponent  implements OnInit {
  email: string = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {}
  async recuperarContrasena() {
    if (this.email){
      const alert = await this.alertController.create({
        header: 'Exito',
        message: 'se ha enviado correctamente el correo para recuperar tu contraseña',
        buttons: ['Aceptar'],
      });
      await alert.present();

      
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Ingresa el correo electronico',
        buttons: ['Aceptar'],
      });    
      await alert.present();
    }
  }

}


