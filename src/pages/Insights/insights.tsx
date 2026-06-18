import { useMemo, useState } from "react";
import ui from './insights.module.css'
import NavBar from "../../components/navbar/navbar";
import { RxChevronLeft } from "react-icons/rx";
import Dashboard from "./pages/dashboard/dashboard";
import Reports from "./pages/reports/reports";
import { MdDashboard } from "react-icons/md";
import { RiClipboardLine } from "react-icons/ri";

export default function Insights() {

    const [activeTab, setActiveTab] = useState("dashboard");

    const routes = useMemo(() => [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: <MdDashboard size={22} />,
            component: <Dashboard />
        },
        {
            id: "reports",
            label: "Reoprts",
            icon: <RiClipboardLine size={22} />,
            component: <Reports />
        },
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

            <div className={ui.transactionsPage}>
                <div className={ui.collapseNav}>
                    <RxChevronLeft size={28} />
                </div>
                {currentPage?.component}
            </div>
        </div>

    );
}