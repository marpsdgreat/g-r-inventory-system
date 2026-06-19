import { useMemo, useState } from "react";
import ui from './inventory.module.css'
import NavBar from "../../components/navbar/navbar";
import { RxChevronLeft } from "react-icons/rx";
import ProductMaster from "./pages/product-master/product-master";
import { BsBox, BsTruck } from "react-icons/bs";
import Stock from "./pages/stock/stock";
import { AiOutlineStock } from "react-icons/ai";
import Warehouses from "./pages/warehouses/warehouses";
import { LiaWarehouseSolid } from "react-icons/lia";
import Suppliers from "./pages/suppliers/suppliers";
import Movements from "./pages/movements/movements";
import { IoFootstepsSharp } from "react-icons/io5";

export default function Inventory() {

    const [activeTab, setActiveTab] = useState("product-master");

    const routes = useMemo(() => [
        {
            id: "product-master",
            label: "Product Master",
            icon: <BsBox size={22} />,
            component: <ProductMaster />
        },
        {
            id: "stock",
            label: "Stock",
            icon: <AiOutlineStock size={22} />,
            component: <Stock />
        },
        {
            id: "warehouses",
            label: "Warehouses",
            icon: <LiaWarehouseSolid size={22} />,
            component: <Warehouses />
        },
        {
            id: "suppliers",
            label: "Suppliers",
            icon: <BsTruck size={22} />,
            component: <Suppliers />
        },
        {
            id: "movements",
            label: "Movements",
            icon: <IoFootstepsSharp size={22} />,
            component: <Movements />
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