const express = require('express');
const router = express.Router();

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
    res.redirect('/v24/defraid-claim/defraid-1/number-of-animals-validation-blank');
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




// Route for the reviews form submission
router.post('*/review-sheep/which-type', function (req, res) {
  // Retrieve selected reviews from the form data
  const selectedType = req.body['which-type'];

  // Perform logic based on the selected types
  if (selectedType === "review-1") {
    res.redirect('/v25/second-claim/review-sheep/date-of-visit');
  } else if (selectedType === "review-2") {
    res.redirect('/v25/second-claim/endemics-sheep/date-of-visit');
  } else {
    // Handle other cases or redirect to an error page
    res.redirect('/v25/second-claim/endemics-sheep/*');
  }
});








// Route for the diseases form submission
router.post('*/ewe', function (req, res) {
  // Retrieve selected diseases from the form data
  const selectedDiseases = req.body.diseases;

  // Perform logic based on the selected diseases
  if (selectedDiseases.includes("disease-1")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/positive-negative-1');
  } else if (selectedDiseases.includes("disease-2")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/positive-negative-2');
  } else if (selectedDiseases.includes("disease-3")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/positive-negative-3');
  } else if (selectedDiseases.includes("disease-4")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/clinical-symptoms-4');
  } else if (selectedDiseases.includes("disease-5")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/problem-identified-5');
  } else if (selectedDiseases.includes("disease-6")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/clinical-symptoms-6');
  } else if (selectedDiseases.includes("disease-7")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/problem-identified-7');
  } else if (selectedDiseases.includes("disease-8")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/clinical-symptoms-8');
  } else if (selectedDiseases.includes("disease-9")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/positive-negative-9');
  } else if (selectedDiseases.includes("disease-10")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/clinical-symptoms-10');
  } else if (selectedDiseases.includes("disease-11")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/clinical-symptoms-11');
  } else if (selectedDiseases.includes("disease-12")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe/positive-negative-12');
  } else if (selectedDiseases.includes("disease-13")) {

    res.redirect('/v25/second-claim/endemics-sheep/ewe/other');
  } else {
    // Handle other cases or redirect to an error page
    res.redirect('/v25/second-claim/endemics-sheep/ewe-error');
  }
});

// Route for the diseases form submission
router.post('*/reproductive', function (req, res) {
  // Retrieve selected diseases from the form data
  const selectedDiseases = req.body.diseases;

  // Perform logic based on the selected diseases
  if (selectedDiseases.includes("disease-1")) {
    res.redirect('/v25/second-claim/endemics-sheep/reproductive/positive-negative-1');
  } else if (selectedDiseases.includes("disease-2")) {
    res.redirect('/v25/second-claim/endemics-sheep/reproductive/positive-negative-2');
  } else if (selectedDiseases.includes("disease-3")) {
    res.redirect('/v25/second-claim/endemics-sheep/reproductive/positive-negative-3');
  } else if (selectedDiseases.includes("disease-4")) {
    res.redirect('/v25/second-claim/endemics-sheep/reproductive/problem-identified');
  } else if (selectedDiseases.includes("disease-5")) {
    res.redirect('/v25/second-claim/endemics-sheep/reproductive/clinical-symptoms');
  } else if (selectedDiseases.includes("disease-6")) {
    res.redirect('/v25/second-claim/endemics-sheep/reproductive/positive-negative-6');
  } else if (selectedDiseases.includes("disease-7")) {
    res.redirect('/v25/second-claim/endemics-sheep/reproductive/other');
  } else {
    // Handle other cases or redirect to an error page
    res.redirect('/v25/second-claim/endemics-sheep/reproductive-error');
  }
});

