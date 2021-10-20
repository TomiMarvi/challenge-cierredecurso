module.exports = (sequelize, dataTypes) => {
    let alias = "Actor"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            notNull: true,
        },
        last_name: {
            type: dataTypes.STRING(100),
            notNull: true,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
            default: null,
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            default: null,
        }
    }
    let config = {
        tableName: "actors",
        timestamps: false
    }

    const Actor = sequelize.define(alias,cols,config)

    Actor.associate = function(models){
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: "Actor_Movie",
            foreignKey: "actor_id",
            otherKey: "movie_id"
        })
    }

    return Actor
}