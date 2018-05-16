const crud = require("./crud.controller");
const User = require("../../models/User");
const Chat = require("../../models/Chat");
const router = crud(Chat);

router.get("/list", (req, res, next) => {
  Chat.find({
      users: req.user._id
    }).populate('users')
    .then(chat => res.json(chat))
    .catch(e => next(e));
});
router.get("/:id", (req, res, next) => {
  Chat.findById(req.params.id)
    .then(chat => res.json(chat))
    .catch(e => next(e));
});


module.exports = router;