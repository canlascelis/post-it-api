import DB from '../config/index.js';

const PeoplePost = DB.define('PeoplePost', 
// it will automatically populate the table in index.js associations
{}, { timestamps: false });

export default { PeoplePost };