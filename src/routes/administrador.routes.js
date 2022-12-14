import { Router } from 'express'
import { getAdministrador } from '../controllers/administrador.controllers.js'

const router = Router()

router.get('/administrador', getAdministrador)

router.get('/ping', (req, res)=>{})


export default router