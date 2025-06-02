export class Evento {
    Nombre : string
    Descripcion : string
    Fecha : string
    Tipo : string
    Estado : string
    constructor(nombre : string , descripcion : string , fecha : string , tipo : string , estado : string) {
        this.Nombre = nombre
        this.Descripcion = descripcion
        this.Fecha = fecha
        this.Tipo = tipo
        this.Estado = estado
    }
}