import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadoDeLista: Empleados;
  @Input() indice: number;

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  actualizarEmpleado(): void{
    this.router.navigate(["actualizarempleado"]);
  }

}
