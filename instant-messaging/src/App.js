import "./App.css";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Profile /> */}
      {/* <Auth /> */}
      <Routes>
        <Route
          path="/"
          // element will depend on user currently in store
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
