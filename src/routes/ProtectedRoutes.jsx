import { Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Today from "../pages/day/Today";
import DayView from "../pages/day/DayView";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
}

export default (
  <Route element={<PrivateRoute element={<MainLayout />} />}>
    <Route path="/today" element={<Today />} />
    <Route path="/:selectedDate" element={<DayView />} />
  </Route>
);
