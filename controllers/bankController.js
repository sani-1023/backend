const Bank = require("../models/bankModels");
const errorHandler = require("../utils/errorHandler");

exports.createBankAccount = async (req, res,next) => {

    const bank = await Bank.create(req.body); 
    
    res.status(200).json({
      success: true,
      bank,
    });
  };