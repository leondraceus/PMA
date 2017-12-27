module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`You did not specify a user mention!`)
    message.channel.sendMessage('Gible has bitten ' + args[0] + ' :heart: ');
    console.log(`${message.author.username}#${message.author.discriminator} used bite!`);
}

module.exports.help = {
    name: "bite"
}