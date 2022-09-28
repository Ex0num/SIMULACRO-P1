import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BusquedaComponent } from 'src/app/busqueda/busqueda.component';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { PeliculaService } from 'src/app/Servicios/srv-pelicula';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { EliminarPeliculaComponent } from '../eliminar-pelicula/eliminar-pelicula.component';
import { ModificarPeliculaComponent } from '../modificar-pelicula/modificar-pelicula.component';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})



export class TablaPeliculaComponent implements OnInit 
{

  public dbPeliculas:any;

  constructor(srvPeliculasRecibido:PeliculaService) 
  {
    this.srvPeliculas = srvPeliculasRecibido;
    this.dbPeliculas = this.srvPeliculas.leerDb();
  }

  ngOnInit(): void 
  {
    this.cargarPeliculasATabla();
  }

  srvPeliculas:PeliculaService;

  peliculasColumn1 = new Array();
  peliculasColumn2 = new Array();

  peliculaSeleccionada:any;
  // @Output() peliculaSeleccionada= new EventEmitter<Pelicula>();

  peliculaClickeada(peliculaRecibida:Pelicula)
  {
    console.log("UNA PELICULA EN LA TABLA FUE CLICKEADA");
    console.log(peliculaRecibida);
    
    this.peliculaSeleccionada = peliculaRecibida;

    DetallePeliculaComponent.prototype.cargarPeliculaSeleccionada(peliculaRecibida);
    ModificarPeliculaComponent.prototype.cargarPeliculaSeleccionada(peliculaRecibida);
    EliminarPeliculaComponent.prototype.cargarPeliculaSeleccionada(peliculaRecibida);
  }

  cargarPeliculasATabla()
  {
    this.peliculasColumn1 = new Array();
    this.peliculasColumn2 = new Array();

    console.log("LEYENDO PELICULAS DB");
    console.log(this.dbPeliculas);

    let cantidadPeliculas = this.dbPeliculas.length;

    let peliculasDivididas:number = (cantidadPeliculas/2);

      if (peliculasDivididas % 2 > 0 && peliculasDivididas % 2 < 1)
      {
        peliculasDivididas = peliculasDivididas - 0.5;
  
        for (let i = 0; i < peliculasDivididas; i++) 
        {
          this.peliculasColumn1.push(this.dbPeliculas[i]);
        }
  
        let peliculasDivididasCol2 = peliculasDivididas+1;
  
        for (let j = peliculasDivididas; j < peliculasDivididas + peliculasDivididasCol2; j++) 
        {
          this.peliculasColumn2.push(this.dbPeliculas[j]);
        }
      }
      else
      {
      
        for (let i = 0; i < peliculasDivididas; i++) 
        {
          this.peliculasColumn1.push(this.dbPeliculas[i]);
        }
  
        for (let j = peliculasDivididas; j < peliculasDivididas + peliculasDivididas; j++) 
        {
          this.peliculasColumn2.push(this.dbPeliculas[j]);
        }
      }

    console.log(this.peliculasColumn1);
    console.log(this.peliculasColumn2);
  }

  refrescarTabla()
  {
    this.peliculasColumn1 = new Array();
    this.peliculasColumn2 = new Array();

    console.log("LEYENDO PELICULAS DB");
    console.log(this.dbPeliculas);

    let cantidadPeliculas = this.dbPeliculas.length;

    let peliculasDivididas:number = (cantidadPeliculas/2);

      if (peliculasDivididas % 2 > 0 && peliculasDivididas % 2 < 1)
      {
        peliculasDivididas = peliculasDivididas - 0.5;
  
        for (let i = 0; i < peliculasDivididas; i++) 
        {
          this.peliculasColumn1.push(this.dbPeliculas[i]);
        }
  
        let peliculasDivididasCol2 = peliculasDivididas+1;
  
        for (let j = peliculasDivididas; j < peliculasDivididas + peliculasDivididasCol2; j++) 
        {
          this.peliculasColumn2.push(this.dbPeliculas[j]);
        }
      }
      else
      {
      
        for (let i = 0; i < peliculasDivididas; i++) 
        {
          this.peliculasColumn1.push(this.dbPeliculas[i]);
        }
  
        for (let j = peliculasDivididas; j < peliculasDivididas + peliculasDivididas; j++) 
        {
          this.peliculasColumn2.push(this.dbPeliculas[j]);
        }
      }

    console.log(this.peliculasColumn1);
    console.log(this.peliculasColumn2);
  }

  leerPeliculasDB()
  {
    let peliculasDB = this.srvPeliculas.databasePeliculas;
    // console.log(peliculasDB);
    return  peliculasDB;
  }

}

