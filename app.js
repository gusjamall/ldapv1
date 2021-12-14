const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//set routes here
const menuRoute = require('./src/routes/menuRoute');
const subMenuRoute = require('./src/routes/subMenuRoute');
//ldap router
const ldapRoute = require('./src/routes/ldapRoute');
//use route

app.use('/menu', menuRoute);
app.use('/subMenu', subMenuRoute);
//router for ldap
app.use('/ldap', ldapRoute);

app.listen(port, () => {
  console.log(`JDashboard Api.v1 listening at port: ${port}
  please use http://localhost:5000`);
});
