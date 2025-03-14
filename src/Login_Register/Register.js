import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterValidation from './RegisterValidation';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false); // state to toggle password visibility
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(RegisterValidation(values));
        if (!errors.name && !errors.email && !errors.password) {
            // Simulate a successful registration, you can add your API call here
            navigate('/login');
        }
    };

    return (
        <div className="flex justify-center items-center bg-blue-500 min-h-screen">
            <div className="bg-white p-6 rounded-lg w-full sm:w-96">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1 className="text-3xl font-semibold text-center mb-6">Register</h1>
                        <label htmlFor="name" className="block text-lg font-medium">
                            <strong>Username</strong>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Your Username"
                            onChange={handleInput}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                    </div>

                    <div className="mt-4">
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
                        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
                            <strong>Register</strong>
                        </button>
                    </div>

                    <div className="mt-4 text-center">
                        <p>
                            Already have an account?{' '}
                            <Link to="/" className="text-green-500 hover:text-green-700 font-semibold">
                                <strong>Login</strong>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
