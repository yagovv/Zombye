const crud = require("./crud.controller");
const Camp = require("../../models/Camp");
const User = require("../../models/User");
const router = crud(Camp);

router.get("/list", (req, res) => {
  Camp.find().then(camps => {
    return res.status(200).json(camps);
  });
});

router.post("/closests", (req, res) => {
  Camp.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [req.body.longitude, req.body.latitude]
        },
        $maxDistance: req.body.maxDistance,
        $minDistance: 0
      }
    }
  }).then(camps => {
    return res.json(camps);
  });
});
router.post("/closest", (req, res) => {
  Camp.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [req.body.longitude, req.body.latitude]
        },
        $maxDistance: req.body.maxDistance,
        $minDistance: 0
      }
    }
  }).then(camp => {
    return res.json(camp);
  });
});
router.get("/:id", (req, res, next) => {
  Camp.findById(req.params.id)
    .populate("chief")
    .then(object => res.json(object))
    .catch(e => next(e));
});
module.exports = router;
