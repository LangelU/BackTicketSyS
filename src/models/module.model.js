const { Model, DataTypes, Sequelize } = require('sequelize');

const MODULE_TABLE = 'modules';

class Module extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: MODULE_TABLE,
            modelName: 'Module',
            timestamps: true,
            paranoid: true
        }
    }
} 

const ModuleSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    reference: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'reference',
        max: 255
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name',
        max: 255
    },
    parent_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'parent_id'
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'status',
        defaultValue: 1
    }
}
  
module.exports = { Module, ModuleSchema };