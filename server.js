//Modules
const { Client, Collection } = require("discord.js");
const config = require("./botconfig/config.json"); //loading config file with token and prefix
const prefix = config.prefix; //defining the prefix as a constant variable
const fs = require("fs"); //this package is for reading files and getting their inputs
const { ReactionRoleManager } = require("discord.js-collector");
const { options } = require("superagent");



const client = new Client({
  disableEveryone: true, //disables, that the bot is able to send @everyone
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
}); //creating the client with partials, so you can fetch OLD messages

client.commands = new Collection(); //an collection (like a digital map(database)) for all your commands
client.aliases = new Collection(); //an collection for all your command-aliases
const cooldowns = new Collection(); //an collection for cooldown commands of each user

client.categories = fs.readdirSync("./commands/"); //categories

["command"].forEach(handler => {
  require(`./handlers/command`)(client);
}); //this is for command loading in the handler file, one fireing for each cmd
const eventhandler = require("./handlers/events");
eventhandler(client); //this is for event handling

//fires each time the bot receives a message
client.on("message", async message => {
   if (message.author.bot) return; // if the message  author is a bot, return aka ignore the inputs
  if (!message.guild) return; //if the message is not in a guild (aka in dms), return aka ignore the inputs

  if (
    !message.content.startsWith(prefix) &&
    message.content.startsWith(client.user.id)
  )
    return message.reply(
      `My Prefix is: **\`${prefix}\`**, type \`${prefix}help\` for more information!`
    ); //if the messages is not a command and someone tags the bot, then send an info msg
  if (!message.content.startsWith(prefix)) return; //if the message does not starts with the prefix, return, so only commands are fired!

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g); //creating the argumest (each space == 1 arg)
  const cmd = args.shift().toLowerCase(); //creating the cmd argument by shifting the args by 1

  if (cmd.length === 0) return; //if no cmd, then return

  let command = client.commands.get(cmd); //get the command from the collection
  if (!command) command = client.commands.get(client.aliases.get(cmd)); //if the command does not exist, try to get it by his alias

  if (command) {
    //if the command is now valid
    if (!cooldowns.has(command.name)) {
      //if its not in the cooldown, set it too there
      cooldowns.set(command.name, new Collection());
    }

    const now = Date.now(); //get the current time
    const timestamps = cooldowns.get(command.name); //get the timestamp of the last used commands
    const cooldownAmount = (command.cooldown || 1) * 1000; //get the cooldownamount of the command, if there is no cooldown there will be automatically 1 sec cooldown, so you cannot spam it^^

    if (timestamps.has(message.author.id)) {
      //if the user is on cooldown
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount; //get the amount of time he needs to wait until he can run the cmd again

      if (now < expirationTime) {
        //if he is still on cooldown
        const timeLeft = (expirationTime - now) / 1000; //get the lefttime
        return message.channel.send({
       embed: {
         color: "#cd0919",
         author: {
           name:`Please wait ${timeLeft.toFixed(
             1
             )} more second(s) before reusing the ${command.name} command.`,
           icon_url: message.author.displayAvatarURL({ dynamic:true })
         }
         
       }      
     })
      
      }
    }
    
    const reactionRoleManager = new ReactionRoleManager(client, {
      storage: true, // Enable reaction role store in a Json file
      path: __dirname + "/roles.json", // Where will save the roles if store is enabled
      mongoDbLink: "mongodb://localhost:27017/locl" // See here to see how setup mongoose: https://github.com/IDjinn/Discord.js-Collector/blob/master/examples/reaction-role-manager/Note.md
    });

    timestamps.set(message.author.id, now); //if he is not on cooldown, set it to the cooldown
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount); //set a timeout function with the cooldown, so it gets deleted later on again
    try {
      command.run(
        client,
        message,
        args,
        message.author,
        args.join(" "),
        prefix
      ); //run the command with the parameters:  client, message, args, user, text, prefix,
      /* /////////////////////////////////////////
        HERE AN EXAMPLE:

            User: Tomato#6966   types command:

                !say Hello World, HEY!

                what you can get from say cmd parameters: 
                    client is: the <DiscordClient>
                    message is: the <Message>
                    user is: the <DiscordUser>
                    text is: <everything fter the command:   Hello World, HEY!>
                    prefix is: <config.prefix:   !>
        */ ///////////////////////////////////////////////////////
    } catch (error) {
      console.log(error);
      return message.reply(
        "Something went wrong while running the: `" +
          command.name +
          "` command"
      );
    }
  } //if the command is not found send an info msg
  else return message.channel.send({
    embed: {
      color: `#cd0919`,
      title: `Unkown command, try: **\`${prefix}help\`**`,
    }
      })
    });

  //let victim = message.mentions.users.first()
  // if (!victim) return message.channel.send({
  //   embed: {
  //    color: color.main,
  //    author: {
  //      name:"Please mention a valid user to slap!",
  //      icon_url: message.author.displayAvatarURL({ dynamic:true })
  //    }

  //  }
  //})
  //else return message.reply(`Unkown command, try: **\`${prefix}help\`**`);

  //I'm at your line

