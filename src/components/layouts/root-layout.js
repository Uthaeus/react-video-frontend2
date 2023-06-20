import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";

function RootLayout() {

    return (
        <div className="root-layout-container">
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default RootLayout;