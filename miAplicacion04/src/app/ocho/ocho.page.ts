import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ocho',
  templateUrl: './ocho.page.html',
  styleUrls: ['./ocho.page.scss'],
})
export class OchoPage implements OnInit {
  n1: string = '';
  n2: string = '';
  n3: string = '';
  promedio :any;
  
  constructor(private alertController:AlertController, 
              private toastController:ToastController,
              private router: Router ) { }

  ngOnInit() {
  }
  async promediar()
  {
    let nota1 = Number("0" + this.n1);
    let nota2 = Number("0" + this.n2);
    let nota3 = Number("0" + this.n3);

    if(!nota1 || nota1 < 10 || nota1 > 70)
      this.mensajeAlerta("El valor de la nota 1 no es valido.");
    else if(!nota2 || nota2 < 10 || nota2 > 70)
        this.mensajeAlerta("El valor de la nota 2 no es valido.");
    else if(!nota3 || nota3 < 10 || nota3 > 70)
      this.mensajeAlerta("El valor de la nota 3 no es valido.");
    else{
      this.promedio = (nota1 + nota2 + nota3) / 3;

      const toast = await this.toastController.create({
        message   : "Tu Promedio Final Es :" + Math.round(this.promedio) ,
        duration  : 3000,
        position  : 'bottom',
        color     : 'medium'
      });
      await toast.present();
    }



  }
  async mensajeAlerta(mensaje:string)
  {
    const alerta = await this.alertController.create({
      header    : "Error",
      subHeader : "Nota ingresada",
      message   : mensaje,
      buttons   : ['Aceptar'],
    });
    await alerta.present();
  }

  enviarMenu()
  {
    this.router.navigate(['/menu']);
  }
}
