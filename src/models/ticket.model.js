const { Model, DataTypes, Sequelize } = require('sequelize');

const TICKETS_TABLE = 'tickets';

class Ticket extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TICKETS_TABLE,
            modelName: 'Ticket',
            timestamps: true,
            paranoid: true
        }
    }
} 

const TicketSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    ticket_code: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'ticket_code',
        max: 255
    },
    client_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'client_id',
        references: {
            model: 'users',
            key: 'id'
        }
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
    ticket_category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'ticket_category_id',
        references: {
            model: 'ticket_categories',
            key: 'id'
        }
    },
    subject: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'subject',
        max: 1000
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'description',
        max: 3000
    },
    response: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'response',
        max: 3000
    },
    ticket_status_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'ticket_status_id',
        references: {
            model: 'parameter_values',
            key: 'id'
        }
    },
    additional_data: {
        allowNull: true,
        type: DataTypes.JSON,
        field: 'additional_data'
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'status',
        defaultValue: 1
    }
}

module.exports = { Ticket, TicketSchema };