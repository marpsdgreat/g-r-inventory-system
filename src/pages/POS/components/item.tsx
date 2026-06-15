import type { Item } from "../../../samples/sample-items";
import ui from '../pos.module.css'

export function ItemBox({
    item,
    onAdd
}: {
    item: Item;
    onAdd: () => void;
}) {
    return (
        <div className={ui.item} onClick={onAdd}>
            <div className={ui.sku}>{item.sku}</div>

            <div className={ui.itemDeets}>
                <div className={ui.itemSubDeets}>
                    <span>{item.name}</span>
                    <span>{item.brand}</span>
                    <span>{item.category}</span>
                    <span>{item.subcategory}</span>
                </div>

                <div className={ui.price}>
                    P{item.price}.00
                </div>
            </div>

            <div className={ui.count}>
                {item.itemCount}
            </div>
        </div>
    );
}