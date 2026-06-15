import ui from './windowbar.module.css'
import { RiSearchLine, RiSettingsFill } from "react-icons/ri";
import type { AppPage } from '../../App'

type Props = {
    page: AppPage;
    setPage: React.Dispatch<React.SetStateAction<AppPage>>;
}

export default function WindowBar({
    page,
    setPage
}: Props) {

    return (
        <div className={ui.container}>

            <div className={ui.logo}>
                <img src="/incommerce_logo.avif" alt="" />
            </div>

            <div className={ui.searchtabs}>
                <div className={ui.search}>
                    <RiSearchLine color="#f5f5f7" size={24} />
                    <input type="text" />
                </div>

                <div className={ui.tabs}>
                    <button
                        className={page === 'pos' ? ui.active : ''}
                        onClick={() => setPage('pos')}
                    >
                        POS
                    </button>

                    <button
                        className={page === 'sales' ? ui.active : ''}
                        onClick={() => setPage('sales')}
                    >
                        Sales & Workforce
                    </button>

                    <button
                        className={page === 'transactions' ? ui.active : ''}
                        onClick={() => setPage('transactions')}
                    >
                        Transactions
                    </button>

                    <button
                        className={page === 'inventory' ? ui.active : ''}
                        onClick={() => setPage('inventory')}
                    >
                        Inventory
                    </button>
                </div>
            </div>

            <div className={ui.settings}>
                <RiSettingsFill size={18} />
            </div>

        </div>
    )
}