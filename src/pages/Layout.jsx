import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import CustomFooter from "../partials/CustomFooter";

export default function Layout() {

    return (
        <>
          <Header />
          <div>
            <Outlet />
          </div>
          <CustomFooter />
        </>
    )
};
