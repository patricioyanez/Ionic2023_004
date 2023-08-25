import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  numero : number = 0;
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async alerta()
  {
    const alert = await this.alertController.create({
      header    :"Alerta",
      subHeader :"Clase Alerta",
      message   :'Este es el mensaje de la alerta',
      buttons   : ['Ok'],
    });
    await  alert.present(); // muestra el mensaje
  }
  async incrementar()
  {
    this.numero++;
  }
}
