const crud = require("./crud.controller");
const Shop = require("../../models/Shop");
const User = require("../../models/User");
const Camp = require("../../models/Camp");
const router = crud(Shop);

router.get("/list/camp/:id", (req, res) => {
  Shop.find({ camp: req.params.id }).then(shops => {
    return res.status(200).json(shops);
  });
});
router.get("/list", (req, res) => {
  Shop.find({ owner: req.user._id }).then(shops => {
    return res.status(200).json(shops);
  });
});

router.get("/:id", (req, res, next) => {
  Shop.findById(req.params.id)
    .populate("owner")
    .then(object => res.json(object))
    .catch(e => next(e));
});
module.exports = router;
