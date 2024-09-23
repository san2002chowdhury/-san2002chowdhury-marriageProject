const express = require("express");
const { body, check, validationResult } = require("express-validator");
const Record = require("../models/record");

const {
  toGetAllUser,
  insertRecord,
  deleteRecord,
  updateBysl_No,
} = require("../controllers/record");
const { baseModelName } = require("../models/record");
const router = express.Router();
router.route("/").get(toGetAllUser);
router.route("/insert").post(
  [
    body("name").isLength({ min: 7 }),
    body("name").isLength({ max: 30 }),
    body("name").not().isEmpty().withMessage("Name is required!"),
    body("phone").isEmpty().withMessage("Phone is required"),
    body("category").not().isEmpty().withMessage("category is required!"),
    body("member_Count")
      .not()
      .isEmpty()
      .withMessage("member_Count is required!"),
    body("address").not().isEmpty().withMessage("address is required!"),
    body("phone_No").not().isEmpty().withMessage("phone_No is required!"),
    body("phone_No").isLength({ min: 10 }).withMessage("phone_No is required!"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        msg: errors.array(),
      });
    } else {
      next();
    }
  },
  insertRecord
);
router.route("/:sl_No").delete(deleteRecord).patch(updateBysl_No);
module.exports = router;
