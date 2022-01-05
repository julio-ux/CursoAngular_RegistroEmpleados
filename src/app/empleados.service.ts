import { Empleados } from "./empleado.model";

export class EmpleadosService{
    empleados: Empleados[] = [
        new Empleados("Ana","Lopez","Presidente",6000),
        new Empleados("Daniel","Sanchez","Vicepresidente",5500),
        new Empleados("Maria","Alvarez","Gerente de Ventas",4000),
        new Empleados("Sonia","Vazquez","Getente de Mantenimiento",4000)
    ];

    agregarEmpleadoServicio(empleado:Empleados){
        this.empleados.push(empleado);
    }
}