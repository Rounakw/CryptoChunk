import React, { useRef, useEffect, useState } from 'react';
import Button from '../button/Button';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios';
import Loading from '../loading/Loading';

function RegisterModal({ setRegisterModalOpen }) {
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        otp: '',
        password: ''
    });
    const [passworddViewd, setPasswordViewed] = useState(false);
    const [verify, setVerify] = useState({
        emailClick: false,
        isEmailVeried: false,
        otpClick: false,
        isOtpVeried: false,
    });

    function handleChangeInput(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const modalRef = useRef();

    useEffect(() => {
        document.body.classList.add('h-[100vh]');
        document.body.classList.add('overflow-y-hidden');

        return () => {
            document.body.classList.remove('h-[100vh]');
            document.body.classList.remove('overflow-y-hidden');
        };
    }, []);

    function closeLoginModal(e) {
        if (e.target === modalRef.current) {
            setRegisterModalOpen(false);
        }
    }

    async function handleSubmit(e) {
        if (!formData.userName || !formData.email || !formData.password) {
            toast.error("All Fields Are Required !")
            return false
        }
        if (!verify.isEmailVeried || !verify.isOtpVeried) {
            toast.error("You Need To Verify Email & OTP !")
            return false
        }
        setLoading(true)

        try {
            let response = await axios.post('https://cryptochunkbackend-1.onrender.com/api/user/register', { email: formData.email, userName: formData.userName, password: formData.password })
            if (response.data.success) {
                toast.success(response.data.message)
                setFormData({
                    userName: '',
                    email: '',
                    otp: '',
                    password: ''
                })
                setTimeout(() => {
                    setRegisterModalOpen(false);
                }, 2000);
            }
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }



        console.log('Form Data:', formData);
    }

    async function handleSendOtpViaEmail() {
        if (!formData.email) return false
        setLoading(true)

        try {
            let response = await axios.post('https://cryptochunkbackend-1.onrender.com/api/otp/create', { email: formData.email })
            if (response.data.success) {
                toast.success(response.data.message)
                setVerify((prevData) => ({
                    ...prevData,
                    emailClick: true
                }))
            }
        } catch (error) {


            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }

    }

    async function handleCheckOtp() {
        if (!formData.otp || formData.otp.length !== 5) return false
        setLoading(true)
        try {
            let response = await axios.post('https://cryptochunkbackend-1.onrender.com/api/otp/check', { email: formData.email, otp: formData.otp })
            if (response.data.success) {
                setVerify((prevData) => ({
                    ...prevData,
                    emailClick: false,
                    isEmailVeried: true,
                    isOtpVeried: true,
                }))
            }
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            ref={modalRef}
            onClick={closeLoginModal}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
        >
            <ToastContainer />
            <section className="bg-gray-50 dark:bg-gray-900 w-[20rem] rounded-xl overflow-hidden">
                <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center w-full leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white font-extrabold">
                            Registration
                        </h1>
                        <div className="space-y-4 md:space-y-6" >

                            <div>
                                <label
                                    htmlFor="userName"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    User Name
                                </label>


                                <input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="john@123"
                                    value={formData.userName}
                                    onChange={handleChangeInput}
                                />
                            </div>

                            {
                                verify.emailClick ? <div>
                                    <label
                                        htmlFor="otp"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        OTP
                                    </label>
                                    <div className='flex justify-center gap-3'>

                                        <input
                                            type="text"
                                            name="otp"
                                            id="otp"
                                            className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="52H4B"
                                            value={formData.otp?.toUpperCase()}
                                            onChange={handleChangeInput}
                                            maxLength="5"
                                        />
                                        <Button style={"w-11 rotate-[180deg] "} text={<DoubleArrowIcon />} disabled={false}
                                            onClick={() => {
                                                setVerify((prevData) => ({
                                                    ...prevData,
                                                    emailClick: false
                                                }))
                                            }} />
                                        <Button style={"w-11"} text={<DoubleArrowIcon />} disabled={false}
                                            onClick={handleCheckOtp} />
                                    </div>
                                </div> : <div>
                                    <label htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email </label>
                                    <div className='flex justify-center gap-3 relative'>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            disabled={verify.isEmailVeried}
                                            className={`bg-gray-50 border ${verify.isEmailVeried ? "cursor-not-allowed text-gray-400" : ''}  border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                            placeholder="example@gmail.com"
                                            value={formData.email?.toLowerCase()}
                                            onChange={handleChangeInput}
                                        />
                                        {verify.isEmailVeried ?
                                            <div className='absolute  top-2 right-2'>
                                                <VerifiedUserIcon sx={{ color: "green" }} />
                                            </div>
                                            :
                                            <Button style={"w-11"} text={<DoubleArrowIcon />} disabled={false}
                                                onClick={handleSendOtpViaEmail} />

                                        }

                                    </div>
                                </div>
                            }

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <div className='relative'>
                                    <input
                                        type={passworddViewd ? 'text' : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={formData.password}
                                        onChange={handleChangeInput}
                                    />
                                    <div className='absolute  top-2 right-2 cursor-pointer'>
                                        {passworddViewd ?
                                            <VisibilityOffIcon sx={{ color: "darkblue" }} onClick={() => { setPasswordViewed(!passworddViewd) }} className='cursor-pointer' />

                                            :
                                            <RemoveRedEyeIcon sx={{ color: "darkblue" }} onClick={() => { setPasswordViewed(!passworddViewd) }} />
                                        }
                                    </div>

                                </div>
                            </div>


                            <Button style={"w-full "} text={"Register"} disabled={false} onClick={handleSubmit} />
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{' '}
                                <a
                                    href="#"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Log in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {loading && <Loading />}
        </div>
    );
}

export default RegisterModal;
