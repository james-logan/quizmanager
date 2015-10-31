var DbInteraction = require('models/DbInteraction.js');


var controller = {
  turnIn : function (req, res) {
    DbInteraction.save(req.body, function (err, rows) {
      if (err) {
        res.status(500).json({error: err})
      } else {
        res.status(200).json({message: "It worked!"})
      }
    })
  }

}


module.exports = controller
