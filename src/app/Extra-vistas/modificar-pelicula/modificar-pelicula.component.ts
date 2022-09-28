import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  tituloPelicula:any;
  descripcionPelicula:any;
  tipoPeliculaDetalle:any;
  fechaEstreno:any;
  cantidadPublico:any;

  cargarPeliculaSeleccionada(peliculaRecibida:Pelicula)
  {
    console.log("CARGANDO MODIFICACION DE PELICULA");
    // console.log(peliculaRecibida);

    this.tituloPelicula = peliculaRecibida.nombre;

    this.descripcionPelicula = peliculaRecibida.descripcion;
    document.getElementById("card-img-modificar")?.setAttribute("src",peliculaRecibida.fotoPelicula);
    this.tipoPeliculaDetalle = peliculaRecibida.tipo.toString();
    this.fechaEstreno = peliculaRecibida.fechaEstreno;
    this.cantidadPublico = peliculaRecibida.cantidadPublico;

    let btnModificar = document.getElementById("col1-modificar");
    btnModificar?.removeAttribute("hidden");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-modificar");
    txtMensajeTemporal?.setAttribute("hidden","true");
  }

  descargarPeliculaSeleccionada()
  {
    let btnModificar = document.getElementById("col1-modificar");
    btnModificar?.setAttribute("hidden","true");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-modificar");
    txtMensajeTemporal?.removeAttribute("hidden");
  }
}
