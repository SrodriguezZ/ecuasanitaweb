import axios from "axios";

const UrlBase = "https://ecuasanitasok.onrender.com";

const apibase = "/api/";

export const BASE_API = `${UrlBase}${apibase}`;

export const URlLogin = {
  login: 'login',
  register: 'cliente',
}

export const URlClientes = {
  listar: 'cliente',
  guardar: 'cliente',
  editar: 'cliente',
  eliminar: 'cliente',
}

export const URlProducto = {
  listar: 'producto',
  guardar: 'producto',
  editar: 'producto',
  eliminar: 'producto',
}

export const URlFactura = {
  listar: 'factura',
  guardar: 'factura',
  editar: 'factura',
  eliminar: 'factura',
}

export const instance = axios.create({
  baseURL: BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
});