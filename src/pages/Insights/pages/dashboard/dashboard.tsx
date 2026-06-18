export default function Dashboard() {
    return (
        <div>Dashboard
            <br />
            <ul>
                <li>Executive Pulse — C-suite live overview: revenue, profit, KPI scoreboard, multi-store map, alert feed</li>
                <li>Sales Pulse — Live registers, today's targets, top sellers now, discount burn rate, cashier leaderboard (performance only, no pay)</li>
                <li>Inventory Pulse — Low stock wall, OOS alerts, in-transit tracker, receiving queue, critical variance flags</li>
                <li>Workforce Pulse — Live roster, coverage gaps, attendance pulse, productivity live, break tracker (no compensation visible)</li>
                <li>Financial Pulse — Cash position, drawer status, pending payments, approval queue, reconciliation status</li>
                <li>Operations Pulse — Service health, integration health, sync status, error stream, background jobs</li>
            </ul>
        </div>
    )
}