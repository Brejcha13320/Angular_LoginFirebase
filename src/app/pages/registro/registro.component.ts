import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario:FormGroup;

  usuario:any = {
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    password: ''
  }

  constructor() { 
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),

      'apellido': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),

      'usuario': new FormControl('', [
        Validators.required
      ]),

      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
      ]),

      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])

      

    });
  }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.formulario);
    console.log(this.formulario.controls['nombre'].errors?.['required']);
  }

}
