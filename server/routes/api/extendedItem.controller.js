const crud = require("./crud.controller");
const Item = require("../../models/Item");
const User = require("../../models/User");
const Shop = require("../../models/Shop");
const router = crud(Item);

router.get("/:id", (req, res, next) => {
  Item.findById(req.params.id)
    .then(object => res.json(object))
    .catch(e => next(e));
});

router.get("/shop/:id", (req, res, next) => {
  Item.find({shop: req.params.id})
    .then(object => res.json(object))
    .catch(e => next(e));
});
module.exports = router;
