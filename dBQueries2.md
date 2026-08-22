Data
Product Collection:

```js
[{ \_id: "PROD001", name: "Acoustic Guitar", category: "String", brand: "GuitarCo", price: 499.99, stock: 15, features: ["Solid Spruce Top", "Mahogany Back & Sides"], reviews: [ { user: "Alice", rating: 5, comment: "Amazing sound!" }, { user: "Bob", rating: 4, comment: "Great for beginners." }, ],},{ \_id: "PROD002", name: "Electric Piano", category: "Keyboard", brand: "KeyMaster", price: 799.0, stock: 8, features: ["88 Weighted Keys", "Multiple Voices"], reviews: [ { user: "Charlie", rating: 5, comment: "Love the feel of the keys." }, ],},{ \_id: "PROD003", name: "Drum Kit", category: "Percussion", brand: "BeatKing", price: 1200.5, stock: 5, features: ["5-Piece Kit", "Cymbals Included"], reviews: [],},{ \_id: "PROD004", name: "Ukulele", category: "String", brand: "AlohaTune", price: 89.99, stock: 30, features: ["Soprano Size", "Mahogany Body"], reviews: [{ user: "Alice", rating: 4, comment: "Cute and fun!" }],},{ \_id: "PROD005", name: "Bass Guitar", category: "String", brand: "BassPro", price: 550.0, stock: 10, features: ["4-String", "Active Pickups"], reviews: [],}];
```

Order Collection:

```js
[{ \_id: "ORDER001", customer_id: "CUST001", order_date: ISODate("2023-01-10T10:00:00Z"), items: [ { product_id: "PROD001", quantity: 1, unit_price: 499.99 }, { product_id: "PROD004", quantity: 2, unit_price: 89.99 }, ], status: "completed", total_amount: 679.97,},{ \_id: "ORDER002", customer_id: "CUST002", order_date: ISODate("2023-01-15T14:30:00Z"), items: [{ product_id: "PROD002", quantity: 1, unit_price: 799.0 }], status: "pending", total_amount: 799.0,},{ \_id: "ORDER003", customer_id: "CUST001", order_date: ISODate("2023-02-01T09:00:00Z"), items: [{ product_id: "PROD001", quantity: 1, unit_price: 499.99 }], status: "completed", total_amount: 499.99,},{ \_id: "ORDER004", customer_id: "CUST003", order_date: ISODate("2023-02-05T11:45:00Z"), items: [{ product_id: "PROD003", quantity: 1, unit_price: 1200.5 }], status: "completed", total_amount: 1200.5,},{ \_id: "ORDER005", customer_id: "CUST002", order_date: ISODate("2023-03-01T16:00:00Z"), items: [{ product_id: "PROD005", quantity: 1, unit_price: 550.0 }], status: "pending", total_amount: 550.0,}]
```

Write queries for the given questions using the above data.

1. Calculate Total Stock Value by Category.

```js
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            totalStockValue: {
                $sum: {
                    $multiply: ["$price", "$stock"],
                },
            },
        },
    },
    {
        $project: {
            _id: 0,
            category: "$_id",
            totalStockValue: 1,
        },
    },
]);
```

2. Count Products per Brand.

```js
db.products.aggregate([
    {
        $group: {
            _id: "$brand",
            productCount: { $sum: 1 },
        },
    },
    {
        $project: {
            _id: 0,
            brand: "$_id",
            productCount: 1,
        },
    },
]);
```

3. Find the Average Rating for Each Product.

```js
db.products.aggregate([
    {
        $unwind: "$reviews",
    },
    {
        $group: {
            _id: "$_id",
            name: { $first: "$name" },
            averageRating: {
                $avg: "$reviews.rating",
            },
        },
    },
    {
        $project: {
            _id: 0,
            productId: "$_id",
            name: 1,
            averageRating: 1,
        },
    },
]);
```

4. Calculate Total Sales for Each Product.

```js
db.orders.aggregate([
    {
        $unwind: "$items",
    },
    {
        $group: {
            _id: "$items.product_id",
            totalSales: {
                $sum: {
                    $multiply: ["$items.quantity", "$items.unit_price"],
                },
            },
        },
    },
    {
        $project: {
            _id: 0,
            productId: "$_id",
            totalSales: 1,
        },
    },
]);
```

