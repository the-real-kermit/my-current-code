const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm");
module.exports = {
  name: "convo",
  category: "fun",
  cooldown: 5,
  usage: "convo",
  description: "Myyysstteerryyy",

  run: async (client, message, args, user, text, prefix) => {
    if (message.content === "-convo") {
      let channel = message.guild.channels.cache.find(
        x => x.name === "magma-convo"
      );
      let embed23 = new MessageEmbed()
        .setAuthor("Chat Bot Feature", client.user.displayAvatarURL())
        .setTitle("Chat Bot Error")
        .setDescription(
          "You dont have a channel called **magma-convo**\n Please male this channel inside your server!"
        )
        .setColor(color.main);
      if (!channel) return message.channel.send(embed23);
      let embed45 = new MessageEmbed()
        .setAuthor(
          "You already have this feature",
          client.user.displayAvatarURL()
        )
        .setColor(color.main);
      if (channel) return message.channel.send(embed45);
    }
  }
};
