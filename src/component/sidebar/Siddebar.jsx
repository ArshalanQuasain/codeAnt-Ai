import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import {
    FaHome,
    FaCode,
    FaCloud,
    FaRegFileAlt,
    FaCog,
    FaPhone,
    FaSignOutAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Sidebar = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        // Redirect to login page after logging out by using the navigate hook when we don't have a logout API
        setIsLoggedIn(false);
        navigate("/login");
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Menu Button for mobile (top-right corner) */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button onClick={toggleSidebar} className="text-3xl text-gray-600">
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Sidebar for smaller screens (right side) */}
            <div
                className={`md:hidden fixed top-0 right-0 bottom-0 w-full h-2/3 rounded-md bg-white shadow-md transition-all duration-300 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Sidebar Content */}
                <div className="flex flex-col w-full h-auto">
                    {/* Header Section (Logo & Title) */}
                    <div className="flex items-center justify-center px-6 py-4">
                        <img src={Logo} alt="Logo" className="w-10 h-10" />
                        <h1 className="text-xl font-bold text-gray-800">CodeAnt AI</h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col flex-grow px-4 py-2">
                        <NavLink
                            to="/repositories"
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 text-lg rounded-lg font-bold ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                        >
                            <FaHome className="h-5 w-5 mr-3" />
                            <span>Repositories</span>
                        </NavLink>
                        <NavLink
                            to="/ai-code-review"
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 text-lg rounded-lg font-bold ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                        >
                            <FaCode className="h-5 w-5 mr-3" />
                            <span>AI Code Review</span>
                        </NavLink>
                        <NavLink
                            to="/cloud-security"
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 text-lg rounded-lg font-bold ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                        >
                            <FaCloud className="h-5 w-5 mr-3" />
                            <span>Cloud Security</span>
                        </NavLink>
                        <NavLink
                            to="/how-to-use"
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 text-lg rounded-lg font-bold ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                        >
                            <FaRegFileAlt className="h-5 w-5 mr-3" />
                            <span>How to Use</span>
                        </NavLink>
                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                `flex items-center px-4 text-lg py-2 rounded-lg font-bold ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                        >
                            <FaCog className="h-5 w-5 mr-3" />
                            <span>Settings</span>
                        </NavLink>
                    </div>

                    {/* Support and Logout buttons styled like the rest of the navigation links */}
                    <div className="px-4">
                        <button
                            className="flex items-center px-4 py-2 text-lg rounded-lg font-bold text-gray-600 hover:bg-gray-100 w-full"
                        >
                            <FaPhone className="h-5 w-5 mr-3" />
                            <span>Support</span>
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center px-4 py-2 text-lg rounded-lg font-bold text-gray-600 hover:bg-gray-100 w-full mt-2"
                        >
                            <FaSignOutAlt className="h-5 w-5 mr-3" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar for larger screens */}
            <div className="hidden md:flex w-[256px] bg-white fixed top-0 bottom-0 flex-col px-6 py-8 overflow-y-auto border-r">
                {/* Header Section (Logo & Title) */}
                <div className="flex items-center mb-4">
                    <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
                    <h1 className="text-2xl font-normal text-gray-900">CodeAnt AI</h1>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col flex-grow">
                    <NavLink
                        to="/repositories"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 text-lg rounded-lg font-bold ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaHome className="h-5 w-5 mr-3" />
                        <span>Repositories</span>
                    </NavLink>
                    <NavLink
                        to="/ai-code-review"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 text-lg rounded-lg font-bold ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaCode className="h-5 w-5 mr-3" />
                        <span>AI Code Review</span>
                    </NavLink>
                    <NavLink
                        to="/cloud-security"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 text-lg rounded-lg font-bold ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaCloud className="h-5 w-5 mr-3" />
                        <span>Cloud Security</span>
                    </NavLink>
                    <NavLink
                        to="/how-to-use"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 text-lg rounded-lg font-bold ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaRegFileAlt className="h-5 w-5 mr-3" />
                        <span>How to Use</span>
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `flex items-center px-4 text-lg py-2 rounded-lg font-bold ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaCog className="h-5 w-5 mr-3" />
                        <span>Settings</span>
                    </NavLink>
                </div>

                {/* Footer Section (Logout & Support) */}
                <div className="mt-8">
                    <button
                        className="w-full flex items-center px-4 py-2 text-lg rounded-lg text-gray-600 font-bold hover:bg-gray-100"
                    >
                        <FaPhone className="h-5 w-5 mr-3" />
                        <span>Support</span>
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-2 rounded-lg text-lg text-gray-600 font-bold hover:bg-gray-100 mt-2"
                    >
                        <FaSignOutAlt className="h-5 w-5 mr-3" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
