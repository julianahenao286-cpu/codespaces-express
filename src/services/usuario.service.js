import {crearUsuario} from '../repository/usuario.repository.js';
import {leerUsuario} from '../repository/usuario.repository.js';
import {actualizarUsuario} from '../repository/usuario.repository.js';
import {eliminarUsuario} from '../repository/usuario.repository.js';

export const crearUsuarioService =  (usuarioData) => {
    return crearUsuario(usuarioData);
}

export const leerUsuarioService = () => {
    return leerUsuario(id);
}

export const actualizarUsuarioService = (usuarioId, usuarioData) => {
    return actualizarUsuario(usuarioId, usuarioData);
}

export const eliminarUsuarioService = (usuarioId) => {
    return eliminarUsuario(usuarioId);
}
