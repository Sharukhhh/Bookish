import { useState } from "react"

export const useBookForm = () => {

    const [bookData , setBookData] = useState({
        bookName: '',
        author: '',
        bookInfo: '',
        price: '',
        image: ''
    });

    const [imgPreview , setImgPreview] = useState('');

    const handleChangeData = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            const file = files[0];
            if (file) {
                setBookData(prev => ({
                    ...prev,
                    [name]: file
                }));
                setImgPreview(URL.createObjectURL(file));
            }
        } else {
            setBookData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const clearImg = () => {
        setBookData(prev => ({
            ...prev,
            image: ''
        }));
        setImgPreview('');
    };

    return {bookData , handleChangeData , setBookData, imgPreview , clearImg} 
}