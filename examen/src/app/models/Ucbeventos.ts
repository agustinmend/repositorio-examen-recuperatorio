import { NumberValueAccessor } from "@angular/forms";
import { Evento } from "./eventos";

export class Ucbeventos {
    eventos : Evento[]
    constructor() {
        this.eventos = []
    }
    Crear(nombre : string , descripcion : string , fecha : string , tipo : string , estado : string) : void {
        let crear : Boolean = true
        for(let i = 0 ; i < this.eventos.length ; ++i) {
            if(nombre == this.eventos[i].Nombre) {
                crear = false    
            }
        }
        if(crear == true) {
            let nuevo = new Evento(nombre , descripcion , fecha , tipo , estado)
            if(nombre != '') {
                this.eventos.push(nuevo)
            }
            else {
                alert('No se puede anadir evento vacio')
            }
        }
        else {
            alert('No se puede agregar este evento')
        }
    }
    Eliminar(indice : Number) {
        let auxiliar : Evento[] = []
        for(let i = 0 ; i < this.eventos.length ; ++i) {
            if(indice != i) {
                auxiliar.push(this.eventos[i])
            }
        }
        this.eventos = auxiliar
    }
    Editar(nombre : string , descripcion : string , fecha : string , tipo : string , estado : string , indice : number) {
        this.eventos[indice].Nombre = nombre
        this.eventos[indice].Descripcion = descripcion
        this.eventos[indice].Fecha = fecha
        this.eventos[indice].Tipo = tipo
        this.eventos[indice].Estado = estado
    }
}
