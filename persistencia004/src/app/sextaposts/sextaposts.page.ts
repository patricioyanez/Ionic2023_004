import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../sexta/apirest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sextaposts',
  templateUrl: './sextaposts.page.html',
  styleUrls: ['./sextaposts.page.scss'],
})
export class SextapostsPage implements OnInit {
  posts : any = [];
  id : any ;
  constructor(private api: ApirestService,
              private activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(p=>{
      this.id = p.get('id')??'';
    })
    this.listar();
  }
  async listar()
  {
    this.posts = await this.api.getUserPosts(this.id);
    //this.posts = this.api.listado;
  }

}
