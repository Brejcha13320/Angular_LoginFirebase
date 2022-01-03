import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuario:any = {
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    password: '',
    tareas: []
  }

  constructor() {
  }

  registrar(nombre:string, apellido:string, usuario:string, email:string, password:string){
    this.usuario.nombre = nombre;
    this.usuario.apellido = apellido;
    this.usuario.usuario = usuario;
    this.usuario.email = email;
    this.usuario.password = password;
    console.log(this.usuario);
  }

  logear(usuario:string, password:string){

  }

}
