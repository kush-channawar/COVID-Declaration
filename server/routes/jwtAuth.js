const express = require("express");
const router = express.Router();
const pool = require("../db");


//authorizeentication

router.post("/register", async (req, res) => {
  const {  name, address,sex,age,FCSSF,BREATHING,ABROAD,DOMESTIC,EXPOSURE,HEALTHCARE } = req.body;

  try {
    let newUser = await pool.query(
      "INSERT INTO users (user_name,  user_address, user_age, user_sex, FCSSF,BREATHING,ABROAD,DOMESTIC,EXPOSURE,HEALTHCARE) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10) RETURNING *",
      [name,address, age,sex,FCSSF,BREATHING,ABROAD,DOMESTIC,EXPOSURE,HEALTHCARE]
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


router.post("/verify", (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
