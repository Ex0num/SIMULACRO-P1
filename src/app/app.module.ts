import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { TablaPeliculaComponent } from './Extra-vistas/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './Extra-vistas/detalle-pelicula/detalle-pelicula.component';
import { EliminarPeliculaComponent } from './Extra-vistas/eliminar-pelicula/eliminar-pelicula.component';
import { ModificarPeliculaComponent } from './Extra-vistas/modificar-pelicula/modificar-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    EliminarPeliculaComponent,
    ModificarPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
