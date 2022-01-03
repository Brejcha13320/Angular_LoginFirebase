import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;

  usuario:any = {
    usuario: "",
    password: ""
  }

  constructor() {
    this.formulario = new FormGroup({
      'usuario': new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]),

      'password': new FormControl('', [
        Validators.required
      ])

    });

    this.formulario.setValue( this.usuario );

   }

  ngOnInit(): void {
  }

  logear(){
    if(this.formulario.invalid){
      return ;
    } else {
      console.log(this.formulario.value);
    }

    
  }

}
