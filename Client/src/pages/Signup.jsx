import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css'; // Import the CSS file for styling

const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        rollno: '',
        email: '',
        password: '',
        department: '',
        mobno: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://examhall-apis.onrender.com/api/signup', formData);
            if (res.status === 201) {
                toast.success(res.data.message);
                navigate('/');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            toast.error(error.response?.data?.message || 'An error occurred while signing up. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rollno">Roll Number</label>
                        <input
                            type="text"
                            name="rollno"
                            id="rollno"
                            placeholder="Enter your roll number"
                            value={formData.rollno}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input
                            type="text"
                            name="department"
                            id="department"
                            placeholder="Enter your department"
                            value={formData.department}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobno">Mobile Number</label>
                        <input
                            type="text"
                            name="mobno"
                            id="mobno"
                            placeholder="Enter your mobile number"
                            value={formData.mobno}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignupPage;
