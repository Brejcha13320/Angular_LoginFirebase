import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario:FormGroup;

  constructor(private _dataService: DataService ) { 
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
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("^[0-9]*$")
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
    if(this.formulario.invalid){
      return ;
    } else {
      
      this._dataService.registrar(this.formulario.value.nombre,
                                this.formulario.value.apellido,
                                this.formulario.value.usuario,
                                this.formulario.value.email,
                                this.formulario.value.password);

      this.formulario.reset({
        nombre: '',
        apellido: '',
        usuario: '',
        email: '',
        password: ''
      });




    }
  }

}
