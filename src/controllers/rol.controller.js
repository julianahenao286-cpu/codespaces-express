import {crearRolService, leerRolService, actualizarRolService, eliminarRolService} from "../services/rol.service"

export const controllerCrearRol = async(req, res)=> {
    try{
        const rol = await crearRolService(req.body);
        res.status(201).json(rol);
        crearRolService()
    }catch(e){
    res.status(400).json({ error: e.message});
    }
}

export const controllerLeerRol = async (req, res)=> {
    try{
        const rol = await leerRolService();
        res.status(200).json(rol);
    }catch(error){
    res.status(500).json({ error: error.message});
    }
}

export const controllerActualizarRol = async (req, res)=> {
    try{
        const id = Number(req.params.id);
        const rol = await actualizarRolService(id, req.body);
        res.status(200).json(rol);
    }catch(error){
    res.status(400).json({ error: error.message});
    }
}

export const controllerEliminarRol = async (req, res)=> {
    try{
        const id = Number(req.params.id);
        await eliminarRolService(id);
        res.status(204).send();
    }catch(error){
    res.status(400).json({ error: error.message})
    }
}