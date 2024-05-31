import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import loginImage from '../images/login.jpg';

const LoginPage = () => {
    const navigation = useNavigate();

    const [rollNo, setRollNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!rollNo || !email || !password) {
            toast('Please enter roll number, email, and password.');
            return;
        }

        if (password.length < 6) {
            toast('Password must be at least 6 characters long.');
            return;
        }
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        
        if (!hasUpperCase) {
            toast.error('Password must contain at least one uppercase letter.');
            return;
        }
        
        if (!hasLowerCase) {
            toast.error('Password must contain at least one lowercase letter.');
            return;
        }

        try {
            const response = await axios.post('https://examhall-apis.onrender.com/api/login', { rollno: rollNo, email: email, password: password });
            // Check if the login was successful
            if (response.status === 200) {
                localStorage.setItem('rollNo', response.data.user.rollno);
                localStorage.setItem('emailu', response.data.user.email);
                localStorage.setItem('nameu', response.data.user.name)
                localStorage.setItem('deptu', response.data.user.department)
                localStorage.setItem('mobu', response.data.user.mobno)
                // Redirect to homeuser page after successful login
                navigation('/homeuser')
            } else {
                toast('Invalid Credentials');
            }
        }
        catch (err) {
            console.error(err);
            toast('An error occurred. Please try again.');
        }
    };


    return (

        <>
            <div className="containers">
                <div className="login-containers">
                    <div className="image-containers">
                        <img src={loginImage} alt="Login" />
                        <p>Login as  <Link to='/admin' style={{ color: 'blue', textDecoration: 'underline' }}>Faculty click here!</Link></p>
                        <p>Don't have an account? <Link to='/signup' style={{ color: 'blue', textDecoration: 'underline' }}>Sign up here</Link></p>

                    </div>
                    <div className="form-containers">
                        <h2>STUDENT LOGIN</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-groups">
                                <label htmlFor="rollno">Roll Number : </label>
                                <input
                                    type="text"
                                    id="rollno"
                                    placeholder='21ADR001'
                                    value={rollNo}
                                    onChange={(e) => setRollNo(e.target.value)}
                                />
                            </div>
                            <div className="form-groups">
                                <label htmlFor="email">Email : </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='anu@gmail.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-groups">
                                <label htmlFor="password">Password : </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder='23/06/2003'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="but" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
};

export default LoginPage;
