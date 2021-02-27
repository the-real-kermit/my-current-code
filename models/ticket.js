const { Schema, model } = require("mongoose");
module.exports = model(
  "ticket",
  new Schema({
    channelID: String,
    guildID: String,
    userID: String,
    number: Number
  })
);