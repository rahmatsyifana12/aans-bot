const { Message, MessageEmbed } = require('discord.js');
const { getConfig } = require('../common/common');

class HelpCommand {

    /**
     * @param {Set<*>} commands
     */
    constructor(commands) {
        this.name = 'help';
        this.aliases = [];
        this.commands = commands;
        this.desc = 'owmboyy';
        this.usage = getConfig().prefix + 'help';
    }
    /**
     * @param {Message} msg
     * @param {string[]} args
     */
    async execute(msg, args) {
        const { channel: ch, client } = msg;

        if (args.length === 0) {
            const { list } = this.commands;
            const embed = new MessageEmbed()
            .setTitle('Help Command')
            .setDescription(
                'This is all command in the bot\n' +
                '\n' +
                '**Commands**\n' +
                list.map((cmd) => cmd.name).join(', '))
            .setColor('PURPLE')
            .setThumbnail(client.user.displayAvatarURL());

            await ch.send(embed);
        } else {
            const cmd = this.commands.findCommand(args[0]);
            if (cmd) {
                const embed = new MessageEmbed()
                .setTitle(cmd.name + ' Command Inpo')
                .addField('Name', cmd.name)
                .addField('Aliases', '[' + cmd.aliases + ']')
                .addField('Description', cmd.desc)
                .addField('Usage', '`' + cmd.usage + '`')
                .setColor('PURPLE')
                .setThumbnail(client.user.displayAvatarURL);

                await ch.send(embed);
            } else {

                const embed = new MessageEmbed()
                .setDescription('Cannot find Command!')
                .setColor('RED');

                await ch.send(embed);
            }
        }
    }  
}

module.exports = HelpCommand;