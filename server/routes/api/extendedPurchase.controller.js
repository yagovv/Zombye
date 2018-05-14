const crud = require("./crud.controller");
const Camp = require("../../models/Camp");
const User = require("../../models/User");
const Purchase = require("../../models/Purchase");
const Message = require("../../models/Message");
const router = crud(Camp);

router.post("/item", (req, res) => {
  console.log(req.body);
  //Restar balance al comprador
  let newBuyerBalance = req.body.buyer.balance - req.body.price;
  let newSellerBalance = req.body.seller.balance + req.body.price;
  let newPurchase = {
    buyer: req.body.buyer._id,
    seller: req.body.seller._id,
    concept: req.body.concept,
    price: req.body.price
  }
  let messageToBuyer = {
    subject: `You purchased ${req.body.concept}`,
    content: `Hello, you have successfully purchased ${req.body.concept}, please pick it up ASAP`, 
    sender: req.body.seller._id, 
    recipient: req.body.buyer._id
  }
  let messageToSeller = {
    subject: `You sold ${req.body.concept}`,
    content: `Hello, you have successfully sold ${req.body.concept}, get it ready for your customer please`, 
    sender: req.body.buyer._id, 
    recipient: req.body.seller._id
  }
  //Modificar balances
  
  Promise.all([
    User.findByIdAndUpdate(req.body.buyer._id, {balance: newBuyerBalance}),
    User.findByIdAndUpdate(req.body.seller._id, {balance: newSellerBalance}),
    Purchase.create(newPurchase),
    Message.create(messageToBuyer),
    Message.create(messageToSeller)
  ]).then(updates => {
    res.json(updates);
  }).catch(err => {
    console.log(err);
  });
});

router.post("/camp", (req, res, next) => {
  Camp.findById(req.params.id)
    .populate("chief")
    .then(object => res.json(object))
    .catch(e => next(e));
});
module.exports = router;
