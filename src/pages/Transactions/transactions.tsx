import { useMemo, useState } from "react";
import ui from './transactions.module.css'
import NavBar from "../../components/navbar/navbar";
import { RxActivityLog, RxArchive, RxChevronLeft, RxReader } from "react-icons/rx";
import Ledger from "./pages/ledger/ledger";
import Procurement from "./pages/procurement/procurement";
import AuditLog from "./pages/audit-logs/audit-log";

export default function Transactions() {

    const [activeTab, setActiveTab] = useState("ledger");

    const routes = useMemo(() => [
        {
            id: "ledger",
            label: "Ledger",
            icon: <RxReader size={22} />,
            component: <Ledger />
        },
        {
            id: "procurement",
            label: "Procurement",
            icon: <RxArchive size={22} />,
            component: <Procurement />
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
                title="Transactions"
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