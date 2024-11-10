const { ActivityLog, ActivityLogSchema } = require('./activityLog.model');
const { Document, DocumentSchema } = require('./document.model');
const { Parameter, ParameterSchema } = require('./parameter.model');
const { ParameterValue, ParameterValueSchema } = require('./parameterValue.model');
const { Permission, PermissionSchema} = require('./permission.model');
const { Role, RoleSchema} = require('./role.model');
const { Ticket, TicketSchema} = require('./ticket.model');
const { TicketCategories, TicketCategoriesSchema} = require('./ticketCategories.model');
const { TicketLogs, TicketLogsSchema} = require('./ticketLogs.model');
const { User, UserSchema} = require('./user.model');
const { Module, ModuleSchema} = require('./module.model');

function setupModels(sequelize) {
    //Initialize models
    Module.init(ModuleSchema, Module.config(sequelize));
    Permission.init(PermissionSchema, Permission.config(sequelize));
    Role.init(RoleSchema, Role.config(sequelize));
    Parameter.init(ParameterSchema, Parameter.config(sequelize));
    ParameterValue.init(ParameterValueSchema, ParameterValue.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
    Document.init(DocumentSchema, Document.config(sequelize));
    TicketCategories.init(TicketCategoriesSchema, TicketCategories.config(sequelize));
    Ticket.init(TicketSchema, Ticket.config(sequelize));
    TicketLogs.init(TicketLogsSchema, TicketLogs.config(sequelize));
    ActivityLog.init(ActivityLogSchema, ActivityLog.config(sequelize));
    
    //* Start Relationships *//

    //Parameters
    Parameter.hasMany(ParameterValue, { foreignKey: 'parameter_id' });
    ParameterValue.belongsTo(Parameter, { foreignKey: 'parameter_id' });

    //Users
    User.belongsTo(ParameterValue, { foreignKey: 'gender' })
    ParameterValue.hasMany(User, { foreignKey: 'gender' })

    User.belongsTo(ParameterValue, { foreignKey: 'document_type' });
    ParameterValue.hasMany(User, { foreignKey: 'document_type' });

    User.belongsTo(Role, { foreignKey: 'role_id' });
    Role.hasMany(User, { foreignKey: 'role_id' });

    //Documents
    Document.belongsTo(User, { foreignKey: 'responsible_id' });
    User.hasMany(Document, { foreignKey: 'responsible_id' });

    //TicketCategories
    TicketCategories.belongsTo(ParameterValue, { foreignKey: 'category_priority' });
    ParameterValue.hasMany(TicketCategories, { foreignKey: 'category_priority' });

    //Tickets
    Ticket.belongsTo(User, { foreignKey: 'client_id' });
    User.hasMany(Ticket, { foreignKey: 'client_id' });

    Ticket.belongsTo(User, { foreignKey: 'advisor_id' });
    User.hasMany(Ticket, { foreignKey: 'advisor_id' });

    Ticket.belongsTo(TicketCategories, { foreignKey: 'ticket_category_id' });
    TicketCategories.hasOne(Ticket, { foreignKey: 'ticket_category_id' });

    Ticket.belongsTo(ParameterValue, { foreignKey: 'ticket_status_id' });
    ParameterValue.hasOne(Ticket, { foreignKey: 'ticket_status_id' });
    
    //TicketLogs
    Ticket.hasMany(TicketLogs, { foreignKey: 'ticket_id' });
    TicketLogs.belongsTo(Ticket, { foreignKey: 'ticket_id' });

    TicketLogs.belongsTo(ParameterValue, { foreignKey: 'old_state' });
    ParameterValue.hasMany(TicketLogs, { foreignKey: 'old_state' });

    TicketLogs.belongsTo(ParameterValue, { foreignKey: 'new_state' });
    ParameterValue.hasMany(TicketLogs, { foreignKey: 'new_state' });
    
    User.belongsTo(TicketLogs, { foreignKey: 'advisor_id' });
    TicketLogs.hasOne(User, { foreignKey: 'advisor_id' });

    User.belongsTo(ActivityLog, { foreignKey: 'responsible_id' });
    ActivityLog.hasOne(User, { foreignKey: 'responsible_id' });
    //* End Relationships *//
}

module.exports = setupModels;