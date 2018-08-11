const express = require("express");
// Like using app = express()
const router = express.Router();

// This serves json
// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

module.exports = router;
