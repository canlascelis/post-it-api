import postModel from "./post.model.js";
import commentModel from "./comment.model.js";
import peopleModel from "./people.model.js";
import peoplePostsModel from "./peoplePosts.model.js";
// import userModel from "./user.model.js";
import sequelize from "../config/index.js";

// Associations
/* peopleModel.People.hasMany(postModel.Posts, {
    foreignKey: 'peopleID',
    onDelete: 'SET NULL', 
    onUpdate: 'CASCADE'
}) */
peopleModel.People.belongsToMany(postModel.Posts, { 
    through: peoplePostsModel.PeoplePost
})
postModel.Posts.belongsToMany(peopleModel.People, {
    through: peoplePostsModel.PeoplePost
})

// FIXME: force: true is not recommended in prod
await sequelize.sync({ alter: true })
    .then(() => {
        console.log('All models were synced!');
    })
    .catch(err => {
        console.log(err);
        console.error("error syncing");
    })

export default { postModel, commentModel }