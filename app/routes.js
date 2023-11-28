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

    router.post('*/visit-date', function (req, res) {
      const option = req.session.data['testing']
      if (option == "visit-date"){
        res.redirect('/v16/defraid-claim/defraid-1/vet-name')
      } else  {
        res.redirect('/v16/defraid-claim/defraid-1/test-date')
      }
    })

    router.post('*/visit-date', function (req, res) {
      const option = req.session.data['testing-2']
      if (option == "test-date"){
        res.redirect('/v16/defraid-claim/defraid-1/vet-name')
      } else  {
        res.redirect('/v16/defraid-claim/defraid-1/test-date')
      }
    })

    // Run this code when a form is submitted to 'number-of-animals-answer'
router.post('/number-of-animals-answer', function (req, res) {
  // Make a variable
  var AnimalNumber = req.session.data['animals'];

  // Check if AnimalNumber has no data entered
  if (!AnimalNumber) {
    // Send user to blank validation page
    res.redirect('/v20/defraid-claim/defraid-1/number-of-animals-validation-blank');
  } else if (isNaN(AnimalNumber)) {
    // Check if AnimalNumber is not a valid number
    // Send user to number validation page
    res.redirect('/v20/defraid-claim/defraid-1/number-of-animals-validation');
  } else {
    // Check if AnimalNumber is greater than 4
    if (AnimalNumber > 4) { 
      // Send user to next page
      res.redirect('/v20/defraid-claim/defraid-1/vet-name');
    } else {
      // Send user to ineligible page
      res.redirect('/v20/defraid-claim/defraid-1/number-of-animals-ineligible');
    }
  }
});


// Run this code when a form is submitted to 'number-of-animals-answer'
router.post('/number-of-animals-answer', function (req, res) {
  // Make a variable
  var AnimalNumber = req.session.data['animals'];

  // Check if AnimalNumber has no data entered
  if (!AnimalNumber) {
    // Send user to blank validation page
    res.redirect('/v19/claim/number-of-animals-validation-blank');
  } else if (isNaN(AnimalNumber)) {
    // Check if AnimalNumber is not a valid number
    // Send user to number validation page
    res.redirect('/v19/claim/number-of-animals-validation');
  } else {
    // Check if AnimalNumber is greater than 4
    if (AnimalNumber > 4) { 
      // Send user to next page
      res.redirect('/v19/claim/vet-name');
    } else {
      // Send user to ineligible page
      res.redirect('/v19/claim/number-of-animals-ineligible');
    }
  }
});


// Run this code when a form is submitted to 'number-of-animals-answer'
router.post('/number-of-animals-answer', function (req, res) {
  // Make a variable
  var AnimalNumber = req.session.data['animals'];

  // Check if AnimalNumber has no data entered
  if (!AnimalNumber) {
    // Send user to blank validation page
    res.redirect('/v20/defraid-claim/defraid-1/number-of-animals-validation-blank');
  } else if (isNaN(AnimalNumber)) {
    // Check if AnimalNumber is not a valid number
    // Send user to number validation page
    res.redirect('/v20/defraid-claim/defraid-1/number-of-animals-validation');
  } else {
    // Check if AnimalNumber is greater than 4
    if (AnimalNumber > 4) { 
      // Send user to next page
      res.redirect('/v20/defraid-claim/defraid-1/vet-name');
    } else {
      // Send user to ineligible page
      res.redirect('/v20/defraid-claim/defraid-1/number-of-animals-ineligible');
    }
  }
});

module.exports = router

