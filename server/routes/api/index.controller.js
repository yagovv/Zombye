const express = require('express');
const router  = express.Router();

const crudRoutes = require('./crud.controller');
const authRoutes = require('./auth.controller');
const campRoutes  = require('./extendedCamp.controller');
const shopRoutes = require('./extendedShop.controller');
const itemRoutes = require('./extendedItem.controller');

const User = require('../../models/User');
const Camp = require("../../models/Camp");
const Item = require("../../models/Item");
const Shop = require("../../models/Shop");

router.use('/auth', authRoutes);
router.use('/camps', campRoutes);
router.use('/shops', shopRoutes);
router.use('/items', itemRoutes);

module.exports = router;