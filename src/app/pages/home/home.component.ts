import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.mode';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  usuario = new UsuarioModel();

  constructor( private dataService: DataService,
               private activatedRoute: ActivatedRoute ) {

    this.activatedRoute.params.subscribe( params => {
      this.dataService.getUsuario(params['usuario'])
        .subscribe( (respuesta:any) => {
          this.usuario = respuesta;
        })
    });
  }

  ngOnInit(): void {
  }

  salir(){
    this.dataService.logOut();
  }

}
