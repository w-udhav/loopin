import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DayLayout from "./layouts/DayLayout";
import DayView from "./pages/day/DayView";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<DayLayout />}>
          <Route index element={<Navigate to="/today" replace />} />
          <Route path="/today" element={<DayView />} />
          <Route path="/:selectedDate" element={<DayView />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
