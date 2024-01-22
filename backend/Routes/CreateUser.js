const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password").isLength({ min: 5 }).withMessage("Incorrect Password"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, password, email, location } = req.body; // Extract the values from the request body

      await User.create({
        name,
        password,
        email,
        location,
      });

      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

// Login for the use database
router.post("/loginuser",[
  body("email").isEmail(),
  body("password").isLength({ min: 5 }).withMessage("Incorrect Password"),
],
async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let email = req.body.email;

  try {
    let userData = await User.findOne({ email });
    if (!userData) {
      return res
        .status(400)
        .json({ errors: "Try logging with correct credentials" });
    }

    if (req.body.password !== userData.password) {
      return res
        .status(400)
        .json({ errors: "Try logging with correct credentials" });
    }

    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
