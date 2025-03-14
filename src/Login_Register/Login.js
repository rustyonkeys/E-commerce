import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Validation from './LoginValidation';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false); // state to toggle password visibility

    const navigate = useNavigate(); // Hook to navigate to different pages after login

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        // If no errors, navigate to the homepage (or any other page)
        if (!errors.email && !errors.password) {
            navigate('/'); // Redirect to homepage after successful login
        }
    };

    return (
        <div className="flex justify-center items-center bg-blue-500 min-h-screen">
            <div className="bg-white p-6 rounded-lg w-full sm:w-96">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
                        <label htmlFor="email" className="block text-lg font-medium">
                            <strong>Email</strong>
                        </label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Enter Your Email"
                            onChange={handleInput}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password" className="block text-lg font-medium">
                            <strong>Password</strong>
                        </label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"} // Toggle password visibility
                                placeholder="Enter your Password"
                                onChange={handleInput}
                                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {/* Toggle button to show/hide password */}
                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600  ">
                            <strong>Login</strong>
                        </button>
                    </div>

                    <div className="mt-4 text-center">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/Register" className="text-green-500 hover:text-green-700 font-semibold">
                                <strong>Create an Account</strong>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
