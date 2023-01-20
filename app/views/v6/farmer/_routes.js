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

// Auto eligiblility picker radio buttons redirection for apply journey

router.post('/app/views/v6/farmer/picker-apply/choose-sbi', function (req, res) {
      const business = req.session.data['business'];
       if (business === "echo") {
              res.redirect('/app/views/v6/farmer/picker-apply/sbi-access-1');
      } if (business === "drummonds") {
              res.redirect('/app/views/v6/farmer/picker-apply/sbi-access-2');
      } if (business === "ant") {
              res.redirect('/app/views/v6/farmer/picker-apply/sbi-access-3');
      } if (business === "pigs") {
              res.redirect('/app/views/v6/farmer/picker-apply/sbi-access-4');
      } if (business === "dairy") {
                res.redirect('/app/views/v6/farmer/picker-apply/sbi-access-5');
      } if (business === "vegan") {
                res.redirect('/app/views/v6/farmer/picker-apply/sbi-access-6');
      } if (business === "chickens") {
              res.redirect('/app/views/v6/farmer/picker-apply/check-details-2');
      } else {
              res.redirect('/app/views/v6/farmer/picker-apply/check-details-2');
      };
  })

  module.exports = router