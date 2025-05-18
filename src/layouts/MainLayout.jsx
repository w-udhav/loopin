import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AuthModal from "../components/AuthModal";
import { useAuth } from "../context/AuthContext";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-12">
      <Sidebar className="col-span-3 p-10" />

      {/* Main */}
      <div className="col-span-6 border flex flex-col flex-1 p-10">
        <main className="flex-1 p-4 border">
          {!isAuthenticated && <AuthModal />}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
