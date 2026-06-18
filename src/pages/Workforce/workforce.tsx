import { useMemo, useState } from "react";
import ui from './workforce.module.css'
import NavBar from "../../components/navbar/navbar";
import { RxChevronLeft } from "react-icons/rx";
import Employees from "./pages/employees/employees";
import { FaUserTie } from "react-icons/fa";
import Schedules from "./pages/schedules/schedules";
import { GrSchedule } from "react-icons/gr";
import KPI from "./pages/kpi/kpi";
import { TbScoreboard } from "react-icons/tb";

export default function Workforce() {

    const [activeTab, setActiveTab] = useState("employees");

    const routes = useMemo(() => [
        {
            id: "employees",
            label: "Employees",
            icon: <FaUserTie size={22} />,
            component: <Employees />
        },
        {
            id: "schedules",
            label: "Schedules",
            icon: <GrSchedule size={22} />,
            component: <Schedules />
        },
         {
            id: "kpi",
            label: "KPIs",
            icon: <TbScoreboard size={22} />,
            component: <KPI />
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