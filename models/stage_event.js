"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class stage_events extends Model {
    static associate(models) {
      // define association here
    }
  }
  stage_events.init(
    {
      stage_events_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      stage_id: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "stage_event",
      tableName: "stage_events",
      timestamps: false,
    }
  );
  return stage_events;
};
