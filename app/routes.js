const express = require('express')
const router = express.Router()

// Route for picker journey

router.post('/select-business', function (req, res) {

    var businessChoice = req.session.data['which-business']

    if (businessChoice == "business1"){
      res.redirect('/v6/farmer/apply/check-details-3')
    }

    if (businessChoice == "business2"){
      res.redirect('/v6/farmer/apply/check-details')
    }

    if (businessChoice == "business3"){
      res.redirect('/v6/farmer/apply/check-details-4')
    }

    if (businessChoice == "business4"){
        res.redirect('/v6/farmer/apply/check-details-2')
      }

    if (businessChoice == "business5"){
        res.redirect('/v6/farmer/apply/check-details-5')
      }

    if (businessChoice == "business6"){
        res.redirect('/v6/farmer/apply/check-details-6')
      }

    if (businessChoice == "business7"){
        res.redirect('/v6/farmer/apply/check-details-7')
      }

    if (businessChoice == "business8"){
        res.redirect('/v6/farmer/apply/check-details-8')
      }



  })

  // Route for defra id picker journey

  router.post('/select-business-2', function (req, res) {

    var businessChoice = req.session.data['business']

    if (businessChoice == "business1"){
      res.redirect('/v7/farmer/apply/check-details-1')
    }

    if (businessChoice == "business2"){
      res.redirect('/v7/farmer/apply/check-details-2')
    }

    if (businessChoice == "business3"){
      res.redirect('/v7/farmer/apply/check-details-3')
    }

    if (businessChoice == "business4"){
        res.redirect('/v7/farmer/apply/check-details-4')
      }

  })

    // Route for claim defra-id journey

    router.post('/select-business-2', function (req, res) {

      var businessChoice = req.session.data['business']
  
      if (businessChoice == "business1"){
        res.redirect('/v7/farmer/claim/check-details-1')
      }
  
      if (businessChoice == "business2"){
        res.redirect('/v7/farmer/claim/check-details-2')
      }
  
      if (businessChoice == "business3"){
        res.redirect('/v7/farmer/claim/check-details-3')
      }
  
      if (businessChoice == "business4"){
          res.redirect('/v7/farmer/claim/check-details-4')
        }
  
    })

module.exports = router



