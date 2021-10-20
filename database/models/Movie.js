module.exports = (sequelize, dataTypes) => {
    let alias = "Movie"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        title: {
            type: dataTypes.STRING(500),
            notNull: true,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
            unsigned: true,
            notNull: true,
        },
        awards: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            notNull: true,
            default: 0,
        },
        release_date: {
            type: dataTypes.DATE,
            notNull: true,
        },
        length: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            default: null,
        },
        genre_id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            default: null,
        }
    }
    let config = {
        tableName: "movies",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    }

    const Movie = sequelize.define(alias,cols,config)

    Movie.associate = function(models){
        Movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: "genre_id",
        })
        Movie.belongsToMany(models.Actor, {
            as: "actors",
            through: "Actor_Movie",
            foreignKey: "movie_id",
            otherKey: "actor_id"
        })
    }

    return Movie
}