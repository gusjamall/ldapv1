const router = require('express').Router();
const { subMenu } = require('../controllers');

router.get('/', subMenu.getSubMenu);

router.get('/:id', subMenu.getSubMenuByID);

module.exports = router;
