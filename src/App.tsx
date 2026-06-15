import './App.css'
import { useState } from 'react'
import WindowBar from './components/windowbar/windowbar'

import POS from './pages/POS/pos'
import Sales from './pages/Sales/sales'
// import Transactions from './pages/Transactions/transactions'
import Inventory from './pages/Inventory/inventory'
import Transactions from './pages/Transactions/transactions'

export type AppPage =
  | 'pos'
  | 'sales'
  | 'transactions'
  | 'inventory'

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
        {page === 'sales' && <Sales />}
        {page === 'transactions' && <Transactions />}
        {page === 'inventory' && <Inventory />}
      </div>
    </section>
  )
}

export default App