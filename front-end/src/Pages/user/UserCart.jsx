import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useSelector } from 'react-redux'
import BookCard from '../../components/cards/BookCard';

const UserCart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    // const totalPrice = cartItems.reduce((total , item) => total += parseInt(item?.price), 0);

    return (
        <>
            <Navbar isUser={true}/>
            <div className='container mx-auto p-4 mt-24'>
                {
                    cartItems?.length === 0 ? (
                        <div className='text-center font-medium my-20'>
                            <p>Empty Cart!!</p>
                        </div>
                    ) : (
                        cartItems?.slice()?.reverse()?.map((item) => (
                            <BookCard key={item?._id} isUser={true} data={item} />
                        ))
                    )
                }
            </div>
        </>
    )
}

export default UserCart