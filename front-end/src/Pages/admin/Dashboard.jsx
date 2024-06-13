import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import BookCard from '../../components/cards/BookCard'
import { Grid } from "react-loader-spinner";
import { useGetBooksQuery } from '../../redux/slices/services/adminApiSlice'

const Dashboard = () => {
    
    const {data , isError ,  isLoading} = useGetBooksQuery()

    return (
        <>
            <Navbar isUser={false}/>
            <div className='container mx-auto p-4 mt-24'>
                {
                    isLoading ? (
                        <div className='flex justify-center my-20'>
                            <Grid
                            visible={true}
                            height="100"
                            width="100"
                            color="blue"
                            />
                        </div>
                    ) :isError ? (
                        <div className='text-center font-medium my-20'>
                            <p>Failed to load data, please try later</p>
                        </div>
                    ) : (
                        data?.books?.map((book) => (
                            <BookCard key={book?._id} isUser={false} data={book}  />
                        ))
                    )
                }
            </div>
        </>
    )
}

export default Dashboard