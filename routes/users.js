import {Router} from 'express'
import { UsersController } from '../controllers/index.js'
import verify from '../middleware/verify.js'
import verifyAdmin from '../middleware/verifyAdmin.js'
const router=Router()

router.get('/getAllUsers',verify,verifyAdmin,UsersController.getAllUsers)
 router.post ('/login',UsersController.login)
 router.post('/signup',UsersController.signup)


 export default router