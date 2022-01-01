import { Component } from '@angular/core';
import { Empleados } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  constructor(private miServicio: ServicioEmpleadosService){

  }
  empleados: Empleados[] = [
      new Empleados("Ana","Lopez","Presidente",6000),
      new Empleados("Daniel","Sanchez","Vicepresidente",5500),
      new Empleados("Maria","Alvarez","Gerente de Ventas",4000),
      new Empleados("Sonia","Vazquez","Getente de Mantenimiento",4000)
  ];
  agregarEmpleado(){
    let miEmpleado = new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Empleado Registrado: " + this.cuadroNombre + " " + this.cuadroApellido);
    this.empleados.push(miEmpleado);
  }
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

}
