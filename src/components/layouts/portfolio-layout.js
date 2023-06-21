import { Outlet } from "react-router";

function PortfolioLayout() {
  return (
    <div className="portfolio-layout">
      <Outlet />
    </div>
  );
}

export default PortfolioLayout;