import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('GDA00255OT_DayanaReyes', 'usuario', '123456', {
    host: 'localhost',
    dialect: 'mssql',
    port: 1433
});