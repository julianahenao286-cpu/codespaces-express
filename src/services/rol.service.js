import {crearRol} from '../repository/rol.repository.js';
import {leerRol} from '../repository/rol.repository.js';
import {actualizarRol} from '../repository/rol.repository.js';
import {eliminarRol} from '../repository/rol.repository.js';

export const crearRolService =  (rolData) => {
    return crearRol(rolData);
}

export const leerRolService = () => {
    return leerRol(id);
}

export const actualizarRolService = (rolId, rolData) => {
    return actualizarRol(rolId, rolData);
}

export const eliminarRolService = (rolId) => {
    return eliminarRol(rolId);
}
