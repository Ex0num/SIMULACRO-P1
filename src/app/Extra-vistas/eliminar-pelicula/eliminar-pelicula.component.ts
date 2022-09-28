import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { PeliculaService } from 'src/app/Servicios/srv-pelicula';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';

@Component({
  selector: 'app-eliminar-pelicula',
  templateUrl: './eliminar-pelicula.component.html',
  styleUrls: ['./eliminar-pelicula.component.css']
})
export class EliminarPeliculaComponent implements OnInit {

  constructor(srvPeliculasRecibido:PeliculaService) 
  { 
    this.srvPeliculas = srvPeliculasRecibido;
  }

  ngOnInit(): void {}

  srvPeliculas:any; 
  peliculaSeleccionada:any;

  public databasePeliculas = [
    new Pelicula(0, "Cars", "El primer lanzamiento de Cars, El primer lanzamiento de Cars, El primer lanzamiento de Cars","Otros", new Date(2018,11,26).toLocaleDateString(), 5500000, "../../../assets/assets-peliculas/cars1.jpg"),
    new Pelicula(1, "Cars 2", "El primer lanzamiento de Cars,El primer lanzamiento de Cars El primer lanzamiento de Cars", "Otros", new Date(2011,7,6).toLocaleDateString(), 45000000, "../../../assets/assets-peliculas/cars2.jpg"), 
    new Pelicula(2, "Michael Myers", "El primer lanzamiento de Cars,El primer lanzamiento de Cars,El primer lanzamiento de Cars", "Terror", new Date(1978,10,31).toLocaleDateString(), 5000000, "../../../assets/assets-peliculas/michael-myers.jpg"), 
    new Pelicula(3, "365", "El primer lanzamiento de Cars, El primer lanzamiento de Cars, El primer lanzamiento de Cars", "Amor", new Date(2020,2,7).toDateString(), 9000000, "../../../assets/assets-peliculas/365-dias.jpg"), 
    new Pelicula(4, "Navidades bien o en familia", "El primer lanzamiento de Cars,El primer lanzamiento de CarsEl primer lanzamiento de Cars", "Comedia", new Date(2018,11,26).toLocaleDateString(), 2000000, "../../../assets/assets-peliculas/navidades-bien-o-en-familia.jpg"), 
  ];

  cargarPeliculaSeleccionada(peliculaRecibida:Pelicula) 
  {
    this.peliculaSeleccionada = peliculaRecibida;

    console.log("CARGANDO BORRADO DE PELICULA");

    let btnEliminar = document.getElementById("col1-eliminar");
    btnEliminar?.removeAttribute("hidden");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-eliminar");
    txtMensajeTemporal?.setAttribute("hidden","true");
  }

  descargarPeliculaSeleccionada()
  {
    let btnEliminar = document.getElementById("col1-eliminar");
    btnEliminar?.setAttribute("hidden","true");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-eliminar");
    txtMensajeTemporal?.removeAttribute("hidden");
  }

  eliminarPelicula()
  {
    console.log("ELIMINANDO PELICULA SELECCIONADA");
    console.log(this.srvPeliculas.databasePeliculas);
    this.srvPeliculas.databasePeliculas = this.eliminarPeliSeleccionada(this.peliculaSeleccionada);
    // DetallePeliculaComponent.prototype.limpiarClickeado();
    console.log("EL NUEVO LISTADO DE PELIS");
    console.log(this.srvPeliculas.databasePeliculas);

    console.log("ASI QUEDO LA DB:");
    console.log(this.srvPeliculas.databasePeliculas);

    DetallePeliculaComponent.prototype.limpiarClickeado();
  }

  private eliminarPeliSeleccionada(peliculaRecibida:Pelicula)
  {
    
    let arrayPeliculas = new Array(); 
    arrayPeliculas = this.srvPeliculas.databasePeliculas;

    let peliculasFiltradas = new Array();
    peliculasFiltradas = arrayPeliculas.filter( (value) => 
    { 
      if (value.id == this.peliculaSeleccionada.id)
      { 
        return false;
      }
      else
      {
        return true;
      }
    });

    return peliculasFiltradas;
  } 
}
