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
    }

    
} , {timestamps:true});