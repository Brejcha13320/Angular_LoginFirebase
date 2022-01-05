import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.mode';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "https://webtasks-80fce-default-rtdb.firebaseio.com";
  isAutenticated = false;

  constructor( private http: HttpClient ) {
  }

  registrar(usuario: UsuarioModel){
    this.http.post(`${this.url}/usuarios.json`, usuario ).subscribe();
  }
  
  //malo hay que hace un mapeo
  logear(usuario:UsuarioModel){
    return this.http.get(`${this.url}/usuarios.json`)
        .pipe(
          map( (respuesta:any) => {
            return this.validarLogin(respuesta, usuario);
          })
        );

  }

  validarLogin(data:any, usuario:UsuarioModel){

    const usuarios: UsuarioModel[] = [];
    let findData = false;
    this.isAutenticated = false;

    if(data === null){
      return false;
    } else {
      Object.keys( data ).forEach( (key) => {
        const usuario: UsuarioModel = data[key];
        usuarios.push(usuario);
      });

      for(let i = 0 ; i < usuarios.length ; i++){
        console.log( usuarios[i].usuario + " " + usuarios[i].password );
        if(usuarios[i].usuario === usuario.usuario && usuarios[i].password === usuario.password){
          findData = true;
          this.isAutenticated = true;
        }
      }
      console.log("find data: " + findData);
      return findData;
    }

  }

  getAutenticated(){
    return this.isAutenticated;
  }



  

}
