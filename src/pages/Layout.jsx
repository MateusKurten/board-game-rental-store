import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import CustomFooter from "../partials/CustomFooter";

export default function Layout() {

    return (
        <>
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              <Header />
              <Outlet />
            </div>
            <CustomFooter />
          </div>
        </>
    )
};
