import { Link } from "react-router-dom";
import { FaHome, FaUserGraduate, FaChalkboardTeacher, FaBook,FaCalendarAlt,FaSignOutAlt,FaTimes,FaBars } from "react-icons/fa";

import { useState } from "react";



const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    return (
      <div className={`${isOpen ? 'w-64' : 'w-20'} h-screen bg-green-500 text-white transition-all duration-300 fixed left-0 top-0`}>
        <div className="flex items-center justify-center p-4 ">
          <h2 className={`${!isOpen && 'hidden'} font-bold text-xl`}>School Manager</h2>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-gray-700">
            {isOpen ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
  
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/Control" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <FaHome className="w-5 h-5" />
                <span className={`${!isOpen && 'hidden'} ml-3`}>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/Control/students" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <FaUserGraduate className="w-5 h-5" />
                <span className={`${!isOpen && 'hidden'} ml-3`}>Students</span>
              </Link>
            </li>
            <li>
              <Link to="/Control/teachers" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <FaChalkboardTeacher className="w-5 h-5" />
                <span className={`${!isOpen && 'hidden'} ml-3`}>Teachers</span>
              </Link>
            </li>
            <li>
              <Link to="/Control/courses" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <FaBook className="w-5 h-5" />
                <span className={`${!isOpen && 'hidden'} ml-3`}>Courses</span>
              </Link>
            </li>
            <li>
              <Link to="/Control/schedule" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <FaCalendarAlt className="w-5 h-5" />
                <span className={`${!isOpen && 'hidden'} ml-3`}>Schedule</span>
              </Link>
            </li>
          </ul>
        </nav>
  
        <div className="absolute bottom-0 w-full p-4 ">
          <Link to="/" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <FaSignOutAlt  className="w-5 h-5" />
            <span className={`${!isOpen && 'hidden'} ml-3`}>Log out</span>

          
          </Link>
        </div>
      </div>
    );
  };
  
  export default Sidebar;