import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  title:string = 'Componente hijo';
  nombre:string = 'Juan';
  apellido:string = 'Garcia';
  @Input() nombrePadre:string;
  @Input() apellidoPadre:string;
  @Input() edadPadre:number;

  @Output() enviarDatos = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatosEvento(){
    this.enviarDatos.emit({
      'nombre': this.nombre,
      'apellido': this.apellido
    })
  }

}
