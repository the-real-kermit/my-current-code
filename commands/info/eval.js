const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../botconfig/config.json");
const color = require("../../botconfig/colors.json");

module.exports = {	
	name: "eval",
	category: "info", 
	cooldown: 5, 
	usage: "eval <)",
  	description: "", 

	
  run: async (client, message, args, user, text, prefix) => {


const notowner = new MessageEmbed()
.setDescription("You can't use this command!")
.setColor(color.main)
const owners_id = ["722545528214388756", "455898432603684895"];
    if (!owners_id.includes(message.author.id))
     return message.channel.send(notowner);  const args2 = message.content.split(" ").slice(1);

    const clean = text => {
if (typeof text === "string")
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    };
    
    try {
      const code = args2.join(" ");
      let evaled = eval(code);

 const { inspect } = require("util");

if (typeof evaled !== "string") {
                evaled = inspect(evaled, {
                    depth: 0
                });
            }

const lmao = message.content.slice("".length).trim().split(/ +/);
lmao.shift().toLowerCase().split(" ")[0]
const output = clean(evaled)

       const eval2 = new MessageEmbed()
       .setColor(color.main)
       .addField("Input", `\`\`\`js\n${lmao.join(" ")}\`\`\``)
       .addField("Output", `\`\`\`js\n${output}\`\`\``)
      
    // msg.channel.send(clean(evaled));
if (!code) return message.channel.send({
  embed: {
    color: color.main,
    author: {
      name: "Please provide something to eval!",
      icon_url: message.author.displayAvatarURL({ dynamic:true })
    }
  }
})
      message.channel.send(eval2)
    } catch (err) {
      
      const erroroops = new MessageEmbed()
      .setColor(color.main)
      .addField("Error:", `\`\`\`js\n${clean(err)}\n\`\`\``)
      message.channel.send(erroroops)
    }

//(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	}
}