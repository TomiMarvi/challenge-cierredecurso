module.exports = (sequelize, dataTypes) => {
    let alias = "Genre"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name: {
            type: dataTypes.STRING(100),
            notNull: true,
        },
        ranking: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            notNull: true,
        },
        active: {
            type: dataTypes.BOOLEAN(),
            notNull: true,
            defaultValue: 1,
        }
    }
    let config = {
        tableName: "genres",
        timestamps: false
    }

    const Genre = sequelize.define(alias,cols,config)

    Genre.associate = function(models){
        Genre.hasMany(models.Movie, {
            as: "movies",
            foreignKey: "genre_id"
        })
    }

    return Genre
}