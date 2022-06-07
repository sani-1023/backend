const express = require("express");
const router = express.Router();

const { createBankAccount } = require("../controllers/bankController")

router.route("/bank/new").post(createBankAccount);



module.exports = router
