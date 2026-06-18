import { HiMinus, HiPlus } from 'react-icons/hi'
import ui from '../register.module.css'
import type { Item } from '../../../../../samples/sample-items';

type CartItemProps = {
    item: Item;
    index: number;
};

export function CartItem({ item, index }: CartItemProps) {
    return (
        <div key={`${item.sku}-${index}`} className={ui.cartItem}>
            <div className={ui.cartName}>
                <div>{item.name}</div>
                <div style={{ color: "var(--text-muted-light)" }}>{item.brand}</div>
                <div className={ui.counter}>
                    <HiMinus />
                    <input type="number" defaultValue={1} />
                    <HiPlus />
                </div>
            </div>
            <div className={ui.cartPrice}>
                P{item.price}.00
            </div>
        </div>
    )
}