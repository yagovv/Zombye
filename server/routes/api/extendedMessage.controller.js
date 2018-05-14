const crud = require("./crud.controller");
const Item = require("../../models/Item");
const User = require("../../models/User");
const Shop = require("../../models/Shop");
const Message = require("../../models/Message");
const router = crud(Message);

router.get("/list", (req, res, next) => {
  Message.find({recipient: req.user._id})
    .then(object => res.json(object))
    .catch(e => next(e));
});

// router.get("/shop/:id", (req, res, next) => {
//   Message.find({shop: req.params.id})
//     .then(object => res.json(object))
//     .catch(e => next(e));
// });
module.exports = router;
