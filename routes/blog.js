import {Router} from 'express'
import { BlogController } from '../controllers/index.js'
import verify from '../middleware/verify.js'
import verifyAdmin from '../middleware/verifyAdmin.js'
const router=Router()

router.get('/getAllBlogs',verify,verifyAdmin,BlogController.getAllBlogs)
router.get('/getAllApprovedBlogs',verify,BlogController.getAllApprovedBlogs)
router.get('/getAllBlogsByUserId',verify,BlogController.getAllBlogsByUserId)
router.post('/createBlog',verify, BlogController.createBlog)
router.put('/changeStatus/:blogId',verify,verifyAdmin,BlogController.changeStatus)

 export default router