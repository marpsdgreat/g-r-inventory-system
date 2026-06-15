import { useMemo, useState } from "react";
import ui from './pos.module.css'
import { sampleItemsList, type Item } from '../../samples/sample-items'
import { ItemBox } from "./components/item";
import { SelectFilter } from "./components/select-filter";
import { RiDeleteBinFill, RiResetRightLine } from "react-icons/ri";
import { CartItem } from "./components/cart-item";

export default function POS() {

    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [cartItems, setCartItems] = useState<Item[]>([]);
    const brands = useMemo(
        () => [...new Set(sampleItemsList.map(item => item.brand))],
        []
    );

    const categories = useMemo(
        () => [
            ...new Set(
                sampleItemsList
                    .filter(item =>
                        !selectedBrand || item.brand === selectedBrand
                    )
                    .map(item => item.category)
            )
        ],
        [selectedBrand]
    );

    const subcategories = useMemo(
        () => [
            ...new Set(
                sampleItemsList
                    .filter(item =>
                        (!selectedBrand || item.brand === selectedBrand) &&
                        (!selectedCategory || item.category === selectedCategory)
                    )
                    .map(item => item.subcategory)
            )
        ],
        [selectedBrand, selectedCategory]
    );

    const filteredItems = useMemo(
        () =>
            sampleItemsList.filter(item =>
                (!selectedBrand || item.brand === selectedBrand) &&
                (!selectedCategory || item.category === selectedCategory) &&
                (!selectedSubcategory || item.subcategory === selectedSubcategory)
            ),
        [selectedBrand, selectedCategory, selectedSubcategory]
    );

    function addToCart(item: Item) {
        setCartItems(prev => {
            const exists = prev.find(i => i.sku === item.sku);

            if (exists) {
                return prev.map(i =>
                    i.sku === item.sku
                        ? { ...i, itemCount: i.itemCount + 1 }
                        : i
                );
            }

            return [...prev, { ...item, itemCount: 1 }];
        });
    }
    return (
        <div className={ui.container}>
            <div className={ui.items}>
                <div className={ui.filters}>
                    <SelectFilter selected={selectedBrand} allTitle={"All Brands"} list={brands} onChange={(value) => {
                        setSelectedBrand(value);
                        setSelectedCategory("");
                        setSelectedSubcategory("");
                    }}
                    />
                    <SelectFilter selected={selectedCategory} allTitle={"All Categories"} list={categories}
                        onChange={(value) => {
                            setSelectedCategory(value);
                            setSelectedSubcategory("");
                        }}
                    />
                    <SelectFilter selected={selectedSubcategory} allTitle={"All SubCategories"} list={subcategories}
                        onChange={setSelectedSubcategory}
                    />
                </div>

                <div className={ui.itemList}>
                    {filteredItems.map((item) => (
                        <ItemBox
                            key={item.sku}
                            item={item}
                            onAdd={() => addToCart(item)}
                        />
                    ))}
                </div>
            </div>

            <div className={ui.salesHandler}>
                <div className={ui.salesHeader}>
                    <div className={ui.customer}>
                        Customer 1
                        <span>
                            Transaction Order #98203
                        </span>
                    </div>
                    <div className={ui.salesButtons}>
                        <RiResetRightLine size={22} />
                        <RiDeleteBinFill size={22} color="#ef4444" />
                    </div>
                </div>
                <div className={ui.currentPOScontainer}>
                    <div className={ui.currentPOS}>
                        {cartItems.length === 0 && (
                            <div>No items yet</div>
                        )}

                        {cartItems.map((item, index) => (
                            <CartItem item={item} index={index} />
                        ))}
                    </div>
                </div>
                <div className={ui.cartBreakdown}>
                    <div className={ui.subPricingContainer}>
                        <SubPricing subItem={"Subtotal"} price={500} />
                        <SubPricing subItem={"Tax"} price={14} />
                        <SubPricing subItem={"Discount"} price={-300} />
                    </div>
                    <div className={ui.totalBreakdown}>
                        <div>
                            Total
                        </div>
                        <div>
                            FREE
                        </div>
                    </div>
                </div>
                <div className={ui.cartBtn}>
                    <button>Print</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

function SubPricing({ subItem, price }) {
    return (
        <div className={ui.subPricing}>
            <div>{subItem}</div>
            <div>P{price}.00</div>
        </div>
    )
}


