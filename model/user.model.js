import { DataTypes } from "sequelize";
import DB from '../config/index.js';

const Users = DB.define('Users', {
    userID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR,
        allowNull: false
    }
},
    { freezeTableName: true, tableName: 'Users' });

export default { Users };