export interface Item {
    sku: string;
    name: string;
    brand: string;
    category: string;
    subcategory: string;
    price: number;
    itemCount: number;
}

export const sampleItemsList: Item[] = [
    {
        sku: "REF-001",
        name: "HB #2 Pencil",
        brand: "Staedtler",
        category: "School Supplies",
        subcategory: "Writing",
        price: 12.50,
        itemCount: 487
    },
    {
        sku: "REF-002",
        name: "Mechanical Pencil 0.5mm",
        brand: "Pilot",
        category: "School Supplies",
        subcategory: "Writing",
        price: 75.00,
        itemCount: 126
    },
    {
        sku: "REF-003",
        name: "Blue Ballpen Fine Tip",
        brand: "Dong-A",
        category: "School Supplies",
        subcategory: "Writing",
        price: 18.00,
        itemCount: 354
    },
    {
        sku: "REF-004",
        name: "Permanent Marker Black",
        brand: "Sharpie",
        category: "School Supplies",
        subcategory: "Markers",
        price: 95.00,
        itemCount: 88
    },
    {
        sku: "REF-005",
        name: "Highlighter Yellow",
        brand: "Stabilo",
        category: "School Supplies",
        subcategory: "Markers",
        price: 65.00,
        itemCount: 142
    },
    {
        sku: "REF-006",
        name: "A4 Notebook 80 Leaves",
        brand: "Campus",
        category: "School Supplies",
        subcategory: "Notebooks",
        price: 55.00,
        itemCount: 201
    },
    {
        sku: "REF-007",
        name: "Spiral Notebook B5",
        brand: "Kokuyo",
        category: "School Supplies",
        subcategory: "Notebooks",
        price: 120.00,
        itemCount: 93
    },
    {
        sku: "REF-008",
        name: "Colored Pencil Set 24pcs",
        brand: "Faber-Castell",
        category: "School Supplies",
        subcategory: "Art Materials",
        price: 285.00,
        itemCount: 64
    },
    {
        sku: "REF-009",
        name: "Crayons 16 Colors",
        brand: "Crayola",
        category: "School Supplies",
        subcategory: "Art Materials",
        price: 145.00,
        itemCount: 79
    },
    {
        sku: "REF-010",
        name: "Glue Stick 21g",
        brand: "Elmer's",
        category: "School Supplies",
        subcategory: "Adhesives",
        price: 35.00,
        itemCount: 173
    },

    {
        sku: "TOY-001",
        name: "Teddy Bear Classic 12in",
        brand: "CuddleCo",
        category: "Toys",
        subcategory: "Stuffed Toys",
        price: 399.00,
        itemCount: 58
    },
    {
        sku: "TOY-002",
        name: "Giant Teddy Bear 36in",
        brand: "CuddleCo",
        category: "Toys",
        subcategory: "Stuffed Toys",
        price: 1499.00,
        itemCount: 12
    },
    {
        sku: "TOY-003",
        name: "Plush Bunny Pink",
        brand: "Snuggle Friends",
        category: "Toys",
        subcategory: "Stuffed Toys",
        price: 349.00,
        itemCount: 44
    },
    {
        sku: "TOY-004",
        name: "Plush Panda Medium",
        brand: "Snuggle Friends",
        category: "Toys",
        subcategory: "Stuffed Toys",
        price: 429.00,
        itemCount: 36
    },
    {
        sku: "TOY-005",
        name: "Plush Dinosaur Green",
        brand: "DinoSoft",
        category: "Toys",
        subcategory: "Stuffed Toys",
        price: 499.00,
        itemCount: 28
    },
    {
        sku: "TOY-006",
        name: "Plush Unicorn Rainbow",
        brand: "Magic Plush",
        category: "Toys",
        subcategory: "Stuffed Toys",
        price: 599.00,
        itemCount: 31
    },
    {
        sku: "TOY-007",
        name: "Plush Fox Orange",
        brand: "Woodland Buddies",
        category: "Toys",
        subcategory: "Stuffed Toys",
        price: 389.00,
        itemCount: 27
    },
    {
        sku: "TOY-008",
        name: "Plush Penguin Small",
        brand: "Arctic Friends",
        category: "Toys",
        subcategory: "Stuffed Toys",
        price: 299.00,
        itemCount: 42
    },
    {
        sku: "TOY-009",
        name: "Plush Cat White",
        brand: "Snuggle Friends",
        category: "Toys",
        subcategory: "Stuffed Toys",
        price: 369.00,
        itemCount: 39
    },
    {
        sku: "TOY-010",
        name: "Plush Dog Golden Retriever",
        brand: "Happy Paws",
        category: "Toys",
        subcategory: "Stuffed Toys",
        price: 449.00,
        itemCount: 34
    },

    {
        sku: "FIG-001",
        name: "Super Hero Action Figure",
        brand: "Marvel",
        category: "Toys",
        subcategory: "Action Figures",
        price: 799.00,
        itemCount: 25
    },
    {
        sku: "FIG-002",
        name: "Space Ranger Figure",
        brand: "Galactic Toys",
        category: "Toys",
        subcategory: "Action Figures",
        price: 649.00,
        itemCount: 22
    },
    {
        sku: "FIG-003",
        name: "Ninja Warrior Figure",
        brand: "Shadow Toys",
        category: "Toys",
        subcategory: "Action Figures",
        price: 599.00,
        itemCount: 18
    },

    {
        sku: "GAME-001",
        name: "Chess Set Wooden",
        brand: "Classic Games",
        category: "Games",
        subcategory: "Board Games",
        price: 899.00,
        itemCount: 15
    },
    {
        sku: "GAME-002",
        name: "Monopoly Deluxe Edition",
        brand: "Hasbro",
        category: "Games",
        subcategory: "Board Games",
        price: 1299.00,
        itemCount: 11
    },
    {
        sku: "GAME-003",
        name: "UNO Card Game",
        brand: "Mattel",
        category: "Games",
        subcategory: "Card Games",
        price: 249.00,
        itemCount: 73
    },
    {
        sku: "GAME-004",
        name: "Jenga Classic",
        brand: "Hasbro",
        category: "Games",
        subcategory: "Block Games",
        price: 699.00,
        itemCount: 20
    },

    {
        sku: "ELEC-001",
        name: "Wireless Mouse Black",
        brand: "Logitech",
        category: "Electronics",
        subcategory: "Accessories",
        price: 895.00,
        itemCount: 41
    },
    {
        sku: "ELEC-002",
        name: "USB-C Charging Cable 1m",
        brand: "Anker",
        category: "Electronics",
        subcategory: "Cables",
        price: 249.00,
        itemCount: 117
    },
    {
        sku: "ELEC-003",
        name: "Bluetooth Speaker Mini",
        brand: "JBL",
        category: "Electronics",
        subcategory: "Audio",
        price: 1499.00,
        itemCount: 19
    },
    {
        sku: "ELEC-004",
        name: "Power Bank 10000mAh",
        brand: "Romoss",
        category: "Electronics",
        subcategory: "Power",
        price: 999.00,
        itemCount: 24
    },

    {
        sku: "GIFT-001",
        name: "Ceramic Mug White",
        brand: "HomeCraft",
        category: "Gifts",
        subcategory: "Drinkware",
        price: 199.00,
        itemCount: 67
    },
    {
        sku: "GIFT-002",
        name: "Insulated Tumbler 500ml",
        brand: "HydroMate",
        category: "Gifts",
        subcategory: "Drinkware",
        price: 699.00,
        itemCount: 33
    },
    {
        sku: "GIFT-003",
        name: "Scented Candle Lavender",
        brand: "AromaLife",
        category: "Gifts",
        subcategory: "Home Decor",
        price: 349.00,
        itemCount: 51
    },
    {
        sku: "GIFT-004",
        name: "Keychain Acrylic Custom",
        brand: "GiftWorks",
        category: "Gifts",
        subcategory: "Accessories",
        price: 99.00,
        itemCount: 146
    }
];