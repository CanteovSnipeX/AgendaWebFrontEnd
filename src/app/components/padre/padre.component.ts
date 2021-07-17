import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  title:string = 'Componente padre';
  nombre:string = 'Fredy';
  apellido:string = 'Garcia';
  edad:number = 45;
  infoHijo;

  constructor() { }

  ngOnInit(): void {
  }

  capturarNombre(){
    console.log(this.nombre);
  }

  obtenerDatos(event){
    this.infoHijo = event;
    console.log(event);
  }

}
