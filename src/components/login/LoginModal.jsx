import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginModal({ setLoginModalOpen }) {
  const modalRef = useRef();

  // State to manage form input values
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    // Lock body scroll when the modal is open
    document.body.classList.add('h-[100vh]', 'overflow-y-hidden');

    return () => {
      // Restore body scroll when the modal is closed
      document.body.classList.remove('h-[100vh]', 'overflow-y-hidden');
    };
  }, []);

  // Close the modal when clicking outside of it
  function closeLoginModal(e) {
    if (e.target === modalRef.current) {
      setLoginModalOpen(false);
    }
  }

  // Handle input change and update form state
  function handleChangeInput(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      toast.error('All fields are required!');
      return;
    }


    toast.success("Log in Successfull.")
    setFormData({
      email: '',
      password: ''
    })
    setTimeout(() => {
      setLoginModalOpen(false);
    }, 2000);
  }

  return (
    <div
      ref={modalRef}
      onClick={closeLoginModal}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <section className="bg-gray-50 dark:bg-gray-900 w-[20rem] rounded-xl overflow-hidden">
        <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <ToastContainer />
            <h1 className="text-xl text-center w-full leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white font-extrabold ">
              Log in
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.password}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Button style={"w-full "} text={"Log in"} />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginModal;
