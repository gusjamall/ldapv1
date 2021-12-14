const config = require('../configs/database');
const mysql = require('mysql2');
const pool = mysql.createPool(config);

pool.on('error', (err) => console.err(err));

module.exports = {
  //get main menu list
  getSubMenu(req, res) {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        `SELECT * FROM jsdportal_dev.core_sublink;`,
        (error, results) => {
          if (error) throw error;
          res.send({
            success: true,
            message: 'Get Menu List Success',
            data: results
          });
        }
      );
      connection.release();
    });
  },
  //get main menu list by ID
  getSubMenuByID(req, res) {
    let id = req.params.id;
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        `SELECT * FROM jsdportal_dev.core_sublink WHERE id_submenu=${id};`,
        (error, results) => {
          if (error) throw error;
          res.send({
            success: true,
            message: 'Get Menu List by ID Success',
            data: results
          });
        }
      );
      connection.release();
    });
  }
};
