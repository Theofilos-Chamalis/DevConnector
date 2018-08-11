const express = require("express");
// Like using app = express()
const router = express.Router();

// This serves json
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "users works" }));

module.exports = router;
