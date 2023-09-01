import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-siete',
  templateUrl: './siete.page.html',
  styleUrls: ['./siete.page.scss'],
})
export class SietePage implements OnInit {
  nombre = "Juan";
  apellido = "Perez";
  n1 = '';
  n2 = '';
  resultado = '';
  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }
  async sumar()
  {
    this.resultado = this.n1 + this.n2;
    const toast = await this.toastController.create({
      message:'El resultado es:' + this.resultado,
      duration : 3000,
      position : 'middle',
    });
    await toast.present();
    
    console.log('Hola Mundo 😊❤❤😊');
  }
}
