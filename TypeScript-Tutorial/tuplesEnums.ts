// Tuple

// example for an RGB array that can only contain 3 numbers.
let color: [number, number, number] = [255, 46, 132];
// color = [46, 898, 43, 87] // not allowed since only allows 3 numbers

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// note: TypeScript allows you to push onto the tuple or pop off (its a limitation)

const badRes: HTTPResponse = [404, "Not Found"];

const responses: HTTPResponse[] = [[200, "OK"],[404, "Not Found"]];

// Enums
enum OrderStatus {   // assigns a default value (i.e. 0, 1, 2, 3 below.  You can change this by setting each order status to a different number i.e. DELIVERED = 43)
    PENDING,   //OrderStatus.PENDING = 0
    SHIPPED,  //OrderStatus.SHIPPED = 1
    DELIVERED,  //OrderStatus.DELIVERED = 2
    RETURNED  //OrderStatus.RETURNED = 3
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// instead of using the default values (0, 1, 2, 3), you can set each ArrowKey to a string instead....
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

