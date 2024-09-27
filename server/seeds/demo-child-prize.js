// seeders/xxxx-demo-user.js

import ChildPrize from "../models/child-prize.js"

export const childPrizeSeeder = async () => {
await ChildPrize.bulkCreate([
  {
    child_id: 1,  // Child 1 buys a prize
    prize_id: 1,  // Prize 1 is "New Toy"
    purchase_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
}
