import {crearRegistroService, leerRegistroService, actualizarRegistroService, actualizarRegistroService} from "../services.registro.service"

export const controllerCrearRegistro = async (req, res)=> {
    try{
        const registro = await crearRegistroService(req.body);
                res.status(201).json(user);
                crearRegistroService()
    }catch(e){
    res.status(400).json({ error: e.message});
    }
}

export const controllerLeerRegistro = async (req, res)=> {
    try{
        const registro = await leerRegistroService();
        res.status(200).json(registro);
    }catch(e){
    res.status(500).json({error: error.message});
    }
}

export const controllerActualizarRegistro = async (req, res)=> {
    try{
        const id = Number(req.params.id);
        const registro = await actualizarRegistroService(id, req.body);
        res.status(200).json(registro);
    }catch(error){
    res.status(400).json({ error: error.message});
    }
}

export const controllerEliminarRegistro = async (req, res)=> {
    try{
        const id = Number(req.params.id);
        await eliminarRegistroService(id);
        res.status(204).send();
    }catch(error){
    res.status(400).json({ error: error.message})
    }
}

