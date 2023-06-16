import React, { useEffect } from "react";
import { getHashParam } from "./utils/util";
import { Route, Routes, useNavigate } from "react-router-dom";
import Tickets from "./components/Tickets/Tickets";
import AuthenticationError from "./components/AuthenticationError/AuthenticationError";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    const getToken = getHashParam(window.location.hash);

    if (getToken || accessToken) {
      if (!accessToken) sessionStorage.setItem("accessToken", getToken);
      navigate("/tickets");
    } else {
      navigate("/error");
    }
    if (!window.location.hash && !accessToken) {
      window.open(
        "https://zendeskcodingchallenge1602.zendesk.com/oauth/authorizations/new?response_type=token&redirect_uri=http://localhost:3000/&client_id=zendeskcodingchallenge1602&scope=read%20write",
        "_self"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderRouter = () => {
    return (
      <>
        <Routes>
          <Route path="/error" element={<AuthenticationError />}></Route>
          <Route path="/tickets" element={<Tickets />}></Route>
          <Route path="/" element={<Tickets />}></Route>
        </Routes>
      </>
    );
  };

  return (
    <div className="App" data-testid="app-component">
      {renderRouter()}
    </div>
  );
}

export default App;
