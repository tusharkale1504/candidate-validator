import { Sequelize } from 'sequelize';
import { config } from '../config/db';

const sequelize = new Sequelize(
  config.database.database || '',
  config.database.user || '',
  config.database.password,
  {
    host: config.database.host,
    dialect: 'mysql',
  }
);


const checkDatabaseConnection = async () => {
  try {
    await sequelize.authenticate(); 
    console.log('Database connected successfully');
    return { connected: true, message: 'Database connected successfully' };
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return { connected: false, message: 'Database connection failed', error };
  }
};

export { sequelize, checkDatabaseConnection };
