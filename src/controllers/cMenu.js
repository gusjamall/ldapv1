const config = require('../configs/database');
const mysql = require('mysql2');
const pool = mysql.createPool(config);

pool.on('error', (err) => console.err(err));

module.exports = {
  //get main menu list
  getMenu(req, res) {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        `SELECT * FROM jsdportal_dev.core_link;`,
        (error, results) => {
          if (error) throw error;
          res.send({
            status: true,
            message: 'Get Menu List Success',
            data: results
          });
        }
      );
      connection.release();
    });
  },
  //get main menu list by ID
  getMenuByID(req, res) {
    let id = req.params.id;
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        `SELECT * FROM jsdportal_dev.core_link WHERE id_menu= ?`,
        [id],
        (error, results) => {
          if (error) throw error;

          if (results.length === 0) {
            console.log('result kosong');
          }

          res.send({
            status: true,
            message: 'Get Menu List by ID Success',
            data: results
          });
        }
      );
      connection.release();
    });
  }
};
