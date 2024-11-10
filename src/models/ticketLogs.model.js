const { Model, DataTypes, Sequelize } = require('sequelize');

const TICKET_LOGS_TABLE = 'ticket_logs';

class TicketLogs extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TICKET_LOGS_TABLE,
            modelName: 'TicketLogs',
            timestamps: true,
            paranoid: true
        }
    }
} 

const TicketLogsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    ticket_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'ticket_id',
        references: {
            model: 'tickets',
            key: 'id'
        }
    },
    old_state: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'old_state',
        references: {
            model: 'parameter_values',
            key: 'id'
        }
    },
    new_state: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'new_state',
        references: {
            model: 'parameter_values',
            key: 'id'
        }
    },
    observation: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'observation',
        max: 3000
    },
    advisor_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'advisor_id',
        references: {
            model: 'users',
            key: 'id'
        }
    },
    additional_information: {
        allowNull: true,
        type: DataTypes.JSON,
        field: 'additional_information',
        max: 3000
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'status',
        defaultValue: 1
    }
}

module.exports = { TicketLogs, TicketLogsSchema };