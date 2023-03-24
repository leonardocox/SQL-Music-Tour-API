"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    static associate({ band, event }) {
      //define association here
    }
  }

  meet_greet.init(
    {
      meet_greet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      band_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "MeetGreet",
      tableName: "meet_greet",
      timestamps: false,
    }
  );
  return meet_greet;
};
