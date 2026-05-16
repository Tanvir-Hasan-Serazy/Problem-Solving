function recoverOrder(order: number[], friends: number[]): number[] {
  const friendSet = new Set<number>(friends);

  return order.filter((item) => friendSet.has(item));
}

// Using set and for each loop
// function recoverOrder(order: number[], friends: number[]): number[] {
//   let ordreSet = new Set(order);
//   let friendSet = new Set(friends);
//   let finishing_Order: number[] = [];

//   ordreSet.forEach((e) => {
//     if (friendSet.has(e)) {
//       finishing_Order.push(e);
//     }
//   });
//   return finishing_Order;
// }

const order = [1, 4, 5, 3, 2];
const friends = [2, 5];

console.log(recoverOrder(order, friends));
