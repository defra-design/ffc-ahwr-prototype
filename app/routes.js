const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Auto eligiblility picker radio buttons redirection for apply journey

router.post('app/views/v6/farmer/picker-apply/choose-sbi', function (req, res) {
        const business = req.session.data['business'];
         if (business === "echo") {
                res.redirect('app/views/v6/farmer/picker-apply/sbi-access-1');
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


    // Example from prototype kit

    router.post('/where-do-you-live', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var whereyoulive = req.session.data['where-do-you-live']
    
      // Check whether the variable matches a condition
      if (whereyoulive== "England"){
        // Send user to next page
        res.redirect('/sbi-access-1')
      } else {
        // Send user to ineligible page
        res.redirect('/sbi-access-2')
      }
    
    })
    module.exports = router







    module.exports = router

