import { lazy } from "react";
import "./assets/app.scss";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { SidebarProvider } from "./components/sidebar/context/SidebarContext";
import useToggle from "./hooks/useToggle";
const Main = lazy(() => import("./screens/main/Main"));
const App = () => {
  const { state: isOpenSidebar, toggle:toggleSidebar,close:closeSidebar,open:openSidebar } = useToggle();

  return (
    <div className="wrapper max-w-7xl">
      <SidebarProvider values={{ isOpenSidebar, toggleSidebar,closeSidebar,openSidebar }}>
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </SidebarProvider>
    </div>
  );
};

export default App;
