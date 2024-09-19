const Record = require("../models/record");
async function toGetAllUser(req, res) {
  try {
    const allData = await Record.find({});
    return res.status(200).json({
      msg: `we get total ${allData.length}`,
      data: [allData],
    });
  } catch (e) {
    return res.status(400).json({
      msg: "error!",
      error: e,
    });
  }
}
async function insertRecord(req, res) {
  try {
    const allData = await Record.find({});
    const body = req.body;
    console.log(body);

    if (
      !body ||
      !body.sl_No ||
      !body.name ||
      !body.category ||
      !body.invitation_Type ||
      !body.member_Count ||
      !body.address ||
      !body.phone_No
    ) {
      return res.status(400).json({ msg: "All feilds are need to be filled" });
    } else {
      const data = await Record.create({
        sl_No: allData.length + body.sl_No, //for auto increment of sl_No
        name: body.name,
        category: body.category,
        invitation_Type: body.invitation_Type,
        member_Count: body.member_Count,
        address: body.address,
        phoneNo: body.phoneNo,
      });
      return res.status(201).json({
        msg: "data inserted successfully",
        data,
      });
    }
  } catch (e) {
    return res.status(404).json({
      error: e,
    });
  }
}

//Delete done using sl_No
async function deleteRecord(req, res) {
  try {
    const sl_No = req.params.sl_No;
    console.log(sl_No);
    const data = await Record.findOneAndDelete(sl_No);
    console.log(data);
    return res.status(204).json({
      msg: "delete done",
    });
  } catch (e) {
    return res.status(404).json({
      msg: "error occurs",
      error: e,
    });
  }
}
async function updateBysl_No(req, res) {
  try {
    const sl_No = req.params.name;
    const bodyData = req.body;
    const data = await Record.findOne({
      name: { $regex: /name/, $options: "im" },
    });
    const updatedData = await Record.findOneAndUpdate(sl_No, bodyData);
    return res.status(200).json({
      msg: "update done successfully",
      updatedData,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "wrong patching",
      error: e,
    });
  }
}
module.exports = {
  toGetAllUser,
  insertRecord,
  deleteRecord,
  updateBysl_No,
};
