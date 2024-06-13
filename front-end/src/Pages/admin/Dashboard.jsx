import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import BookCard from '../../components/cards/BookCard'

const Dashboard = () => {
    return (
        <>
            <Navbar isUser={false}/>
            <div className='container mx-auto p-4 mt-24'>
                <BookCard isUser={false} />
                <BookCard isUser={false}/>
                <BookCard isUser={false}/>
            </div>
        </>
    )
}

export default Dashboard