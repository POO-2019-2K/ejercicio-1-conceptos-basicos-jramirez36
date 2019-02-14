export default class Crear
{
    constructor(nombre, telefono,puesto, correo , cuenta_bancaria, deudas )
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._puesto = puesto;
        this._correo = correo;
        this._cuenta_bancaria = cuenta_bancaria;
        this._deudas = deudas ;
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
    set cuenta_bancaria(cuenta_bancaria)
    {
        if (this._cuenta_bancaria.length < 5 )
        {
        this._cuenta_bancaria = "normal";
        }
        elseif(this._cuenta_bancaria.length < 10 )
        {
        this._telefono =  "alta";
        }
        elseif(this._cuenta_bancaria.length < 20 )
        {
        this._telefono =  "premium";
        }
        elseif(this._cuenta_bancaria.length < 25 )
        {
        this._telefono =  "super premium";
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
    set puesto(puesto)
    {
        this._puesto = puesto.toUpperCase();
    }
    set correo(correo)
    {
        this._correo = correo;
    }
    set deudas(deudas)
    {
        this._deudas = deudas;
    }
    organizar()
    {
        console.log(`El nombre es ${this._nombre} con telefono:  ${this._telefono} que esta en el puesto: ${this._puesto} con el correo ${this._correo} tiene la cuenta ${this._cuenta_bancaria} su deuda ${this._deuda}`);
    }

}