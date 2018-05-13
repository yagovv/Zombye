const crud = require("./crud.controller");
const Camp = require("../../models/Camp");
const User = require("../../models/User");
const router = crud(Camp);

router.get("/list", (req, res) => {
  Camp.find()
    .populate("chief")
    .then(camps => {
      return res.status(200).json(camps)
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
module.exports = router;
