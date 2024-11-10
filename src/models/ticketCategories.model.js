const { Model, DataTypes, Sequelize } = require('sequelize');

const TICKET_CATEGORIES_TABLE = 'ticket_categories';

class TicketCategories extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TICKET_CATEGORIES_TABLE,
            modelName: 'TicketCategories',
            timestamps: true,
            paranoid: true
        }
    }
} 

const TicketCategoriesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    prefix: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'prefix',
        max: 5
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
    category_priority: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'category_priority',
        references: {
            model: 'parameter_values',
            key: 'id'
        }
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'status',
        defaultValue: 1
    }
}

module.exports = { TicketCategories, TicketCategoriesSchema };