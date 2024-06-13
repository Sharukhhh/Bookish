import React from 'react';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { ImCart } from "react-icons/im";

const BookCard = ({isUser}) => {
  return (
    <div className='flex justify-center mb-8'>
        <div className='w-full md:w-2/3 bg-neutral-100 rounded-lg shadow-md p-6 hover:scale-95'>
            <div className='flex flex-col md:flex-row'>

                {/* First section */}
                <div className='w-full md:w-1/4 p-2'>
                    <div className='bg-gray-200 h-48 md:h-full rounded-md'></div>
                </div>

                {/* Second Section */}
                <div className='w-full md:w-3/4 p-2 flex flex-col justify-between'>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Title</h2>
                        <h3 className="text-md text-gray-600 mb-2">Subtitle</h3>
                        <p className="text-gray-800 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                        </p>
                    </div>
                    <div className='flex justify-start space-x-2'>
                        {isUser ? (
                            <>
                                <button title='Add to cart' className='bg-blue-500 text-white px-4 py-2 rounded'>
                                    <ImCart size={20}/>
                                </button>
                            </>
                        ) : (
                            <>
                                <button title='Edit' className='bg-green-500 text-white px-4 py-2 rounded'>
                                    <FiEdit size={20}/>
                                </button>
                                <button title='Delete' className='bg-red-500 text-white px-4 py-2 rounded'>
                                    <MdDelete size={20}/>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookCard