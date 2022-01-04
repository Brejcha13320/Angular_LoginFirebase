import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.mode';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "https://webtasks-80fce-default-rtdb.firebaseio.com";

  constructor( private http: HttpClient ) {
  }

  registrar(usuario: UsuarioModel){
    this.http.post(`${this.url}/usuarios.json`, usuario ).subscribe();
  }

  logear(usuario:UsuarioModel){
    console.log(usuario);
  }

}
