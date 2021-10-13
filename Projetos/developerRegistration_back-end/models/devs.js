const devsModel = (sequelize, DataTypes) => {
  const devs = sequelize.define('Dev', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    cell_phone:DataTypes.STRING,
    address: DataTypes.STRING,
    zip_code: DataTypes.STRING,
  });
  return devs;
};

module.exports = devsModel;