import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  titulo = 'Actualiza Empleados';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  actualizaEmpleado(): void{
    alert("Hola Mundo");
  }
  volverHome(): void{
    this.router.navigate([""]);
  }
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

}
