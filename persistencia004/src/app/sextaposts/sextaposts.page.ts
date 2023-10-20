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
  constructor(private api: ApirestService,
              private activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(p=>{
      let id = p.get('id')??'';
      this.api.getUserPosts(id);
    })
  }
  ionViewDidEnter()
  {
    this.posts= this.api.posts;
  }
}
