import { Router } from "express";
import { controllerActualizarRol, controllerCrearRol, controllerEliminarRol, controllerLeerRol } from "../controllers/rol.controller";


const router = Router();

router.post("/", controllerCrearRol);
router.get("/", controllerLeerRol);
router.put("/:id", controllerActualizarRol);
router.delete("/:id", controllerEliminarRol);

export default router;