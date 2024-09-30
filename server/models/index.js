import sequelize from '../config/connection.js';
import Parent from './parent.js';
import Child from './child.js';
import Chore from './chore.js';

// Initialize the models
// const ParentModel = Parent(sequelize);
// const ChildModel = Child(sequelize);
// const ChoreModel = Chore(sequelize);

// Define relationships
Parent.hasMany(Child, {
  foreignKey: 'parent_id',
  sourceKey: 'id',
});

Child.belongsTo(Parent, {
  foreignKey: 'parent_id',
});

Parent.hasMany(Chore, {
  foreignKey: 'parent_id',
  sourceKey: 'id',
});

Child.hasMany(Chore, {
  foreignKey: 'child_id',
  sourceKey: 'id',
});

// Export models
export { Parent, Child, Chore, sequelize };


// how to get tasks of specific child
// SELECT 
//     c.id AS chore_id,
//     c.name AS chore_name,
//     c.description AS chore_description,
//     c.status AS chore_status,
//     c."createdAt" AS chore_created_at,
//     c."updatedAt" AS chore_updated_at,
//     ch.first_name AS child_first_name,
//     ch.last_name AS child_last_name
// FROM 
//     chores c
// JOIN 
//     children ch ON c.child_id = ch.id
// WHERE 
//     ch.id = <specific_child_id>;  -- Replace <specific_child_id> with the actual child's ID
