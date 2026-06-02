import { Router } from "express";
import { controllerActualizarUsuario, controllerCrearUsuario, controllerEliminarUsuario, controllerLeerUsuario } from "../controllers/usuario.controller";

const router = Router();

router.post("/", controllerCrearUsuario);
router.get("/", controllerLeerUsuario);
router.put("/:id", controllerActualizarUsuario);
router.delete("/:id", controllerEliminarUsuario);

export default router;