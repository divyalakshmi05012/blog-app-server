import {Router} from 'express'
import blogRoutes from './blog.js'
import usersRoutes from './users.js'
const router=Router()

router.get('/',(req,res)=>res.status(200).send(`<h1>BlogApp backend</h1><p>application is running successfully</p>`))
router.use('/blog',blogRoutes)
router.use('/user',usersRoutes)

export default router