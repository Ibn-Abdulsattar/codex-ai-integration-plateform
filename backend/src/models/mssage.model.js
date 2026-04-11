import {sequelize} from "../config/db.js";
import { Model, DataTypes } from "sequelize";
import Thread from "./thread.model.js";

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    threadId: {
      type: DataTypes.UUID,
      references: {
        model: "threads",
        key: "id",
      },
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "assistant"),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Message",
    tableName: "messages",
    underscored: true,
  },
);

Thread.hasMany(Message, {foreignKey: "threadId", as: "messages", onDelete: "CASCADE"})
Message.belongsTo(Thread, {foreignKey: "threadId", as: "thread"})

export default Message;
