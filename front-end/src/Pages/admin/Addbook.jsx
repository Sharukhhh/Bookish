import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Inputfield from '../../components/fields/Inputfield'
import Button from '../../components/buttons/Button'

const Addbook = () => {
    return (
        <>
            <Navbar isUser={false}/>
            <div className='container mx-auto p-4 mt-24 flex justify-center'>

                <div className='w-full md:w-1/2 bg-neutral-100 border border-gray-300 rounded-lg shadow-lg p-6'>
                    <h2 className='text-2xl font-bold mb-8'>ADD YOUR BOOK</h2>
                    <form className='space-y-5'>
                        <Inputfield
                        labelFor={'bookName'} labelName={'Name of the book'}
                        placeholder={'Alchemist'}
                        />
                        <Inputfield 
                        labelFor={'author'} labelName={'Author of the book'}
                        placeholder={'Paulo Choelo'}
                        />
                        <Inputfield
                        labelFor={'price'} labelName={'Price of the book'}
                        placeholder={'320'}
                        />
                        <div className='flex flex-col md:flex-row items-center'>
                            <div className='flex-1'>
                                <Inputfield
                                labelFor={'image'} labelName={'Enter image'}
                                placeholder={'image'}
                                />
                            </div>
                            <div className='mt-4 md:mt-0 md:ml-4'>
                                <img src="" alt="" className='w-32 h-32 object-cover rounded-md shadow-md'/>
                            </div>
                        </div>
                        <Button buttonText={'ADD'}/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addbook