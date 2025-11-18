import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import Notifications from "./pages/Notifications.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";


function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
