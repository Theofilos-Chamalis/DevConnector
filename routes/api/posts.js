const express = require("express");
// Like using app = express()
const router = express.Router();

// This serves json
// @route   GET api/posts/test
// @desc    Tests posts route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "posts works" }));

module.exports = router;
