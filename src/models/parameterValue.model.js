const { Model, DataTypes, Sequelize } = require('sequelize');

const PARAMETER_VALUE_TABLE = 'parameter_values';

class ParameterValue extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PARAMETER_VALUE_TABLE,
            modelName: 'ParameterValue',
            timestamps: true,
            paranoid: true
        }
    }
} 

const ParameterValueSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    parameter_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'parameter_id',
        references: {
            model: 'parameters',
            key: 'id'
        }
    },
    parent_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'parent_id'
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name',
        max: 255
    },
    description: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'description',
        max: 255
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'status',
        defaultValue: 1
    }
}

module.exports = { ParameterValue, ParameterValueSchema };