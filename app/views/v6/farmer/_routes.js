const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// console.log( 'This is the V1 _routes file' );

// claimed BPS

router.get('*/bps-validation', function (req, res) {
  const option = req.session.data.bps

  if (option === 'Yes') {
    res.redirect('farm-size')
  } else {
    res.redirect('other-funding')
  }
})

router.get('*/change-bps-validation', function (req, res) {
  const option = req.session.data['change-bps']

  if (option === 'Yes') {
    res.redirect('sfi-summary')
  } else {
    res.redirect('other-funding')
  }
})

// farm size or SBI lookup

router.get('*/land-amount-validation', function (req, res) {
  const option = req.session.data['land-amount']

  if (option === 'area') {
    res.redirect('select-standard')
  } else {
    res.redirect('loading')
  }
})

router.get('*/change-land-amount-validation', function (req, res) {
  const option = req.session.data['land-amount']

  if (option === 'area') {
    res.redirect('sfi-summary')
  } else {
    res.redirect('loading')
  }
})

router.get('*/sbi-check-validate', function (req, res) {
  const option = req.session.data['sbi-area']

  if (option === 'yes') {
    res.redirect('select-standard-sbi')
  } else {
    res.redirect('farm-size')
  }
})

// Check details for claim

router.get('*/review-details-correct-check', function (req, res) {
  const option = req.session.data['details']

  if (option === 'no') {
    res.redirect('details-incorrect')
  } else {
    res.redirect('visit-date')
  }
})

module.exports = router

// Auto eligiblility picker radio buttons redirection
router.post('v6/farmer/picker/choose-sbi', function (req, res) {
      const size = req.session.data['business'];
       if (size === "echo") {
              res.redirect('/v6/farmer/picker/sbi-access-1');
      } if (size === "drummonds") {
              res.redirect('/v6/farmer/picker/sbi-access-2');
      } if (size === "ant") {
              res.redirect('/v6/farmer/picker/sbi-access-3');
      } if (size === "pigs") {
              res.redirect('/v6/farmer/picker/sbi-access-4');
      } if (size === "dairy") {
                res.redirect('/v6/farmer/picker/sbi-access-5');
      } if (size === "vegan") {
                res.redirect('/v6/farmer/picker/sbi-access-6');
      } if (size === "chickens") {
              res.redirect('/v6/farmer/picker/check-details-2');
      } else {
              res.redirect('/v6/farmer/picker/check-details-2');
      };
  })