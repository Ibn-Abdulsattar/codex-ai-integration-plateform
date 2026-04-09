import {sequelize} from "../config/openai.js";
import {Model, DataTypes} from "sequelize";

class Thread extends Model{};
class Message extends Model{};

Message.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    role:{
        type: DataTypes.ENUM("user", "assistant"),
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: "Message",
    tableName: "messages",
    underscored:true
})

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
    messages:{
        type: DataTypes.ARRAY(Message),
        allowNull: false,
        defaultValue: []
    }
},{
    sequelize,
    modelName: "Thread",
    tableName: "threads",
    underscored:true
})