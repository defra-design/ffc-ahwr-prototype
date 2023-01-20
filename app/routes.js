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
