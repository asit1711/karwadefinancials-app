const express = require('express');
const router = express.Router();

// POST /api/quote - Calculate insurance quote
router.post('/', async (req, res) => {
  const { type, coverage, age, propertyValue } = req.body;

  // Validation
  if (!type || !coverage) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide insurance type and coverage amount' 
    });
  }

  try {
    // Simple quote calculation logic (customize based on your needs)
    let baseRate = 0;
    const coverageAmount = parseFloat(coverage);

    switch(type) {
      case 'home':
        baseRate = coverageAmount * 0.005; // 0.5% of property value
        break;
      case 'auto':
        baseRate = coverageAmount * 0.008; // 0.8% of vehicle value
        break;
      case 'life':
        baseRate = (coverageAmount * 0.002) * (age ? 1 + (age - 30) * 0.01 : 1);
        break;
      case 'health':
        baseRate = 500 + (age ? age * 20 : 0);
        break;
      default:
        baseRate = coverageAmount * 0.01;
    }

    const monthlyPremium = Math.round(baseRate / 12);
    const annualPremium = Math.round(baseRate);

    // Log quote request (in production, save to database)
    console.log('Quote Request:', { type, coverage, age, propertyValue });

    res.json({ 
      success: true,
      quote: {
        type,
        coverage: coverageAmount,
        monthlyPremium,
        annualPremium,
        savings: Math.round(annualPremium * 0.1) // 10% savings if paid annually
      }
    });
  } catch (error) {
    console.error('Quote calculation error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to calculate quote. Please try again.' 
    });
  }
});

module.exports = router;
