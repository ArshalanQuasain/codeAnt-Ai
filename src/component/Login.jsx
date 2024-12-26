import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import AzureLogo from "../Images/th.jpeg";
import LogoImage from "../Images/Logo.png";
import side from "../Images/sidebar.png";

// Import Font Awesome for the pie chart icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

const SignInPage = ({ setIsLoggedIn }) => {
  const [activeTab, setActiveTab] = useState("SAAS");
  const navigate = useNavigate(); // Initialize navigate hook
  console.log(setIsLoggedIn);

  const tabs = [
    { name: "SAAS", key: "SAAS" },
    { name: "Self Hosted", key: "Self Hosted" },
  ];

  const SaaSButtons = [
    { icon: <FaGithub className="text-black w-5 h-5 mr-3" />, label: "Sign in with GitHub" },
    { icon: <FaBitbucket className="text-blue-600 w-5 h-5 mr-3" />, label: "Sign in with Bitbucket" },
    { icon: <img src={AzureLogo} alt="Azure Logo" className="w-5 h-5 mr-3 bg-transparent" />, label: "Sign in with Azure DevOps" },
    { icon: <FaGitlab className="text-orange-500 w-5 h-5 mr-3" />, label: "Sign in with GitLab" },
  ];

  const SelfHostedButtons = [
    { icon: <FaGitlab className="text-orange-500 w-5 h-5 mr-3" />, label: "Self Hosted GitLab" },
    { icon: <FaGithub className="text-black w-5 h-5 mr-3" />, label: "Sign in with SSO" },
  ];

  const renderButtons = (buttons) =>
    buttons.map((btn, index) => (
      <button
        key={index}
        onClick={() => handleLogin()} // Simulate login when any button is clicked
        className="w-2/3 h-14 flex items-center justify-center px-6 py-3 border rounded-lg hover:shadow-md transition font-medium"
      >
        {btn.icon}
        {btn.label}
      </button>
    ));

  // handleLogin function that updates isLogin state and redirects to the repository
  const handleLogin = () => {
    setIsLoggedIn(true); // Update login state
    navigate("/repositories"); // Redirect to the repositories page
  };
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[960px] max-w-full border-gray-200">
      {/* Left Section (hidden on mobile) */}
      <div className="relative h-full bg-white overflow-hidden hidden md:flex items-center justify-center">
        <div className="relative max-w-md w-[474px] h-[322px]">
          {/* Top Section */}
          <div className="absolute top-0 left-0 border border-gray-200 rounded-3xl shadow-lg h-[170px] w-[427px] z-10">
            <h2 className="p-4 text-lg font-bold text-gray-900 flex items-center">
              <img src={LogoImage} alt="Icon" className="w-10 h-10" />
              AI to Detect & Autofix Bad Code
            </h2>
            <div className="w-full border-t-2 p-4 flex justify-around">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">30+</h3>
                <p className="text-black text-sm">Language Support</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">10K+</h3>
                <p className="text-black text-sm">Developers</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">100K+</h3>
                <p className="text-black text-sm">Hours Saved</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-0 right-0 w-[270px] h-[164px] bg-white border border-gray-200 rounded-3xl p-4 shadow-lg z-20">
            <div className="flex flex-col justify-between h-full px-4 py-2">
              {/* Top Section: Pie Chart Icon and 14% This Week */}
              <div className="flex justify-between items-center space-x-2">
                <div>
                  <FontAwesomeIcon icon={faChartPie} className="text-blue-600 text-4xl" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-blue-600 font-semibold">
                    <span className="text-lg">↑</span> 14%
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">This Week</p>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Issues Fixed */}
              <div>
                <h3 className="text-lg font-bold text-gray-900">Issues Fixed</h3>
                <p className="text-2xl font-extrabold text-gray-900">500K+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image positioned in the bottom-left */}
        <img
          src={side}
          alt="Logo"
          className="absolute bottom-0 left-0 w-[284px] h-[319px] bg-transparent m-0 p-0"
        />
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 h-full bg-gray-100 px-6 py-48">
        <div className="w-full max-w-full bg-white border border-gray-200 rounded-lg space-y-8 p-6">
          {/* Logo and Title */}
          <div className="flex justify-center items-center space-x-1">
            <img src={LogoImage} alt="CodeAnt AI Logo" className="w-16 h-16" />
            <h1 className="text-3xl text-black font-normal">CodeAnt AI</h1>
          </div>
          <div className="text-center text-4xl font-semibold">
            Welcome to CodeAnt AI
          </div>

          {/* Tabs */}
          <div className="flex justify-around border-b border-gray-200 pb-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-1/2 text-center h-14 py-2 border rounded-lg text-sm font-medium ${activeTab === tab.key
                  ? "border-b-2 bg-blue-600 text-white"
                  : "text-gray-700"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            {activeTab === "SAAS" ? renderButtons(SaaSButtons) : renderButtons(SelfHostedButtons)}
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-black text-center mt-6">
          By signing up, you agree to our{" "}
          <a href="/privacy-policy" className="font-bold text-black">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
