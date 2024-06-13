import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import BookCard from '../../components/cards/BookCard'
import Searchfield from '../../components/fields/Searchfield'

const UserHome = () => {
  return (
    <>
        <Navbar isUser={true}/>
        <div className='container mx-auto p-4 mt-24'>
          <Searchfield/>

          <BookCard isUser={true} />
          <BookCard isUser={true}/>
        </div>
    </>
  )
}

export default UserHome