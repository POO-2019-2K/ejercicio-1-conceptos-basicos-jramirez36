export default class Contacto
{
    constructor(nombre, telefono,puesto, correo , apodo)
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._puesto = puesto;
        this._correo = correo;
        this._apodo = apodo;
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
    set nombre(nombre)
    {
        this._nombre = nombre;
    }
    set puesto(puesto)
    {
        this._puesto = puesto.toUpperCase();
    }
    set correo(correo)
    {
        this._correo = correo;
    }
    organizar()
    {
        console.log(`El nombre es ${this._nombre} con telefono:  ${this._telefono} que esta en el puesto: ${this._puesto} con el correo ${this._correo} tiene el apodo de ${this._apodo}`);
    }

}