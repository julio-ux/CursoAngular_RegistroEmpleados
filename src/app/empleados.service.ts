import { Injectable } from "@angular/core";
import { Empleados } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
@Injectable()
export class EmpleadosService{
    constructor(private ServicioVentana: ServicioEmpleadosService){

    };
    empleados: Empleados[] = [
        new Empleados("Ana","Lopez","Presidente",6000),
        new Empleados("Daniel","Sanchez","Vicepresidente",5500),
        new Empleados("Maria","Alvarez","Gerente de Ventas",4000),
        new Empleados("Sonia","Vazquez","Getente de Mantenimiento",4000)
    ];

    agregarEmpleadoServicio(empleado:Empleados){
        this.ServicioVentana.muestraMensaje("Persona que se va a agregar: \n" + empleado.nombre + "\nSalario: " + empleado.salario);
        this.empleados.push(empleado);
    }
    encontrarEmpleado(id:number){
        let empleadoFound:Empleados = this.empleados[id];
        return empleadoFound;
    }
    actualizarEmpleado(id:number,empleado:Empleados){
        this.empleados[id] = empleado;
    }
}