import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import BookCard from '../../components/cards/BookCard';
import { useFetchCartInfoQuery } from '../../redux/slices/services/apiSlice';
import { Grid } from "react-loader-spinner";

const UserCart = () => {

    const {data , isLoading } = useFetchCartInfoQuery();

    return (
        <>
            <Navbar isUser={true}/>
            <div className='container mx-auto p-4 mt-24'>
                {
                    isLoading ? (
                        <div className='my-20 flex justify-center'>
                            <Grid
                            visible={true}
                            height="100"
                            width="100"
                            color="blue"
                            />
                        </div>
                    ) : data?.cart?.items?.length === 0 ?(
                        <div className='text-center font-medium my-20'>
                            <p>Empty Cart!!</p>
                        </div>
                    ) : (
                        data?.cart?.items?.map((item) => (
                            <BookCard key={item?._id} isUser={true} data={item.bookId} cart={data?.cart}/>
                        ))
                    )
                }
            </div>
        </>
    )
}

export default UserCart