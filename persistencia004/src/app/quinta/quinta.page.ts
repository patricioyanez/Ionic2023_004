import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona: any = [];
  constructor(private crud: CrudService,
              private toast: ToastController) { }

  ngOnInit() {
  }
  async agregar()
  {
    
// Ejercicio 3: Validar todos los datos  antes de guardar
// usar TOAST rojo error y verde guardado.
    if(!this.persona.rut)
      this.mensajeError("Falta el rut");
    else if(!this.persona.nombre)
      this.mensajeError("Falta el nombre");
    else{
      this.crud.guardar(this.persona.rut, this.persona);

    }
    
// Ejercicio 4: Terminar el crud para los datos de persona
  }
  async mensajeError(mensaje:string)
  {
    const t = await this.toast.create({
      message     : mensaje,
      color       : 'danger',
      duration    : 3000,
      icon        : 'alert'
    });
    t.present();
  }
}
