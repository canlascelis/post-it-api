import { DataTypes } from "sequelize";
import DB from '../config/index.js';

const People = DB.define('People', {
    // FK in People table
    peopleID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    isAnonymous: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, { timestamps: true });

export default { People };