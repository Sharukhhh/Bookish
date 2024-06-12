import { Router } from "express";
import { userLogin, userSignup } from "../../controllers/user/userAuth.js";
const route = Router();

//USER-AUTH ROUTES
route.post('/signup' , userSignup);

route.post('/login', userLogin);






export default route;