import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-terceradetalle',
  templateUrl: './terceradetalle.page.html',
  styleUrls: ['./terceradetalle.page.scss'],
})
export class TerceradetallePage implements OnInit {
  personas = [
    {
      id    : 1,
      nombre: 'Juan',
      edad  : 25,
      foto  : 'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000'
    },
    {
      id    : 2,
      nombre: 'Diana',
      edad  : 30,
      foto  : 'https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-260nw-2018571389.jpg'

    },
    {
      id    : 3,
      nombre: 'Pedro',
      edad  : 45,
      foto  : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000'

    }
  ]
  persona:any;
  constructor(private activated:ActivatedRoute,
              private alertController : AlertController,
              private toastController : ToastController) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(x =>{
      const idPersona = Number(x.get('idPersona'));
      this.persona = this.personas.find(x => {return x.id == idPersona});
    })
  }
  async si()
  {
    // toast
    const t = await this.toastController.create({
      message : 'Le agradó la persona',
      icon    : 'checkmark-circle-outline',
      color   : 'success',
      duration: 3000
    });
    t.present();
  }
  async no()
  {
    // alert
    const a = await this.alertController.create({
      subHeader : 'Alerta',
      header    : 'Mensaje',
      message   : 'No le agradó la persona',
      buttons   : ['Aceptar']
    });
    a.present();
  }
}
