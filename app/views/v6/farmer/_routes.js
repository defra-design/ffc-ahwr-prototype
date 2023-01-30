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

router.post('app/views/v6/farmer/apply/choose-sbi', function (req, res) {
      const business = req.session.data['business'];
       if (business === "Ant Farm Co. - SBI 857564831") {
              res.redirect('check-details-3');
      } if (business === "Arthington Farm Ltd - SBI 234567890") {
              res.redirect('check-details');
      } if (business === "Dairy Limited - SBI 108474838") {
              res.redirect('check-details-4');
    } if (business === "Drummonds - SBI 184638403") {
              res.redirect('check-details-5');
    } if (business === "Echo Foods - SBI 746383648") {
              res.redirect('check-details-6');
    } if (business === "Kent Signature Chickens - SBI 107684959") {
              res.redirect('check-details-2');
    } if (business=== "The Pigs Trust - SBI 174839474") {
              res.redirect('check-details-8');
    } if (business === "Vegan & Greens - SBI 106599006") {
              res.redirect('check-details-9');
      } else {
              res.redirect('choose-sbi');
      };
  })



  module.exports = router