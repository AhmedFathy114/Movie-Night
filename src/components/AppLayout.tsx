import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="scrollbar-thin">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
