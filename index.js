require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const InfoCommand = require('./commands/info.js');
const HelloCommand = require('./commands/hello.js');
const HelpCommand = require('./commands/help.js');

const { registeredCommand } = require('./common/common.js'); 
const AdminCommand = require('./commands/admin.js');

client.on('ready', () => {
    console.log("BOT IS RUNNING MA FRIEND!");
});

client.on('message', async (msg) => {
    if (msg.author.bot || !msg.guild) {
        return;
    }
    // msg.reply('echo: ' + msg.content); // reply to a message and tag the messanger
    //msg.channel.send('SUP BRAHH!'); // reply to a message

    let content = msg.cleanContent;
    let { getConfig } = require('./common/common.js');
    let { prefix } = getConfig();
    
    if (!content.startsWith(prefix)) {
        return;
    }
    
    content = content.substr(prefix.length);

    let array = content.split(' ');
    let name = array.shift().toLowerCase();

    let cmd = registeredCommand.findCommand(name);
    
    if (cmd) {
        await cmd.execute(msg, array); // only for async func.
    }
});

// commandSet.add(new InfoCommand());
// commandSet.add(new HelloCommand());
// commandSet.add(new HelpCommand(commandSet));

registeredCommand.addCommand(new InfoCommand());
registeredCommand.addCommand(new HelpCommand(registeredCommand));
registeredCommand.addCommand(new HelloCommand());
registeredCommand.addCommand(new AdminCommand());
// info hello world
// array = [info, hello, world]

client.login(process.env['BOT_TOKEN']);