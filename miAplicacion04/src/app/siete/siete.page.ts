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
      position : 'middle', //bottom, top
    });
    await toast.present();
    
    console.log('Hola Mundo 😊❤❤😊');
  }
  async restar()
  {
    this.resultado = "" + (Number(this.n1) - Number(this.n2));
  }
  async multiplicar()
  {
    this.resultado = "" + (Number(this.n1) * Number(this.n2));
  }
  async dividir()
  {
    if(Number(this.n2) != 0)
      this.resultado = "" + (Number(this.n1) / Number(this.n2));
    else
    {
      this.resultado = "No se puede dividir por cero";      
    }
    const toast = await this.toastController.create({
      message:'Resultado: ' + this.resultado,
      duration : 5000,
      position : 'top',
    });
    await toast.present();
  }
  async limpiar()
  {
    this.n1 =
    this.n2 = 
    this.resultado ="";
  }

    
  // Ejercicios:
  // crear una nueva pagina que permita calculador el promedio de 3 notas,
  // mostrar si aprobó o no, según resultado obtenido.
  // usar alert si reprueba y toast si aprueba.
}
