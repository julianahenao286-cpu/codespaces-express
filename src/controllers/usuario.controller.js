import {crearUsuarioService, leerUsuarioService, actualizarUsuarioService, eliminarUsuarioService} from "../services/usuario.service"

export const controllerCrearUsuario = async (req, res)=> {
    try{
        const usuario = await crearUsuarioService(req.body);
        res.status(201).json(user);
        crearUsuarioService()
    }catch(e){
    res.status(400).json({ error: e.message});
    }
}

export const controllerLeerUsuario = async (req, res)=> {
    try{
        const usuario = await leerUsuarioService();
        res.status(200).json(usuario);
    }catch(error){
    res.status(500).json({error: error.message});
    }
}

export const controllerActualizarUsuario = async (req,res)=> {
    try{
        const id = Number(req.params.id);
        const usuario = await actualizarUsuarioService(id, req.body);
        res.status(200).json(usuario);
    }catch(error) {
    res.status(400).json({ error: error.message});
    }
}

export const controllerEliminarUsuario = async (req, res)=> {
    try{
        const id = Number(req.params.id);
        await eliminarUsuarioService(id);
        res.status(204).send();
    }catch(error) {
    res.status(400).json({ error: error.message})
    }
}