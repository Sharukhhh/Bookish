import React from 'react'
import Inputfield from '../../components/fields/Inputfield'
import AuthNavText from '../../components/texts/AuthNavText'
import Button from '../../components/buttons/Button'
import { useAuthForm } from '../../custom hooks/authFormhook'

const Login = ({isUser}) => {

    const {userData , handleChangeData} = useAuthForm();
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-t from-[#E9E4F0] to-[#D3CCE3]'>
            <h2 className='text-2xl font-semibold font-mono mb-4 text-center'>
                {isUser ? 'LOGIN TO YOUR ACCOUNT' : 'ADMIN MANAGEMENT'}
            </h2>
            <div className='max-w-md w-full space-y-8 p-6 border border-gray-300 rounded-md shadow-lg bg-neutral-100'>
                <form className='space-y-8'>
                    <Inputfield 
                    type={'email'}
                    name={'email'}
                    placeholder={'Enter Email'}
                    value={userData.email}
                    onChange={handleChangeData}
                    />
                    <Inputfield
                    type={'password'}
                    name={'password'}
                    placeholder={'Enter Your Password'}
                    value={userData.password}
                    onChange={handleChangeData}
                    />
                    <Button buttonText={'LOGIN'}/>
                </form>
                {isUser && (
                    <AuthNavText isLogin={true} />
                )}
            </div>
        </div>
    )
}

export default Login