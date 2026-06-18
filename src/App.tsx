import './App.css'
import { useState } from 'react'
import WindowBar from './components/windowbar/windowbar'

import POS from './pages/POS/pos'
import Inventory from './pages/Inventory/inventory'
import Transactions from './pages/Transactions/transactions'
import Workforce from './pages/Workforce/workforce'
import Insights from './pages/Insights/insights'

export type AppPage =
  | 'pos'
  | 'workforce'
  | 'transactions'
  | 'inventory'
  | 'insights'

function App() {
  const [page, setPage] = useState<AppPage>('pos')

  return (
    <section className="app-container">
      <WindowBar
        page={page}
        setPage={setPage}
      />

      <div className="sections">
        {page === 'pos' && <POS />}
        {page === 'workforce' && <Workforce />}
        {page === 'transactions' && <Transactions />}
        {page === 'inventory' && <Inventory />}
        {page === 'insights' && <Insights />}
      </div>
    </section>
  )
}

export default App