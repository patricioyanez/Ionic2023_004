import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlBaseAPI = 'https://jsonplaceholder.typicode.com/';
  listado : any = []
  constructor(private http: HttpClient) { }

  getUsers()
  {
    const url = this.urlBaseAPI + 'users';
    return this.http.get(url).subscribe((data=[]) => {this.listado = data;});
  }

}

