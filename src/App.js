import "./App.css";
import Header from "./Components/Header";
import { StoreFunction } from "./Context/store";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home.jsx";
import SignupComp from "./Components/SignupComp.jsx";
import LoginComp from "./Components/LoginComp";
import ErrorComp from "./Components/ErrorComp.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import SearchComp from "./Components/SearchComp.jsx";
import CreateThreads from "./Components/CreateThreads.jsx";
function App() {
  const { userToken,showThreadForm } = StoreFunction();

  return (
    <>
      <div className="outer-main-div">
        {showThreadForm ? <CreateThreads /> : null}
        <Router>
          {userToken ? <Header /> : ""}

          <Routes>
            {userToken && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/search" element={<SearchComp />} />
                <Route path="/login" element={<Home />} />
                <Route path="*" element={<ErrorComp />} />
                <Route path="/user/:userName" element={<UserProfile />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/logout" element={<Home />} />

              </>
            )}

            {!userToken && (
              <>
                <Route path="/" element={<LoginComp />} />
                <Route path="/login" element={<LoginComp />} />
                <Route path="/signup" element={<SignupComp />} />
                <Route path="*" element={<ErrorComp />} />
              </>
            )}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
