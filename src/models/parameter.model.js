const { Model, DataTypes, Sequelize } = require('sequelize');

const PARAMETER_TABLE = 'parameters';

class Parameter extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PARAMETER_TABLE,
            modelName: 'Parameter',
            timestamps: true,
            paranoid: true
        }
    }
} 

const ParameterSchema = {
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
    description: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'description',
        max: 255
    },
    editable: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'editable',
        defaultValue: 1
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'status',
        defaultValue: 1
    }
}

module.exports = { Parameter, ParameterSchema };