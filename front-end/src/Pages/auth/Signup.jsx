import React, { useState } from 'react'
import AuthNavText from '../../components/texts/AuthNavText'
import Inputfield from '../../components/fields/Inputfield'
import Button from '../../components/buttons/Button'
import { useAuthForm } from '../../custom hooks/authFormhook'
import { displaySuccessAlert, triggerErrorAlert } from '../../utils/alertUtils'
import { useRegisterUserMutation } from '../../redux/slices/services/apiSlice'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate();
    const [buttonState , setButtonState] = useState(false);
    const {userData , handleChangeData , confirmpassword, confirmpasswordChange} = useAuthForm();
    const [registerUser , {isLoading , isSuccess , isError, error}] = useRegisterUserMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            setButtonState((prev) =>  !prev);

            if(!userData.email || !userData.password || !userData.username || !confirmpassword) {
                triggerErrorAlert('Invalid Entry');
                return;
            }

            if(userData.password !== confirmpassword) {
                triggerErrorAlert('Password does not match!');
                return;
            }

            const result = await registerUser(userData).unwrap();
            displaySuccessAlert(result?.message);
            navigate('/login');
            
        } catch (error) {
            console.log(error)
            if(error?.data?.error) {
                triggerErrorAlert(error?.data?.error);
            } else if(error?.status === 500) {
                triggerErrorAlert('Unexpected Server Error');
            }
        } finally {
            setButtonState((prev) =>  !prev);
        }
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen  bg-gradient-to-t from-[#E9E4F0] to-[#D3CCE3]'>
                <h2 className='text-2xl font-semibold font-mono mb-4 text-center'>
                    WELCOME TO BOOKISH
                </h2>
                <div className='max-w-md w-full space-y-8 p-6 border border-gray-300 rounded-md shadow-lg bg-neutral-100'>
                    <form onSubmit={handleSubmit} className='space-y-8'>
                        <Inputfield
                        placeholder={'User Name'}
                        type={'text'}
                        name={'username'}
                        value={userData.username}
                        onChange={handleChangeData}
                        />
                        <Inputfield
                        placeholder={'Enter Email'}
                        type={'email'}
                        name={'email'}
                        value={userData.email}
                        onChange={handleChangeData}
                        />
                        <Inputfield
                        placeholder={'Enter Password'}
                        type={'password'}
                        name={'password'}
                        value={userData.password}
                        onChange={handleChangeData}
                        />
                        <Inputfield
                        placeholder={'Re-type Password'}
                        type={'password'}
                        name={'confirmpassword'}
                        value={confirmpassword}
                        onChange={confirmpasswordChange}
                        />
                        <Button disableValue={buttonState} buttonText={'SIGNUP'}/>
                    </form>
                    <AuthNavText isLogin={false}/>
                </div>
            </div>
        </>
    )
}

export default Signup