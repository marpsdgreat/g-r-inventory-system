import clsx from "clsx";
import ui from "./navbar.module.css";
import type { ReactNode } from "react";

type NavItem = {
    id: string;
    label: string;
    icon: ReactNode;
};
type NavBarProps = {
    title: string;
    items: NavItem[];
    active: string;
    onChange: (id: string) => void;
};

export default function NavBar({
    title,
    items,
    active,
    onChange
}: NavBarProps) {
    return (
        <div className={ui.container}>
            <div className={ui.title}>
                {title}
            </div>
            <div className={ui.navItems}>
                {items.map(item => (
                    <button
                        key={item.id}
                        className={clsx(
                            ui.navItem,
                            active === item.id && ui.active
                        )}
                        onClick={() => onChange(item.id)}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}