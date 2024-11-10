const { Model, DataTypes, Sequelize } = require('sequelize');

const DOCUMENT_TABLE = 'documents';

class Document extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: DOCUMENT_TABLE,
            modelName: 'Document',
            timestamps: true,
            paranoid: true
        }
    }
} 

const DocumentSchema = {
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
    responsible_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'responsible_id',
        references: {
            model: 'users',
            key: 'id'
        }
    },
    url: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'url',
        max: 1000
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'status',
        defaultValue: 1
    }
}
  
module.exports = { Document, DocumentSchema };