client.on("ready", () => {
  console.log("Back Up Loaded");
  client.user.setPresence({
    activity: { name: "Type | m-help", type: "PLAYING" },
    status: "dnd"
  });
});

client.on("message", async message => {
  if (message.content === ".hidden") {
    message.channel.send("Found it!");
  }
  const alexa = require("alexa-bot-api");
  let Discord = require("discord.js");
  var chatbot = new alexa("aw2plm");
  if (message.channel.name === "magma-convo") {
    if (message.author.bot) return;
    let content = message.content;
    if (!content) return;
    chatbot.getReply(content).then(r => message.channel.send(r));
  }
});
client.on("guildCreate", guild => {
  let defaultChannel = "";
  guild.channels.cache.forEach(channel => {
    if (channel.type == "text" && defaultChannel == "") {
      if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        defaultChannel = channel;
      }
    }
  });
  const discord = require("discord.js");
  const joinEmbed = new discord.MessageEmbed()
    .setTitle(":wave: | Thanks for adding me to your server!")
    .setColor("BLACK")
    .setDescription(`The prefix for all my commands is ${prefix}, e.g: ${prefix}command`)
    .addField(
      `To get started, enter a text channel! A full list of commands is available by doing ${prefix}help`
    )
    .addField(
      `If you have any questions or need help with Me, [click here](discord link here) to talk to support!`
    )
    .setFooter("Thanks!");

  defaultChannel
    .send(`Ohh New Server!! :O`)
    .then(defaultChannel.send(joinEmbed));
});

client.on("guildCreate", guild => {
  const Discord = require("discord.js");
  const joinedembed = new Discord.MessageEmbed()
    .setTitle("**Some one just put me in their Server!**")
    .setColor("BLACK")
    .addField("**Server Name:**", `${guild.name}`)
    .addField("**Server ID:**", `${guild.id}`)
    .addField("**Member Count:**", `${guild.memberCount}`)
    .addField("**Owner:**", `${guild.owner.user.username}`)
    .setFooter(`Now I'm in ${client.guilds.cache.size} servers`);
  let rNah = client.channels.cache.get("812867921088610364").send(joinedembed);
});
client.on("guildDelete", guild => {
  const Discord = require("discord.js");
  let removedembed = new Discord.MessageEmbed()
    .setTitle("**Some one just removed me from their Server!**")
    .setColor("BLACK")
    .addField("**Server Name:**", `${guild.name}`)
    .addField("**Server ID:**", `${guild.id}`)
    .addField("**Member Count:**", `${guild.memberCount}`)
    .addField("**Owner:**", `${guild.owner.user.username}`)
    .setFooter(`Now I'm in ${client.guilds.cache.size} servers`);
  let jNah = client.channels.cache.get("812867921088610364").send(removedembed);
});




client.login(config.token); //login into the bot
