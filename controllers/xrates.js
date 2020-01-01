var XRates = require('../models/xrates');

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
