import { Injectable } from '@angular/core';
import { Pelicula } from '../Entidades/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService
 {
  peliculaRecibida:any;

  public databasePeliculas = [
    new Pelicula(0, "Cars", "El primer lanzamiento de Cars, El primer lanzamiento de Cars, El primer lanzamiento de Cars","Otros", new Date(2018,11,26).toLocaleDateString(), 5500000, "../../../assets/assets-peliculas/cars1.jpg"),
    new Pelicula(1, "Cars 2", "El primer lanzamiento de Cars,El primer lanzamiento de Cars El primer lanzamiento de Cars", "Otros", new Date(2011,7,6).toLocaleDateString(), 45000000, "../../../assets/assets-peliculas/cars2.jpg"), 
    new Pelicula(2, "Michael Myers", "El primer lanzamiento de Cars,El primer lanzamiento de Cars,El primer lanzamiento de Cars", "Terror", new Date(1978,10,31).toLocaleDateString(), 5000000, "../../../assets/assets-peliculas/michael-myers.jpg"), 
    new Pelicula(3, "365", "El primer lanzamiento de Cars, El primer lanzamiento de Cars, El primer lanzamiento de Cars", "Amor", new Date(2020,2,7).toDateString(), 9000000, "../../../assets/assets-peliculas/365-dias.jpg"), 
    new Pelicula(4, "Navidades bien o en familia", "El primer lanzamiento de Cars,El primer lanzamiento de CarsEl primer lanzamiento de Cars", "Comedia", new Date(2018,11,26).toLocaleDateString(), 2000000, "../../../assets/assets-peliculas/navidades-bien-o-en-familia.jpg"), 
  ];

  leerDb()
  {
    return this.databasePeliculas;
  }

  constructor(){};
}
