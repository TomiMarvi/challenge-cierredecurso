module.exports = (sequelize, dataTypes) => {
    let alias = "User"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name: {
            type: dataTypes.STRING(255),
            notNull: true,
        },
        email: {
            type: dataTypes.STRING(255),
            notNull: true,
        },
        password: {
            type: dataTypes.STRING(255),
            notNull: true,
        },
        admin: {
            type: dataTypes.BOOLEAN(),
            notNull: true,
        },
        remember_token: {
            type: dataTypes.STRING(100),
            defaultValue: null,
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config)

    return User
}