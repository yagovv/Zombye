const express = require('express');
const router  = express.Router();

const crudRoutes = require('./crud.controller');
const authRoutes = require('./auth.controller');
const campRoutes  = require('./extendedCamp.controller');
const shopRoutes = require('./extendedShop.controller');
const itemRoutes = require('./extendedItem.controller');
const purchaseRoutes = require('./extendedPurchase.controller');
const messageRoutes = require('./extendedMessage.controller');

const User = require('../../models/User');
const Camp = require("../../models/Camp");
const Item = require("../../models/Item");
const Shop = require("../../models/Shop");

router.use('/auth', authRoutes);
router.use('/camps', campRoutes);
router.use('/shops', shopRoutes);
router.use('/items', itemRoutes);
router.use('/purchases', purchaseRoutes);
router.use('/messages', messageRoutes);

module.exports = router;