let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let FundSchema = mongoose.Schema({
    UserID: String,
    Funds: Number
})
let FundsModel = mongoose.model("FundAccount", FundSchema, "FundAccount");




module.exports = FundsModel;