// Route for the diseases form submission
router.post('*/lamb', function (req, res) {
  // Retrieve selected diseases from the form data
  const selectedDiseases = req.body.diseases;

  // Perform logic based on the selected diseases
  if (selectedDiseases.includes("disease-1")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/clinical-symptoms-1');
  } else if (selectedDiseases.includes("disease-2")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/positive-negative-2');
  } else if (selectedDiseases.includes("disease-3")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/problem-identified-3');
  } else if (selectedDiseases.includes("disease-4")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/clinical-symptoms-4');
  } else if (selectedDiseases.includes("disease-5")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/clinical-symptoms-5');
  } else if (selectedDiseases.includes("disease-6")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/clinical-symptoms-6');
  } else if (selectedDiseases.includes("disease-7")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/clinical-symptoms-7');
  } else if (selectedDiseases.includes("disease-8")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/clinical-symptoms-8');
  } else if (selectedDiseases.includes("disease-9")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/clinical-symptoms-9');
  } else if (selectedDiseases.includes("disease-10")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/positive-negative-10');
  } else if (selectedDiseases.includes("disease-11")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/clinical-symptoms-11');
  } else if (selectedDiseases.includes("disease-12")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/positive-negative-12');
  } else if (selectedDiseases.includes("disease-13")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/positive-negative-13');
  } else if (selectedDiseases.includes("disease-14")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/positive-negative-14');
  } else if (selectedDiseases.includes("disease-15")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/clinical-symptoms-15');
  } else if (selectedDiseases.includes("disease-16")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb/other');
  } else {
    // Handle other cases or redirect to an error page
    res.redirect('/v25/second-claim/endemics-sheep/lamb-error');
  }
});

// Route for the diseases form submission
router.post('*/neonatal-lamb', function (req, res) {
  // Retrieve selected diseases from the form data
  const selectedDiseases = req.body.diseases;

  // Perform logic based on the selected diseases
  if (selectedDiseases.includes("disease-1")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/positive-negative-1');
  } else if (selectedDiseases.includes("disease-2")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/positive-negative-2');
  } else if (selectedDiseases.includes("disease-3")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/clinical-symptoms-3');
  } else if (selectedDiseases.includes("disease-4")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/positive-negative-4');
  } else if (selectedDiseases.includes("disease-5")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/positive-negative-5');
  } else if (selectedDiseases.includes("disease-6")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/clinical-symptoms-6');
  } else if (selectedDiseases.includes("disease-7")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/clinical-symptoms-7');
  } else if (selectedDiseases.includes("disease-8")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/clinical-symptoms-8');
  } else if (selectedDiseases.includes("disease-9")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/positive-negative-9');
  } else if (selectedDiseases.includes("disease-10")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/clinical-symptoms-10');
  } else if (selectedDiseases.includes("disease-11")) {


    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb/other');
  } else {
    // Handle other cases or redirect to an error page
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb-error');
  }
});

// Route for the diseases form submission
router.post('*/parasites', function (req, res) {
  // Retrieve selected diseases from the form data
  const selectedDiseases = req.body.diseases;

  // Perform logic based on the selected diseases
  if (selectedDiseases.includes("disease-1")) {
    res.redirect('/v25/second-claim/endemics-sheep/parasites/positive-negative-1');
  } else if (selectedDiseases.includes("disease-2")) {
    res.redirect('/v25/second-claim/endemics-sheep/parasites/positive-negative-2');

    res.redirect('/v25/second-claim/endemics-sheep/parasites/clinical-symptoms-10');
  } else if (selectedDiseases.includes("disease-3")) {


    res.redirect('/v25/second-claim/endemics-sheep/parasites/other');
  } else {
    // Handle other cases or redirect to an error page
    res.redirect('/v25/second-claim/endemics-sheep/parasites-error');
  }
});

