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
  async guardar()
  {    
// Ejercicio 3: Validar todos los datos  antes de guardar
// usar TOAST rojo error y verde guardado.
    if(!this.persona.rut)
      this.mensajeError("Falta el rut");
    else if(!this.persona.nombre)
      this.mensajeError("Falta el nombre");
    else if(!this.persona.direccion)
      this.mensajeError('Falta el Dirección');
    else if(!this.persona.correo)
      this.mensajeError('Falta el Correo');
    else if(!this.persona.telefono)
      this.mensajeError('Falta el teléfono');
    else if(!this.persona.anioNacimiento)
      this.mensajeError('Falta Año de Nacimiento');
    else{
      this.crud.guardar(this.persona.rut, this.persona);
      this.mensajeExito("Persona guardada");
      this.persona = []; // limpia el form
    }
    
// Ejercicio 4: Terminar el crud para los datos de persona
  }
  async mensajeError(mensaje:string)
  {
    const t = await this.toast.create({
      message     : mensaje,
      color       : 'danger',
      duration    : 3000,
      icon        : 'alert-circle-outline',
      buttons     : ['Aceptar']
    });
    t.present();
  }
  async mensajeExito(mensaje:string)
  {
    const t = await this.toast.create({
      message     : mensaje,
      color       : 'success',
      duration    : 3000,
      icon        : 'checkmark-circle-outline',
      buttons     : ['Aceptar']
    });
    t.present();
  }
  async leer()
  {    
    if(!this.persona.rut)
      this.mensajeError("Falta el rut");
    else
    {
      await this.crud.leer(this.persona.rut).then( x => {this.persona = x })
      if(!this.persona)
      {
        this.mensajeError("Rut no encontrado");
        this.persona = [];
      }
    }
  }
  async eliminar()
  {    
    if(!this.persona.rut)
      this.mensajeError("Falta el rut");
    else
    {
      await this.crud.eliminar(this.persona.rut)
      this.mensajeExito("Operación finalizada")
      this.persona = [];      
    }
  }
  limpiar()
  {
    this.persona = []; 
  }
}
