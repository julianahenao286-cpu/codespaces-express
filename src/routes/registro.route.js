import { controllerActualizarRegistro, controllerCrearRegistro, controllerEliminarRegistro, controllerLeerRegistro } from "../controllers/registro.controller";


const router = Router();

router.post("/", controllerCrearRegistro);
router.get("/", controllerLeerRegistro);
router.put("/:id", controllerActualizarRegistro);
router.delete("/:id", controllerEliminarRegistro);

export default router;