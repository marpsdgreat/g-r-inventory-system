import { useMemo, useState } from "react";
import ui from './transactions.module.css'
import NavBar from "../../components/navbar/navbar";
import { RxActivityLog, RxArchive, RxBarChart, RxChevronLeft, RxCrosshair2, RxReader, RxShuffle, RxTokens } from "react-icons/rx";
import Dashboard from "./pages/dashboard/dashboard";
import SalesTransactions from "./pages/sales-transactions/sales-transaction";
import Ledger from "./pages/ledger/ledger";
import Procurement from "./pages/procurement/procurement";
import InventoryMovements from "./pages/inventory-movements/inventory-movements";
import CashMovements from "./pages/cash-movements/cash-movements";
import AuditLog from "./pages/audit-logs/audit-log";

export default function Transactions() {

    const [activeTab, setActiveTab] = useState("dashboard");

    const routes = useMemo(() => [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: <RxCrosshair2 size={22} />,
            component: <Dashboard />
        },
        {
            id: "ledger",
            label: "Ledger",
            icon: <RxReader size={22} />,
            component: <Ledger />
        },
        {
            id: "sales",
            label: "Sales",
            icon: <RxBarChart size={22} />,
            component: <SalesTransactions />
        },
        {
            id: "procurement",
            label: "Procurement",
            icon: <RxArchive size={22} />,
            component: <Procurement />
        },
        {
            id: "inventory-movements",
            label: "Movements",
            icon: <RxShuffle size={22} />,
            component: <InventoryMovements />
        },
        {
            id: "cash",
            label: "Cash",
            icon: <RxTokens size={22} />,
            component: <CashMovements />
        },
        {
            id: "audit",
            label: "Audit",
            icon: <RxActivityLog size={22} />,
            component: <AuditLog />
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

            <div className={ui.transactionsPage}>
                <div className={ui.collapseNav}>
                    <RxChevronLeft size={28} />
                </div>
                {currentPage?.component}
            </div>
        </div>

    );
}