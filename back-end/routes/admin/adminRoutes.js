import { Router } from "express";
import { adminLogin } from "../../controllers/admin/adminAuth.js";
const route = Router();

//ADMIN_AUTH
route.post('/login', adminLogin);


export default route;