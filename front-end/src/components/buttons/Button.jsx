import React from 'react'

const Button = ({buttonText , disableValue}) => {
    return (
        <button disabled={disableValue} type='submit' 
        className={`font-bold py-2 text-center px-4 rounded-md mb-4 w-full hover:scale-95 ${disableValue ? 'bg-gray-500 text-gray-200' : 'bg-blue-500 text-white hover:bg-blue-700'}`}>
            {disableValue ? '' : buttonText}
        </button>
    )
}

export default Button