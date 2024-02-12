'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Standing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Standing.init({
    ClubName: DataTypes.STRING,
    played: DataTypes.INTEGER,
    won: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    goalsFor: DataTypes.INTEGER,
    goalsAgaints: DataTypes.INTEGER,
    point: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Standing',
  });
  return Standing;
};