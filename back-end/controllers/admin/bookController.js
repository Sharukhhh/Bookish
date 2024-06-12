import Book from '../../models/books.js';

/*
path: '/api/user/add_book'
method: POST
*/
export const addBook = async (req, res, next) => {
    try {
        
        const {bookName , author, bookInfo, price } = req.body;

        const exisitngBook = await Book.findOne({bookName: bookName});
        if(exisitngBook) {
            return res.status(409).json({error:'Book already exists'});
        }

        await Book.create({
            bookName,
            bookInfo,
            author,
            price
        });

        return res.status(201).json({message: `Book: ${bookName} added successfully`});

    } catch (error) {
        console.log(error);
    }
}


/*
path: '/api/user/edit_book/:id'
method: PUT
*/
export const updateBookDetails = async (req, res, next) => {
    try {
        const {bookName , author , bookInfo , price} = req.body;

        const bookId = req.params.id;

        const bookDetails = await Book.findByIdAndUpdate(bookId , {
            bookName,
            bookInfo,
            author,
            price
        });

        if(!bookDetails) {
            return res.status(404).json({error: 'Data not Found'});
        }

        return res.status(200).json({message: `Updated ${bookName}`});

    } catch (error) {
        console.log(error);
    }
}



/*
path: '/api/user/delete_book/:id'
method: DELETE
*/
export const removeBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;

        const deletedBook = await Book.findByIdAndDelete(bookId);

        if(!deletedBook) {
            return res.status(404).json({error:'No data found'});
        }

        return res.status(200).json({message: `Removed ${deletedBook?.bookName}!`});

    } catch (error) {
        console.log(error);
    }
} 