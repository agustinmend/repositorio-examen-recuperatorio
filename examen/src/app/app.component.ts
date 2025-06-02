import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ucbeventos } from './models/Ucbeventos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , CommonModule , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examen';
  Nombre : string = ''
  Descripcion : string =''
  Fecha : string = ''
  Tipo : string = ''
  Estado : string = ''
  programa : Ucbeventos = new Ucbeventos()

  Crear(Nombre : string , Descripcion : string , Fecha : string , Tipo : string , Estado : string) {
    this.programa.Crear(this.Nombre, this.Descripcion , this.Fecha , this.Tipo , this.Estado)
    this.Nombre =''
    this.Descripcion =''
    this.Fecha = ''
    this.Tipo = ''
    this.Estado = ''
  }
  Eliminar(indice : number) {
    this.programa.Eliminar(indice)
  }
}
