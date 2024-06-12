import React from 'react'

const Inputfield = ({type , placeholder , name ,  value , onChange}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            required
            className='px-4 py-2 border border-gray-300 rounded-md w-full'
        />
    )
}

export default Inputfield