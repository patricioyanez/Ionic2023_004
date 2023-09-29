import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string = '';
  valor: string = '';
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
  }
  agregar()
  {
    // Ejercicio 2: validar que los atributos
    // tengan datos que guardar.
    // Al guardar limpiar los atributos
    this.storage.set(this.id, this.valor);
  }
}
