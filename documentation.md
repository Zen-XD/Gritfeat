# Create documentation on Map-Reduce and the Input-Output model in MongoDB.

## Map-Reduce

Map-Reduce is a data-processing model that divides processing into two major stages:

1. Map — reads documents and emits intermediate key-value pairs.
2. Reduce — combines values associated with the same key to produce a final result.

Map-Reduce is a programming model originally designed for processing large datasets by splitting computation into smaller operations.

For example, suppose a collection contains sales:

```js
[
    { product: "Laptop", quantity: 2, price: 1000 },
    { product: "Phone", quantity: 3, price: 500 },
    { product: "Laptop", quantity: 1, price: 1000 },
];
```

To calculate the total quantity sold for each product.

```js
[
    { _id: "Laptop", value: 3 },
    { _id: "Phone", value: 3 },
];
```

Map-Reduce accomplishes this by first mapping every document to a key-value pair and then reducing values that have the same key.

### Map

The map function is executed for each document in the input collection.

Its responsibility is to extract relevant information and emit a key-value pair.

Example:

```js
function () {
    emit(this.product, this.quantity);
}

{
    product: "Laptop",
    quantity: 2
}
```

the map function produces:

"Laptop" -> 2

For another document:

```js
{
    product: "Laptop",
    quantity: 1
}
```

it produces:

"Laptop" -> 1

The intermediate output therefore becomes:

Laptop -> 2
Laptop -> 1
Phone -> 3

### Reduce

The reduce function receives a key and an array of values associated with that key.

Example:

```js
function (key, values) {
    return Array.sum(values);
}
```

For:

Laptop -> [2, 1]

the reduce function calculates:

2 + 1 = 3

Therefore:

Laptop -> 3

For:

Phone -> [3]

the result is:

Phone -> 3

## Input-Output model in MongoDB

The Input-Output model describes the flow of data between an application, MongoDB, and persistent storage.

For example, when an application executes:

```js
db.users.find({ age: { $gt: 18 } });
```

the application provides a query as input.

MongoDB processes the query against the collection and sends matching documents back as output.

### Input

Input refers to the information supplied to MongoDB for processing.

```js
db.users.insertOne({
    name: "Alice",
    age: 21,
});

db.users.find({ age: { $gt: 18 } });

db.users.updateOne({ name: "Alice" }, { $set: { age: 22 } });

db.users.deleteOne({ name: "Alice" });

db.sales.aggregate([
    { $match: { category: "Electronics" } },
    { $group: { _id: "$product", total: { $sum: "$quantity" } } },
]);
```

### Processing

Once MongoDB receives an operation, the database engine processes it.

### Output

Output is the information MongoDB returns after processing an operation.

Different operations produce different outputs such as,

Find

```js
db.users.find({ age: 20 });
```

Output:

```js
[
    {
        _id: ObjectId("..."),
        name: "Alice",
        age: 20,
    },
];
```

Insert

```js
db.users.insertOne({
    name: "Bob",
    age: 25,
});
```

The operation returns information such as the inserted document's identifier.

Update

```js
db.users.updateOne({ name: "Bob" }, { $set: { age: 26 } });
```

The result contains information about the operation, such as how many documents matched and were modified.

Delete

```js
db.users.deleteOne({
    name: "Bob",
});
```

The result indicates how many documents were deleted.
