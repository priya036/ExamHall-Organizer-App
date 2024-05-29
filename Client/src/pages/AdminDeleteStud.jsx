import React, { useState } from 'react';
import axios from 'axios';
import './AdminInsertStudents.css';

function AdminDeleteStudent() {
    const [rollNo, setRollNo] = useState('');
    const [message, setMessage] = useState('');

    const handleRollNoChange = (e) => {
        setRollNo(e.target.value);
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://examhall-apis.onrender.com/api/user/${rollNo}`);
            setMessage(response.data);
            setRollNo(''); // Clear the input field after successful deletion
        } catch (error) {
            console.error(error);
            setMessage('Error deleting student. Please try again.');
        }
    };

    return (
        <div className="del-container">
            <h2>Delete Student</h2>
            <div className="form">
                <input
                    type="text"
                    name="rollNo"
                    placeholder="Enter Roll No"
                    value={rollNo}
                    onChange={handleRollNoChange}
                    className="input"
                />
                <button onClick={handleDelete} className="button">Delete</button>
            </div>
            {message && <div className="message">{message}</div>}
        </div>
    );
}

export default AdminDeleteStudent;
