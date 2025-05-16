import { Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

export default (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </>
);
