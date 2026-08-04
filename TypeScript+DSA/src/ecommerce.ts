export type OrderStatus = "pending" | "shipped" | "delivered";

export interface User {
    readonly id: string;
    name: string;
    email: string;
    phoneNumber?: string;
}

export interface Product {
    readonly id: string;
    title: string;
    price: number;
    description?: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface OrderDetails {
    readonly orderId: string;
    user: User;
    items: CartItem[];
    status: OrderStatus;
    shippingCoordinates?: [number, number];
}

export type Order = OrderDetails & { createdAt: Date };