5. Recalculate each order's total amount using $reduce.

```js
db.orders.aggregate([
    {
        $project: {
            _id: 1,
            customer_id: 1,
            storedTotal: "$total_amount",

            calculatedTotal: {
                $reduce: {
                    input: "$items",
                    initialValue: 0,
                    in: {
                        $add: [
                            "$$value",
                            {
                                $multiply: [
                                    "$$this.quantity",
                                    "$$this.unit_price",
                                ],
                            },
                        ],
                    },
                },
            },
        },
    },
]);
```

6. Find the total quantity of 'String' products sold.

```js
db.orders.aggregate([
    { $unwind: "$items" },
    {
        $lookup: {
            from: "products",
            localField: "items.product_id",
            foreignField: "_id",
            as: "productDoc",
        },
    },
    { $unwind: "$productDoc" },
    { $match: { "productDoc.category": "String" } },
    {
        $group: {
            _id: "$productDoc._id",
            name: { $first: "$productDoc.name" },
            totalQuantitySold: {
                $sum: "$items.quantity",
            },
        },
    },
    {
        $project: {
            _id: 0,
            productId: "$_id",
            name: 1,
            totalQuantitySold: 1,
        },
    },
]);
```

7. Find the average rating for each product that has received at least one review.

```js
db.products.aggregate([
    {
        $match: {
            "reviews.0": { $exists: true },
        },
    },
    {
        $unwind: "$reviews",
    },
    {
        $group: {
            _id: "$_id",
            name: { $first: "$name" },
            averageRating: {
                $avg: "$reviews.rating",
            },
        },
    },
    {
        $project: {
            _id: 0,
            productId: "$_id",
            name: 1,
            averageRating: 1,
        },
    },
]);
```

8. For each product, create a summary that includes its name and price, a simple list of the usernames who reviewed it, and a list of the order IDs in which it was sold.

```js
db.products.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "items.product_id",
            as: "orders",
        },
    },
    {
        $project: {
            _id: 0,
            name: 1,
            price: 1,

            reviewers: {
                $map: {
                    input: "$reviews",
                    as: "review",
                    in: "$$review.user",
                },
            },

            orderIds: {
                $map: {
                    input: "$orders",
                    as: "order",
                    in: "$$order._id",
                },
            },
        },
    },
]);
```

9. Retrieve a list of all orders, but instead of just showing product IDs in the items array, replace them with a more detailed object containing the product's name, brand, and category.

```js
db.orders.aggregate([
    {
        $unwind: "$items",
    },
    {
        $lookup: {
            from: "products",
            localField: "items.product_id",
            foreignField: "_id",
            as: "product",
        },
    },
    {
        $unwind: "$product",
    },
    {
        $project: {
            orderId: "$_id",
            customer_id: 1,
            order_date: 1,
            status: 1,
            total_amount: 1,

            item: {
                product: {
                    name: "$product.name",
                    brand: "$product.brand",
                    category: "$product.category",
                },
                quantity: "$items.quantity",
                unit_price: "$items.unit_price",
            },
        },
    },
    {
        $group: {
            _id: "$orderId",
            customer_id: { $first: "$customer_id" },
            order_date: { $first: "$order_date" },
            status: { $first: "$status" },
            total_amount: { $first: "$total_amount" },
            items: { $push: "$item" },
        },
    },
]);
```

10. Create a profile for each customer showing a list of products they have purchased. The list should not contain duplicates and should include the product name and category.

```js
db.orders.aggregate([
    {
        $unwind: "$items",
    },
    {
        $lookup: {
            from: "products",
            localField: "items.product_id",
            foreignField: "_id",
            as: "product",
        },
    },
    {
        $unwind: "$product",
    },
    {
        $group: {
            _id: {
                customer_id: "$customer_id",
                product_id: "$product._id",
            },
            productName: {
                $first: "$product.name",
            },
            category: {
                $first: "$product.category",
            },
        },
    },
    {
        $group: {
            _id: "$_id.customer_id",
            products: {
                $push: {
                    name: "$productName",
                    category: "$category",
                },
            },
        },
    },
    {
        $project: {
            _id: 0,
            customer_id: "$_id",
            products: 1,
        },
    },
]);
```
