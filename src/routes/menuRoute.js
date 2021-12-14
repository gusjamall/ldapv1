const router = require('express').Router();
const { menuList } = require('../controllers');

//get main Menu List
router.get('/', menuList.getMenu);

//get main menu list by ID
router.get('/:id', menuList.getMenuByID);

module.exports = router;
