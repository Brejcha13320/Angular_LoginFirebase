import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.mode';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;
  usuario = new UsuarioModel();
  errorDatos = false;

  constructor( private dataService:DataService,
               private router:Router ) {
    this.formulario = new FormGroup({
      'usuario': new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]),

      'password': new FormControl('', [
        Validators.required
      ])

    });

   }

  ngOnInit(): void {
  }

  logear(){
    if(this.formulario.invalid){
      return ;
    } else {
      this.dataService.logear(this.usuario)
          .subscribe( (data)=> {
            if(data){
              this.errorDatos = false;
              this.router.navigateByUrl(`/home/${this.usuario.usuario}`);
            } else {
              this.errorDatos = true;
            }
          });
    }

    
  }

}
