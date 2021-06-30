const { Message, MessageEmbed } = require('discord.js');
const { getConfig } = require('../common/common');

class InfoCommand {

    constructor() {
        this.name = 'info';
        this.aliases = ['i', 'informasi', 'what'];
        this.desc = 'tikitaka';
        this.usage = getConfig().prefix + 'info';
    }

    /**
     * 
     * @param {Message} msg 
     * @param {string[]} args 
     */

    async execute(msg, args) {
        const { author, guild, channel } = msg;

        const embed = new MessageEmbed()
            .setAuthor('BOT INFO', author.avatarURL())
            .addField('Your username', author.username)
            .addField('Guild name', guild.name)
            .addField('Channel name', channel.name)
            .setImage('https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1574133106/wxvguehwsvpojnkmetom.png')
            .setThumbnail('https://i.pinimg.com/originals/98/05/d3/9805d304149ea1b35522b01d1f647eae.png')
            .setColor('PURPLE')
            .setFooter('Copyright 2000');

        // await channel.send(
        //     "**by Me**\n\n" + 
        //     "You are " + author.username +
        //     "\nGuild name: " + guild.name +
        //     "\nChannel name: " + channel.name +
        //     "\n\nyour welcome"
        // );

        await channel.send(embed);
    }
}

module.exports = InfoCommand;