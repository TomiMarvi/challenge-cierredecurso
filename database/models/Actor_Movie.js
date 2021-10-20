module.exports = (sequelize, dataTypes) => {
    let alias = "Actor_Movie"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        actor_id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            notNull: true,
        },
        movie_id: {
            type: dataTypes.INTEGER(10),
            unsigned: true,
            notNull: true,
        }
    }
    let config = {
        tableName: "actor_movie",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    }

    const Actor_Movie = sequelize.define(alias,cols,config)

    return Actor_Movie
}