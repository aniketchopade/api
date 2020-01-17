var XRates = require('../models/xrates');
var Currency = require('../models/currencies');


//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.xrates_details = function (req, res,next) {
  //validation handle absense..via express api
  //validation handle wrong... via catch block
  //validation handle empty db responses.. via second then
    to = req.params.to.toUpperCase()
    from = req.params.from.toUpperCase()    
    if (to === from) {
      res.send("1")
    }
    else {
      Promise.all([
          XRates.findOne({currency: to}),
          XRates.findOne({currency: from})
        ]).then(([to, from])=>{        
          xrate = from.valueWithUSD/ to.valueWithUSD  
          res.send( ""+ xrate)
      }, (err)=>{
        res.send({err})
      }).catch((err)=>{
        if (err) console.error (err)
        if (err) res.send ("Can not convert")      
      })    
    }    
};

exports.xrates_index= function (req, res,next) {
    condition = {}
    projection = {currency:1, _id: 0 }
    XRates.find(condition, projection , (err,documents)=>{
        documents = documents.map(e => e.currency)
        res.send(documents)
    })
};

exports.xrates_name= function (req, res,next) {
  iso = req.params.iso.toUpperCase()
  condition = {ISO: iso}
  console.log(condition)
  //projection = {Name:1, _id: 0 }
  Currency.findOne({iso: "INR"},  (err,document)=>{
      res.send(document)
  })
};
