import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import FormData from "../models/formData";
import mailService from "../services/mailService";

const FormDatas = asyncHandler(async (req, res) => {
  const { DropYourCV } = req.files;

  console.log("first");

  console.log(req.files);

  const DropYourCV_FILENAME = DropYourCV[0]["filename"];

  res.json(req.files);

  req.body.DropYourCV = DropYourCV_FILENAME;

  const FormUser = new FormData(req.body);
  await FormUser.save();

  res
    ?.status(201)
    .json({ status: true, massage: "Files has been successfully uploaded" });
});
const sendMail = asyncHandler(async (req, res, next) => {
  const data=await mailService.sendEmail(req);
  res.status(200).json({data})
});
export { FormDatas ,sendMail};
