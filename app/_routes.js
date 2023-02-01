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

// SFI summary

router.get('*/sfi-summary-validation', function (req, res) {
  const option = req.session.data['continue-application']

  if (option === 'yes') {
    res.redirect('task-list')
  } else {
    res.redirect('select-standard')
  }
})

// Vet - reference number details

router.post('*/check-details', function (req, res) {
  const option = req.session.data['review-details-correct-check']

  if (option === 'no') {
    res.redirect('review/reference')
  } else {
    res.redirect('review/beef/visit-date')
  }
})

router.post('app/views/v6/farmer/apply/find-sbi', function (req, res) {
  const business = req.session.data['business'];
   if (business === "Ant Farm Co. - SBI 857564831") {
          res.redirect('app/views/v6/farmer/apply/check-details-3');

  } if (business === "Arthington Farm Ltd - SBI 234567890") {
          res.redirect('app/views/v6/farmer/apply/check-details');

  } if (business === "Dairy Limited - SBI 108474838") {
          res.redirect('app/views/v6/farmer/apply/check-details-4');

  } if (business === "Drummonds - SBI 184638403") {
          res.redirect('#');

  } if (business === "Echo Foods - SBI 746383648") {
          res.redirect('#');

  } if (business === "Kent Signature Chickens - SBI 107684959") {
          res.redirect('app/views/v6/farmer/apply/check-details-2');

  } if (business === "The Pigs Trust - SBI 174839474") {
          res.redirect('#');

  } if (business === "Vegan & Greens - SBI 106599006") {
          res.redirect('#');

  } else {
          res.redirect('app/views/v6/farmer/apply/find-sbi');
  };

})

module.exports = router
