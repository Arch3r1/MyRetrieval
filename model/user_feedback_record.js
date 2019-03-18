/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user_feedback_record', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      knowid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'knowledge',
          key: 'knowid'
        }
      },
      r_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      uid: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      feedback: {
        type: DataTypes.ENUM('0','1'),
        allowNull: true,
        defaultValue: '1'
      },
      add_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      update_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
    }, {
      tableName: 'user_feedback_record',
      timestamps:false,
      paranoid:true,
      underscored:false,
      version:false
    });
  };
  