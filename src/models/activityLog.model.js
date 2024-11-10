const { Model, DataTypes, Sequelize } = require('sequelize');

const ACTIVITY_LOG_TABLE = 'activity_log';

class ActivityLog extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ACTIVITY_LOG_TABLE,
            modelName: 'ActivityLog',
            timestamps: true,
            paranoid: true
        }
    }
} 

const ActivityLogSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    action: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'action',
        max: 255
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'description',
        max: 1000
    },
    responsible_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'responsible_id',
        references: {
            model: 'users',
            key: 'id'
        }
    },
    additional_data: {
        allowNull: true,
        type: DataTypes.JSON,
        field: 'additional_data',
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'status',
        defaultValue: 1
    }
}
  
module.exports = { ActivityLog, ActivityLogSchema };