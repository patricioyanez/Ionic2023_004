import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-septima',
  templateUrl: './septima.page.html',
  styleUrls: ['./septima.page.scss'],
})
export class SeptimaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sumar(n1:number, n2:number)
  {
    return n1+n2;
  }
  division(n1:number, n2:number)
  {
    if(n2==0)
      return undefined;
    return n1/n2;
  }

  /*
  crear metodos multiplicar y
  restar.
  Aplicar 3 pruebas diferentes a 
  cada metodo.
  */
}
