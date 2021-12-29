import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  constructor() { }

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleado.emit(value);
  }
  ngOnInit(): void {
  }

}
