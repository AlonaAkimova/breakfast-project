import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { MenuList } from "./pages/MenuList";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <NextUIProvider>
        <Routes>
          <Route
            element={
              isLoggedIn ? (
                <Navigate to="/menulist" />
              ) : (
                <SignUp onLogin={handleLogin} />
              )
            }
            path="/signup"
          />
          <Route
            element={
              isLoggedIn ? (
                <Navigate to="/menulist" />
              ) : (
                <SignIn onLogin={handleLogin} />
              )
            }
            path="/signin"
          />
          <Route
            element={<MenuList onLogout={handleLogout} />}
            path="/menulist"
          />
        </Routes>
      </NextUIProvider>
    </>
  );
};

export default App;
