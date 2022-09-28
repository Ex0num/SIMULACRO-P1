import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BusquedaComponent } from 'src/app/busqueda/busqueda.component';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { EliminarPeliculaComponent } from '../eliminar-pelicula/eliminar-pelicula.component';
import { ModificarPeliculaComponent } from '../modificar-pelicula/modificar-pelicula.component';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  tituloPelicula:any;
  descripcionPelicula:any;
  tipoPeliculaDetalle:any;
  fechaEstreno:any;
  cantidadPublico:any;

  cargarPeliculaSeleccionada(peliculaRecibida:Pelicula)
  {
    console.log("CARGANDO DETALLES DE PELICULA");

    this.tituloPelicula = peliculaRecibida.nombre;
    this.descripcionPelicula = peliculaRecibida.descripcion;
    document.getElementById("card-img-detalle")?.setAttribute("src",peliculaRecibida.fotoPelicula);
    this.tipoPeliculaDetalle = peliculaRecibida.tipo.toString();
    this.fechaEstreno = peliculaRecibida.fechaEstreno;
    this.cantidadPublico = peliculaRecibida.cantidadPublico;

    let btnLimpiar = document.getElementById("col1-detalle");
    btnLimpiar?.removeAttribute("hidden");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-detalle");
    txtMensajeTemporal?.setAttribute("hidden","true");
  }

  limpiarClickeado()
  {
    let btnLimpiar = document.getElementById("col1-detalle");
    btnLimpiar?.setAttribute("hidden","true");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-detalle");
    txtMensajeTemporal?.removeAttribute("hidden");

    EliminarPeliculaComponent.prototype.descargarPeliculaSeleccionada();
    ModificarPeliculaComponent.prototype.descargarPeliculaSeleccionada();
    TablaPeliculaComponent.prototype.refrescarTabla();
  }

}
