import { Router } from "express";
import { getBooks, userLogin, userSignup } from "../../controllers/user/userAuth.js";
import { verifyOrigin } from "../../middlewares/auth.js";
const route = Router();

//USER-AUTH ROUTES
route.post('/signup' , userSignup);

route.post('/login', userLogin);


// USER-OTHERS
route.get('/books' , verifyOrigin, getBooks)


export default route;