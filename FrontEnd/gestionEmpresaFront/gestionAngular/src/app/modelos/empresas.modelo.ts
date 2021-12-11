import { ModeloClientes } from "./clientes.modelo";
import { ModeloEmpleados } from "./epleados.modelo";

export class ModeloEmpresas{
    Id?: string;
    RazonSocial?: string;
    Nit?: string;
    empleado?: ModeloEmpleados;
    clientes?: ModeloClientes[];
}