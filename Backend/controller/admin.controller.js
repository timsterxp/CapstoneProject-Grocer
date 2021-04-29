  let AdminModel = require("../model/admin.model.js");

  let getAllAdmins = (req, res) => {
      AdminModel.find({}, (err, result) => {
          if (!err) {
              res.json(result);
          }
      })
  }

  module.exports = { getAllAdmins };