const specialtiesModel = (sequelize, DataTypes) => {
  const specialties = sequelize.define('Specialty', {
    name: DataTypes.STRING,
  });
  return specialties;
};

module.exports = specialtiesModel;
