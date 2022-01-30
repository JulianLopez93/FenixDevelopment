import { ModeloEmpresas } from "./empresas.modelo";

export class ModeloClientes{
    Id?: string;
    Nombres?: string;
    Apellidos?: string;
    Telefono?: string;
    Direccion?: string;
    Email?: string;
    Clave?: string;
    empresas?: ModeloEmpresas[];
    empresaId?: string;

}