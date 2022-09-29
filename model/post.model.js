import { DataTypes } from "sequelize";
import DB from '../config/index.js';

const Posts = DB.define('Posts', {
    // FK in People table
    postID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    postTitle: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    postContent: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null
    },
    postLikes: {
        type: DataTypes.INTEGER,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, { timestamps: true });

export default { Posts };