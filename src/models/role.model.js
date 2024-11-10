const { Model, DataTypes, Sequelize } = require('sequelize');

const ROLE_TABLE = 'roles';

class Role extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROLE_TABLE,
            modelName: 'Role',
            timestamps: true,
            paranoid: true
        }
    }
} 

const RoleSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name',
        max: 255
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'status',
        defaultValue: 1
    }
}
  
module.exports = { Role, RoleSchema };