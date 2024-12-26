import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi"; // Refresh icon
import { AiOutlinePlus } from "react-icons/ai"; // Plus icon
import { FaSearch } from "react-icons/fa";
import repositories from "../data";
import Sidebar from "../sidebar/Siddebar"; // Correct import path
import { FaDatabase } from "react-icons/fa";

const Repository = () => {
    const [count, setCount] = useState(repositories.length);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false); // Simulate refresh completion
        }, 1000);
    };

    return (
        <div className="flex flex-row bg-gray-100 min-h-screen">
            {/* Main Content */}
            <div className="flex-1 bg-white my-8 mx-8 rounded-lg shadow-sm">
                {/* Toolbar Section */}
                <div className="p-6 flex flex-col md:flex-row items-start md:justify-between mb-6 border-b border-gray-200">
                    <div className="flex flex-col mb-4 md:mb-0">
                        <h2 className="text-3xl text-gray-900 mb-1 font-medium">Repositories</h2>
                        <p className="text-normal text-gray-600 mb-4">
                            {count} total Repositories
                        </p>

                        <div className="flex items-center space-x-3 bg-white border border-gray-300 rounded-lg pl-4 pr-32 py-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                            <FaSearch className="text-gray-700 text-lg" />
                            <input
                                type="text"
                                placeholder="Search Repositories"
                                className="flex-1 text-gray-700 placeholder-gray-500 text-normal focus:outline-none"
                                aria-label="Search Repositories"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row text-lg items-center justify-end md:space-y-0 space-x-4">
                        {/* Refresh Button */}
                        <button
                            onClick={handleRefresh}
                            className="flex items-center justify-center border text-gray-700 px-5 py-2.5 rounded-lg hover:bg-gray-300 text-base h-12 min-h-[48px]"
                        >
                            <FiRefreshCw
                                className={`h-5 w-5 mr-2 transition-transform duration-500 ${isRefreshing ? "animate-spin" : ""}`}
                            />
                            <span>Refresh All</span>
                        </button>

                        {/* Add Repository Button */}
                        <button className="flex items-center justify-center bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 text-base h-12 min-h-[48px]">
                            <AiOutlinePlus className="h-5 w-5 mr-2" />
                            <span>Add Repository</span>
                        </button>
                    </div>
                </div>

                {/* Repositories List */}
                <div className="p-6">
                    {repositories.map((repo, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white border rounded-md shadow-sm flex justify-between items-center h-[108px]"
                        >
                            {/* Repository Info */}
                            <div>
                                <h3 className="text-xl font-semibold flex items-center space-x-4">
                                    <span>{repo.name}</span>
                                    <span
                                        className={`px-3 text-base font-normal rounded-full bg-blue-100 text-blue-600`}
                                    >
                                        {repo.type}
                                    </span>
                                </h3>
                                <div className="flex mt-2 items-center space-x-8 text-gray-900">
                                    <span className="flex items-center space-x-1">
                                        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                                        <span>{repo.language}</span>
                                    </span>
                                    <span className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">
                                        <FaDatabase className="text-gray-600" /> {/* Icon */}
                                        <span>{repo.size}</span> {/* Repository size */}
                                    </span>
                                    <span>Updated {repo.updated}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Repository;
