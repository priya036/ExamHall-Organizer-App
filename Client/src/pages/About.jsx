import React from 'react'
import Bannerimg from '../images/banner.png'
import '../pages/home.css'
import icon from '../images/icon.png'
import { Link } from 'react-router-dom'
const contactPageAvailable = true;

function About() {
    const Rollno = localStorage.getItem('rollNo');
    const Name = localStorage.getItem('nameu');
    const Dept = localStorage.getItem('deptu')
    return (
        <>
            <div className='imagebanner'>
                <img src={Bannerimg} alt="load" />
            </div>




            <nav class="border-gray-200 bg-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center" >
                        <img src={icon} className="h-14 mr-6" alt="Hall Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">EXAM HALL</span>
                    </div>

                    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">

                            <li>
                                <Link to="/homeuser" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/hallstud" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Hall Allocation</Link>
                            </li>
                            <li>
                                <Link to="/profilestud" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</Link>
                            </li>
                            <li>
                                {contactPageAvailable ? (
                                    <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                                ) : (
                                    <span className="block py-2 pl-3 pr-4 text-gray-900">Contact</span>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                            <b>{Name}&nbsp;&nbsp;&nbsp;&nbsp;({Rollno})&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;{Dept}</b>
                        </Link>
                    </div>
                </div>
            </nav>
            <br />
            <br />
            <br />
            <div className='con'>

                <div className="container">
                    <h3>WELCOME TO THE OFFICE OF THE CONTROLLER OF EXAMINATION</h3>
                    <br /><br />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Controller of Examinations office is an important part of the autonomy. The COE Office is responsible for the announcement of academic schedule, preparation of question papers, conduct of examinations, evaluation of answer scripts, declaration of results and issuing of grade sheets. Every academic year, students take up end semester examinations in November and April. The Controller of Examination also ensures a smooth functioning of the continuous assessment tests.</p>

                </div>
            </div>
        </>
    )

}

export default About