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
router.post("/newItem", (req, res, next) => {
  const obj = _.pick(req.body.item, fields);
  Item.create(obj)
    .then(object => {
      // Shop.findByIdAndUpdate(req.body.shopId, )
      res.json(object);
    })
    .catch(e => next(e));

});
module.exports = router;
