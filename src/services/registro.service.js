import {crearRegistro} from '../repository/registro.repository.js';
import {leerRegistro} from '../repository/registro.repository.js';
import {actualizarRegistro} from '../repository/registro.repository.js';
import {eliminarRegistro} from '../repository/registro.repository.js';

export const crearRegistroService =  (registroData) => {
    return crearRegistro(registroData);
}

export const leerRegistroService = () => {
    return leerRegistro(id);
}

export const actualizarRegistroService = (registroId, registroData) => {
    return actualizarRegistro(registroId, registroData);
}

export const eliminarRegistroService = (registroId) => {
    return eliminarRegistro(registroId);
}
