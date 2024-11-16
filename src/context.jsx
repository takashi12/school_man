import React, { useState, useContext } from "react";


const AppContext = React.createContext();



const AppProvider = ({ children }) => {

const[isSidebarOpen,setIsSidebarOpen] = useState(false);


const [formData, setFormData] = useState({
  email: '',
  password: ''
});
const [message, setMessage] = useState({
  email: '',
  password: ''
});
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [id]: value
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailValid = EMAIL_REGEX.test(formData.email);
    const passwordValid = PWD_REGEX.test(formData.password);

    setMessage({
        email: emailValid ? "Email is valid" : "Invalid email format",
        password: passwordValid ? "Password is valid" : "Password must contain at least one uppercase letter, one lowercase letter, one number, and be 8-24 characters long"
    });
};

const openSidebar =()=>{
  setIsSidebarOpen(!isSidebarOpen);
} 
const closeSidebar =()=>{
  setIsSidebarOpen(false);
} 

  return <AppContext.Provider value={{
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    message,
   }}>
  {children}
  
  </AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
