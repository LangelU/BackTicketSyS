const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

class User extends Model {
    static config(sequelize) { 
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: true,
            paranoid: true
        }
    }
} 

const UserSchema = {
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
    last_name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name',
        max: 255
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'email',
        max: 255
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'password',
        max: 255
    },
    role_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'role_id',
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    document_type: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'document_type',
        references: {
            model: 'parameter_values',
            key: 'id'
        }
    },
    document_number: {
        allowNull: false,
        type: DataTypes.BIGINT,
        field: 'document_number'
    },
    birthdate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'birthdate'
    },
    gender: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'gender',
        references: {
            model: 'parameter_values',
            key: 'id'
        }
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'address',
        max: 255
    },
    phone: {
        allowNull: false,
        type: DataTypes.BIGINT,
        field: 'phone'
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
  
module.exports = { User, UserSchema };