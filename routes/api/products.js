const express = require('express');
const router = express.Router();

// @route   GET api/products/test
// @desc    Tests products route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Products works' }));

module.exports = router;
