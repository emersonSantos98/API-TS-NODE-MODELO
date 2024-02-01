import {Router} from 'express';
const router = Router();
import { UsuariosController} from '../controllers'


router.post('',  UsuariosController.createBodyValidation, UsuariosController.create)


export default router;
