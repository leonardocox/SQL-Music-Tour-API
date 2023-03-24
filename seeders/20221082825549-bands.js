"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("bands", [
      {
        name: "Luke Bryan",
        genre: "Country",
        start_time: "12:00:00",
        end_time: "15:00:00",
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelet("bands", null, {});
  },
};
