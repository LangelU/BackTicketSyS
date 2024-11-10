const { Model, DataTypes, Sequelize } = require('sequelize');

const PERMISSION_TABLE = 'permissions';

class Permission extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERMISSION_TABLE,
            modelName: 'Permission',
            timestamps: true,
            paranoid: true
        }
    }
} 

const PermissionSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    associate_to: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'associate_to',
        max: 255
    },
    associate_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
        field: 'associate_id'
    },
    module_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'module',
        references: {
            model: 'modules',
            key: 'id'
        }
    },
    actions: {
        allowNull: false,
        type: DataTypes.JSON,
        field: 'actions'
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'status',
        defaultValue: 1
    }
}
  
module.exports = { Permission, PermissionSchema };