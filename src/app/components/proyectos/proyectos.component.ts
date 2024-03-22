import { Component } from '@angular/core';
import { Proyectos } from '../../models/proyectos';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  
  proyectos: Proyectos[]=[];

  proyectoSeleccionado: any = null;



 seleccionarProyecto(proyecto: any) {
    if (this.proyectoSeleccionado === proyecto) {
      this.proyectoSeleccionado = null; // Deselecciona el proyecto
    } else {
      this.proyectoSeleccionado = proyecto;
    }
  }



  constructor(private proyectoService : ProyectoService){}

  ngOnInit(): void{
    this.proyectoService.getProyectos().subscribe((result: Proyectos[]) => (this.proyectos = result));
  }
}

