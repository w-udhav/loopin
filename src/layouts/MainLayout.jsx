import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AuthModal from "../components/AuthModal";
import { useAuth } from "../context/AuthContext";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-12 gap-8">
      <Sidebar className="col-start-1 col-end-3 " />

      {/* Main */}
      <div className="col-start-4 col-end-10 flex flex-col flex-1">
        <main className="">
          {!isAuthenticated && <AuthModal />}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
