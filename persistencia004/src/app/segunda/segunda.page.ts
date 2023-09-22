import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {
  valorParametro:any;
  valorParametro2:any;
  constructor(private activated:ActivatedRoute) { }

  ngOnInit() {
    this.valorParametro = this.activated.snapshot.paramMap.get('valorURL');

    this.activated.paramMap.subscribe(params => {
      this.valorParametro2= params.get('numero');
    });



  }

}
