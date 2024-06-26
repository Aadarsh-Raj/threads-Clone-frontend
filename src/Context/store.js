import { createContext, useContext, useEffect, useState } from "react";
import LoginComp from "../Components/LoginComp";
import SearchComp from "../Components/SearchComp";
const StoreController = createContext({});

export const StoreFunction = () => {
  return useContext(StoreController);
};

const StoreContext = (props) => {
  // create states
  const [loginComp, setLoginComponent] = useState(<LoginComp />);
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [userName, setUserName] = useState("User");
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [followersData, setFollowersData] = useState([]);
  const [showThreadForm, setShowThreadForm] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false)
  const [userToken, setUserToken] = useState(""); 
  const [loadSearchComp, setLoadSearchComp] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://threads-clone-backend-hq4g.onrender.com/api/");
  // logic for states updation
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      setUserToken(tokenFromStorage);
    }
  }, []);

  
  const functionObject = {
    userToken,
    apiUrl,
    setUserToken,
    loginComp,
    userName,
    setUserName,
    userProfile,
    setUserProfile,
    searchSuggestion, 
    setSearchSuggestion,
    loadSearchComp,
    setLoadSearchComp,
    showThreadForm, 
    setShowThreadForm,
    showUpdateProfile,
    setShowUpdateProfile,
    showFollowers,
    setShowFollowers,
    followersData, 
    setFollowersData
  };

  return (
    <StoreController.Provider value={functionObject}>
      {props.children}
    </StoreController.Provider>
  );
};

export default StoreContext;
