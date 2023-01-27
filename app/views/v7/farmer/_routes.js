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

// Check details dynamic for picker

router.post('#', function (req, res) {
      const size = req.session.data['size'];
       if (size === "small") {
              res.redirect('/phoenix/employer/v7/turnover');
      } if (size === "micro") {
              res.redirect('/phoenix/employer/v7/turnover');
      } if (size === "medium") {
              res.redirect('/phoenix/employer/v7/turnover');
      } else {
              res.redirect('/phoenix/employer/v7/not-eligible-size');
      };
  })





  module.exports = router