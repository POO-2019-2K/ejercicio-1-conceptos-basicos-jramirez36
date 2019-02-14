export default class Crear
{
    constructor(nombre, telefono,tarjeta_credito, correo , llegada, habitacion , costo, tiempo_estaria)
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._tarjeta_credito = tarjeta_credito;
        this._correo = correo;
        this._llegada = llegada;
        this._habitacion = habitacion;
        this._costo = costo;
        this._tiempo_estaria = tiempo_estaria;
    } 
    set telefono(telefono)
    {
        if (this.telefono.length < 10 )
        {
        this._telefono = "incorrecto";
        }
        else
        {
        this._telefono;
        }
    }
    set habitacion(habitacion)
    {
        if (this.habitacion.length < 50 )
        {
        this._telefono = "libre";
        }
        else
        {
        this._telefono =  "bloqueada";
        }
    }
    set nombre(nombre)
    {
        return this._nombre = nombre;
    }
    set costo(costo)
    {
        return this._costo = costo;
    }
    set tarjeta_credito(tarjeta_credito)
    {
        if (this._tarjeta_credito.length == 16 )
        {
        this._tarjeta_credito = "correcta";
        }
        else
        {
        this._tarjeta_credito =  "bloqueada";
        }
    }
    set correo(correo)
    {
        this._correo = correo;
    }
    set tiempo_estaria(tiempo_estaria)
    {
        this._tiempo_estaria = tiempo_estaria;
    }
    set llegada(llegada)
    {
        if (this._llegada.length == 9 )
        {
        this._llegada = llegada;
        }
        else
        {
        var f = new Date();
        this._llegada = (f.getDate() + "/" + (f.getMonth()) + "/" + f.getFullYear());
        }
        
    }
    organizar()
    {
        console.log(`El nombre es ${this._nombre} con telefono:  ${this._telefono} que dio su tarjeta de credito por si sucede algo: ${this._tarjeta_credito} con el correo ${this._correo} llegara el dia ${this._llegada} con un costo de ${this._costo} estara un total de: ${this._tiempo_estaria} `);
    }

}