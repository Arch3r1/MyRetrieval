/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('relation', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      knowid: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      r_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      auto_weight: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      confidence: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      add_time: {
        type: DataTypes.DATE,
        allowNull: true
      },
      update_time: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      tableName: 'relation',
      timestamps:false,
      paranoid:true,
      underscored:false,
      version:false
    });
  };