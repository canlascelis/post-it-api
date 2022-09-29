import { DataTypes } from "sequelize";
import DB from '../config/index.js';

const Comment = DB.define('Comment', {
    // FK in People table
    commentID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.INTEGER
    },
    commentContent: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: false
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, { timestamps: true });

export default { Comment };