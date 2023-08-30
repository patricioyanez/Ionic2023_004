import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {
  nombre  : string = "Juan";
  apellido: string;
  mensaje : string;
  mostrar : boolean = true;
  asignaturas = [
    {nombre:"Base de datos" , nota:39.55},
    {nombre:"Programación"  , nota:45},
    {nombre:"Matématica"    , nota:33},    
  ]

  constructor() { 
    this.apellido = "Pérez";
    this.mensaje = "Alumno con buenas notas"
  }

  ngOnInit() {
  }

}
