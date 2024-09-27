import sequelize from "../config/connection.js";

import User from './user.js';
import Child from './child.js';
import Chore from './chore.js';
import Prize from './prize.js';
import Child_Prize from './child-prize.js';
import Notification from './notification.js';

// Define relationships

// User ↔ Child: A User (Parent) can have many Children.
User.hasMany(Child, { foreignKey: 'parent_id' });
Child.belongsTo(User, { foreignKey: 'parent_id' });

// Child ↔ Chore: A Child can have many Chores.
Child.hasMany(Chore, { foreignKey: 'child_id' });
Chore.belongsTo(Child, { foreignKey: 'child_id' });

// Child ↔ Child_Prize ↔ Prize: A Child can have many Child_Prize records, which track purchased prizes. 
// A Prize can be linked to many Child_Prize records, representing how many times it has been purchased.
// A Child_Prize belongs to both a Child and a Prize
Child.hasMany(Child_Prize, { foreignKey: 'child_id' });
Child_Prize.belongsTo(Child, { foreignKey: 'child_id' });

// User ↔ Notification ↔ Child: A User (Parent) can have many Notifications (e.g., when a chore is completed or a prize is purchased).
// A Notification can reference both a User and a Child to indicate which child the notification is about.
Prize.hasMany(Child_Prize, { foreignKey: 'prize_id' });
Child_Prize.belongsTo(Prize, { foreignKey: 'prize_id' });

// User (Parent) ↔ Notification:
// Relationship: A Parent can receive multiple notifications. 
// Use case: Notifications are used to inform the parent about different events related to their child, such as chore completion or prize purchases.
User.hasMany(Notification, { foreignKey: 'parent_id' });
Notification.belongsTo(User, { foreignKey: 'parent_id' });

Child.hasMany(Notification, { foreignKey: 'child_id' });
Notification.belongsTo(Child, { foreignKey: 'child_id' });

export {
  sequelize,
  User,
  Child,
  Chore,
  Prize,
  Child_Prize,
  Notification
};
