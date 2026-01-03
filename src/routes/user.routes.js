import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
const router = Router();


router.route("/register").post(
    upload.fields([ // middleware to handle multiple file uploads just before the controller
        {
             name: 'avatar', 
             maxCount: 1
        },
        { 
            name: 'images', 
            maxCount: 5 
        }
    ]),  
    registerUser
    )

export default router;