// Route for the diseases form submission
router.post('*/lameness', function (req, res) {
  // Retrieve selected diseases from the form data
  const selectedDiseases = req.body.diseases;

  // Perform logic based on the selected diseases
  if (selectedDiseases.includes("disease-1")) {
    res.redirect('/v25/second-claim/endemics-sheep/lameness/clinical-symptom-1');
  } else if (selectedDiseases.includes("disease-2")) {
    res.redirect('/v25/second-claim/endemics-sheep/lameness/clinical-symptom-2');
  } else if (selectedDiseases.includes("disease-3")) {
    res.redirect('/v25/second-claim/endemics-sheep/lameness/clinical-symptoms-3');
  } else if (selectedDiseases.includes("disease-4")) {
    res.redirect('/v25/second-claim/endemics-sheep/lameness/clinical-symptom-4');
  } else if (selectedDiseases.includes("disease-5")) {
    res.redirect('/v25/second-claim/endemics-sheep/lameness/clinical-symptom-5');
  } else if (selectedDiseases.includes("disease-6")) {
    res.redirect('/v25/second-claim/endemics-sheep/lameness/clinical-symptoms-6');
  } else if (selectedDiseases.includes("disease-7")) {
    res.redirect('/v25/second-claim/endemics-sheep/lameness/clinical-symptom-7');
  } else if (selectedDiseases.includes("disease-8")) {
    res.redirect('/v25/second-claim/endemics-sheep/lameness/clinical-symptom-8');
  } else if (selectedDiseases.includes("disease-9")) {
    res.redirect('/v25/second-claim/endemics-sheep/lameness/clinical-symptom-9');
  } else if (selectedDiseases.includes("disease-10")) {

    res.redirect('/v25/second-claim/endemics-sheep/lameness/other');
  } else {
    // Handle other cases or redirect to an error page
    res.redirect('/v25/second-claim/endemics-sheep/lameness-error');
  }
});



// Route for the packages form submission
router.post('*/endemics-package', function (req, res) {
  // Retrieve selected packages from the form data
  const selectedPackages = req.body.package;

  // Perform logic based on the selected packages
  if (selectedPackages.includes("package-1")) {
    res.redirect('/v25/second-claim/endemics-sheep/ewe');
  } else if (selectedPackages.includes("package-2")) {
    res.redirect('/v25/second-claim/endemics-sheep/reproductive');
  } else if (selectedPackages.includes("package-3")) {
    res.redirect('/v25/second-claim/endemics-sheep/lamb');
  } else if (selectedPackages.includes("package-4")) {
    res.redirect('/v25/second-claim/endemics-sheep/neonatal-lamb');
  } else if (selectedPackages.includes("package-5")) {
    res.redirect('/v25/second-claim/endemics-sheep/parasites');
  } else if (selectedPackages.includes("package-6")) {
    res.redirect('/v25/second-claim/endemics-sheep/lameness');
  } else {
    // Handle other cases or redirect to an error page
    res.redirect('/v25/second-claim/endemics-sheep/endemics-package-error');
  }
});

// Route for the form submission
router.post('*/test-numbers', function (req, res) {
  // Retrieve the submitted value
  const testedSamples = req.body.width2;

  // Check the submitted value
  if (testedSamples === '6' || testedSamples === '30') {
    // Continue to the next page
    res.redirect('/v25/second-claim/endemics-pig/disease-status');
  } else {
    // Redirect to the error page
    res.redirect('/v25/second-claim/endemics-pig/test-numbers-error.html');
  }
});

// Route for the form submission
router.post('*/biosecurity-pigs', function (req, res) {
  // Retrieve the submitted value
  const biosecurityAssessment = req.body.contact;

  // Check the submitted value
  if (biosecurityAssessment === 'email') {
    // Continue to the check-answers page
    res.redirect('/v25/second-claim/endemics-pig/check-answers.html');
  } else if (biosecurityAssessment === 'phone') {
    // Redirect to the biosecurity-error page
    res.redirect('/v25/second-claim/endemics-pig/biosecurity-error.html');
  } else {
    // Handle other cases or redirect to an error page
    res.redirect('/v25/second-claim/endemics-pig/biosecurity-error.html');
  }
});




module.exports = router