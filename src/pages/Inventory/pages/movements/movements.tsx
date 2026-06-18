export default function Movements() {
    return (
        <div>Movements
            <br />
            <ul>
                <li>Transfer Orders — Send → In-Transit → Received with discrepancy flags</li>
                <li>Adjustments — With mandatory reason codes (damage, theft, found)</li>
                <li>Returns to Vendor — RMA tracking with credit memos</li>
                <li>Cycle Adjustments — From stocktake variance</li>
                <li>Audit Trail — Who, what, when, why for every movement</li>
            </ul>
        </div>
    )
}