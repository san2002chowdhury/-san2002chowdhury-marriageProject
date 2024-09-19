const express = require("express");
const {
  toGetAllUser,
  insertRecord,
  deleteRecord,
  updateBysl_No,
} = require("../controllers/record");
const { baseModelName } = require("../models/record");
const router = express.Router();
router.route("/").get(toGetAllUser);
router.route("/insert").post(insertRecord);
router.route("/:sl_No").delete(deleteRecord).patch(updateBysl_No);
module.exports = router;
