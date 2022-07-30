import React, { createContext, useContext, useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const ChatProvider = ({ children }) => {
  const [location, setLocation] = useState('');
  const [property, setProperty] = useState('');
  //const [notification, setNotification] = useState([]);
  const [date,setDate] = useState();
  const [start, setstart] = useState()
  const [end, setend] = useState()
  const [go, setgo] = useState(false)  
  const [details,setDetails]=useState([])

  useEffect(() => {
    
  },[go]);

  return (
    <AuthContext.Provider
      value={{
        location, setLocation,
        property, setProperty,
       start,setstart,
       end,setend,date,setDate,go,setgo,details,setDetails
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthState = () => {
  return useContext(AuthContext);
};

export default ChatProvider;