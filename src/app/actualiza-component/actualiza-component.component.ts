import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmptyError } from 'rxjs';
import { Empleados } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  titulo = 'Actualiza Empleados';
  constructor(private router: Router,private route:ActivatedRoute,private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params["id"];
    let empleado:Empleados = this.empleadoService.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  actualizaEmpleado(): void{
    this.indice = this.route.snapshot.params["id"];
    let miEmpleado = new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate([""]);
  }
  eliminarEmpleado(): void{
    this.indice = this.route.snapshot.params["id"];
    this.empleadoService.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
  }
  volverHome(): void{
    this.router.navigate([""]);
  }
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  indice:number;

}
