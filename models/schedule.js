"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      Schedule.hasMany(models.User, { foreignKey: "userId" })
    }
  }
  Schedule.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "User is required",
          },
          notEmpty: {
            msg: "User is required",
          },
        },
      },
      jobSchedule: {
        allowNull: false,
        type: Sequelize.DATE,
        validate: {
          is: {
            args: /(\[Tt])(\[Uu])(\[Ee])/,
            msg: "Schedule must be Tuesday",
          },
          isDate: {
            msg: "Invalid date format",
          },
          notNull: {
            msg: "User is required",
          },
          notEmpty: {
            msg: "User is required",
          },
        },
      },
      job: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  )
  return Schedule
}
