import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../plugins/sequelize";
 
export class Candidate extends Model {}

Candidate.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    mobileNo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 15],
      },
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 0,
      },
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true, // adds createdAt and updatedAt
  }
);