import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.mode';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  registrar(usuario: UsuarioModel){
    
    console.log(usuario);

  }

  logear(usuario:string, password:string){

  }

}
