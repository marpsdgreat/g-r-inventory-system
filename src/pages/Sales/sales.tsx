import { useMemo, useState } from "react";
import ui from './sales.module.css'
import Dashboard from "./pages/dashboard/dashboard";
import Analytics from "./pages/analytics/analytics";
import Employees from "./pages/employees/employees";
import Reports from "./pages/reports/reports";
import NavBar from "../../components/navbar/navbar";
import { RxBarChart, RxChevronLeft, RxCrosshair2, RxPeople, RxReader } from "react-icons/rx";

export default function Sales() {

    const [activeTab, setActiveTab] = useState("dashboard");

    const routes = useMemo(() => [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: <RxCrosshair2 size={22} />,
            component: <Dashboard />
        },
        {
            id: "analytics",
            label: "Analytics",
            icon: <RxBarChart size={22} />,
            component: <Analytics />
        },
        {
            id: "employees",
            label: "Employees",
            icon: <RxPeople size={22} />,
            component: <Employees />
        },
        {
            id: "reports",
            label: "Reports",
            icon: <RxReader size={22} />,
            component: <Reports />
        }
    ], []);

    const currentPage =
        routes.find(route => route.id === activeTab);

    return (
        <div className={ui.container}>
            <NavBar
                title="Sales & Workforce"
                items={routes}
                active={activeTab}
                onChange={setActiveTab}
            />

            <div className={ui.salesPage}>
                <div className={ui.collapseNav}>
                    <RxChevronLeft size={28} />
                </div>
                {currentPage?.component}
            </div>
        </div>

    );
}