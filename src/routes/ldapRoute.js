const router = require('express').Router();
const { ldapFinder } = require('../controllers');

// router.get('/', ldap.searchDummy);
router.get('/', ldapFinder.searchTest);
// router.get('/dummy', ldapFinder.searchDummy);
router.get('/:alias', ldapFinder.searchAlias);

module.exports = router;
