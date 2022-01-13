import { Component, OnInit } from '@angular/core';
import { Empleados } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';
  constructor(private miServicio: ServicioEmpleadosService,private empleadosService: EmpleadosService) {
    // this.empleados = this.empleadosService.empleados;
   }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  // empleados: Empleados[] = [
  //     new Empleados("Ana","Lopez","Presidente",6000),
  //     new Empleados("Daniel","Sanchez","Vicepresidente",5500),
  //     new Empleados("Maria","Alvarez","Gerente de Ventas",4000),
  //     new Empleados("Sonia","Vazquez","Getente de Mantenimiento",4000)
  // ];
  empleados: Empleados[] = [];
  agregarEmpleado(){
    let miEmpleado = new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Empleado Registrado: " + this.cuadroNombre + " " + this.cuadroApellido);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;


}
