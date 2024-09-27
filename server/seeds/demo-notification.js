
import Notification from "../models/notification.js"

export const notificationSeeder = async () => {
await Notification.bulkCreate([
  {
    parent_id: 1,  // Notification for parent1
    child_id: 1,   // Relating to child 1
    message: 'John completed a task',
    read: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
};
