import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocho',
  templateUrl: './ocho.page.html',
  styleUrls: ['./ocho.page.scss'],
})
export class OchoPage implements OnInit {
  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  promedio = 0;
  
  constructor() { }

  ngOnInit() {
  }
  async promediar()
  {
    this.promedio = (this.n1 +
                    this.n2 +
                    this.n3) / 3;
  }
}
