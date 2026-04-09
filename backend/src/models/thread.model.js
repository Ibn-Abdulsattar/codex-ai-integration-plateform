import {sequelize} from "../config/db.js";
import {Model, DataTypes} from "sequelize";

class Thread extends Model{};

Thread.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "New Chat"
    },
},{
    sequelize,
    modelName: "Thread",
    tableName: "threads",
    underscored:true
});

export default Thread;