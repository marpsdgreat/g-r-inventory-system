export default function Procurement() {
    return (
        <div>Procurement
            <br />
            <ul>
                <li>PO Workflow — Request → Approve → Send → Receive → Pay</li>
                <li>3-Way Matching — PO + Goods Received Note + Invoice must align</li>
                <li>Approval Hierarchies — Tiered by amount (₱10K mgr, ₱100K director)</li>
                <li>Payment Scheduling — Optimize cash flow with due-date queue</li>
                <li>Supplier Statements — Reconcile against vendor's records</li>
                <li>Early-Payment Discounts — Auto-flag 2/10 net 30 opportunities</li>
                <li>Bulk-Procurement Discounts — Flags suppliers that offer discount at specific amounts/MOQ</li>
            </ul>
        </div>
    )
}