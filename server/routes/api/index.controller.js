const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth.controller');
const crudRoutes  = require('./crud.controller');

const User = require('../../models/User');
const Camp = require("../../models/Camp");
const Item = require("../../models/Item");
const Shop = require("../../models/Shop");

router.use('/auth', authRoutes);
router.use('/camps', crudRoutes(Camp));

module.exports = router;