// const res = require('express/lib/response');
const ldap = require('ldapjs');
// const https = require('https')

// const options = {

// }

const client = ldap.createClient({
  url: 'ldap://ldap.slb.com/o=slb,c=an'
});

const searchAlias = async (req, res) => {
  try {
    //anonymouse binding
    client.bind('', '', (error) => {
      if (error) {
        console.log(error);
      } else {
        const alias = req.params.alias;
        console.log('connection search dummy Success...');

        // search start here
        let opts = {
          filter: `alias=${alias}`,
          scope: 'sub',
          attributes: ['alias', 'mail', 'manager', 'employeenumber']
        };

        client.search('o=slb,c=an', opts, (err, result) => {
          if (err) {
            console.log('Error in search ' + err);
          } else {
            result.on('searchEntry', function (entry) {
              console.log('entry: ' + JSON.stringify(entry.object));
              res.send({
                status: true,
                message: 'user found : ',
                data: entry.object
              });
            });

            result.on('searchReference', function (referral) {
              console.log('referral: ' + referral.uris.join());
            });
            result.on('error', function (err) {
              console.error('error: ' + err.message);
            });
            result.on('end', function (e) {
              console.log('status: ' + e.status);
            });
          }
        });
        //
      }
    });
  } catch (error) {
    console.log('error return:', error.message);
    res.status(code).json({
      status: false,
      message,
      data
    });
  }
};

const searchTest = async (req, res) => {
  try {
    res.send({
      status: true,
      message: 'Get user List Success'
      //   data: results
    });
  } catch (error) {
    console.log('error return:', error.message);
    res.status(code).json({
      status: false,
      message,
      data
    });
  }
};

module.exports = {
  searchAlias,
  searchTest
};
