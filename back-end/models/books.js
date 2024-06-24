import mongoose from "mongoose";


const bookSchema = mongoose.Schema({

    bookName: {
        type: String,
        reuqired: true
    },

    author: {
        type: String,
        required: true
    },

    bookInfo: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    image: {
        type: String,
        // default: 'https://img.freepik.com/premium-photo/high-angle-view-red-book-against-white-background_1048944-30851930.jpg'
    }

    
} , {timestamps:true});


const bookModel = mongoose.model('books' , bookSchema);

export default bookModel;