import { Sequelize } from "sequelize";

const sequelize = new Sequelize('post_it', 'postgres', 'celis', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 10
    },
    logging: false
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully. \r\n');
} catch (error) {
    console.error(error);
    sequelize.close();
}
export default sequelize;