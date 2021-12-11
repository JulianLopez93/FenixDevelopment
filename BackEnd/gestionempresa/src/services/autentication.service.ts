import {injectable, /* inject, */ BindingScope, service} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Empleado } from '../models';
import { Llaves } from '../config/llaves';
import { ClienteRepository, EmpleadoRepository } from '../repositories';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticationService {
  constructor(
    @repository(EmpleadoRepository)
    public empleadoRepository: EmpleadoRepository,
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository
    ) {}

  /*
   * Add service methods here
   */

  GenerarClave()
  {
    let clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave: string)
  {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarPersona(usuario: string, clave: string)
  {
    try
    {
      let p = this.empleadoRepository.findOne({where: {Email: usuario, Clave: clave}})

      if (p)
      {
        return p;
      }

      return false;

    }
    catch
    {
      return false;

    }
  }

  GenerarTokenJWT(empleado: Empleado)
  {
    let token = jwt.sign({
      data:{
        id: empleado.Id,
        correo: empleado.Email,
        nombre: empleado.Nombres+" "+empleado.Apellidos
      },

    },
    Llaves.claveJWT);
    return token;

  }

  ValidarTokenJWT(token: string)
  {
    try
    {
      let datos = jwt.verify(token, Llaves.claveJWT)
      return datos;
    

    }
    catch
    {
      return false;

    }

  }
 
}
