import { useMemo, useState } from "react";
import ui from './pos.module.css'
import NavBar from "../../components/navbar/navbar";
import { RxChevronLeft } from "react-icons/rx";
import Register from "./pages/register/register";
import { LiaCashRegisterSolid } from "react-icons/lia";
import Returns from "./pages/returns/returns";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import Shifts from "./pages/shifts/shifts";

export default function Sales() {

    const [activeTab, setActiveTab] = useState("register");

    const routes = useMemo(() => [
        {
            id: "register",
            label: "Register",
            icon: <LiaCashRegisterSolid size={22} />,
            component: <Register />
        },
        {
            id: "returns",
            label: "Returns",
            icon: <MdOutlineKeyboardReturn size={22} />,
            component: <Returns />
        },
        {
            id: "shifts",
            label: "Shifts",
            icon: <RiTimeLine size={22} />,
            component: <Shifts />
        },
        // {
        //     id: "analytics",
        //     label: "Analytics",
        //     icon: <RxBarChart size={22} />,
        //     component: <Analytics />
        // },
        // {
        //     id: "employees",
        //     label: "Employees",
        //     icon: <RxPeople size={22} />,
        //     component: <Employees />
        // },
        // {
        //     id: "reports",
        //     label: "Reports",
        //     icon: <RxReader size={22} />,
        //     component: <Reports />
        // }
    ], []);

    const currentPage =
        routes.find(route => route.id === activeTab);

    return (
        <div className={ui.container}>
            <NavBar
                title="POS"
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