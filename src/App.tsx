import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./routes/header/header.component";

import ProtectedRoute from "./routes/protected-route/protected-route.component";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth/auth.component";
import ClassesWrapper from "./components/classes/classes-wrapper.component";
import Profile from "./routes/profile/profile.component";

import { UserContext } from "./contexts/user.context";

import { GlobalStyle } from "./global-styles";

function App() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="classes/*" element={<ClassesWrapper />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={currentUser}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
