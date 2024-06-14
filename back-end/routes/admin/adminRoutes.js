import { Router } from "express";
import { adminLogin } from "../../controllers/admin/adminAuth.js";
import { addBook, getBooks, getSingleBook, removeBook, updateBookDetails } from "../../controllers/admin/bookController.js";
import { verifyOrigin } from "../../middlewares/auth.js";
const route = Router();

//ADMIN_AUTH
route.post('/login', adminLogin);


//BOOK-MANAGEMENT
route.post('/add_book' ,   addBook);

route.get('/books' , getBooks);

route.delete('/delete_book/:id' ,  removeBook);

route.put('/edit_book/:id' ,  updateBookDetails);

route.get('/book/:id' ,  getSingleBook);

export default route;