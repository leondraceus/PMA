module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`You did not specify a user mention!`)
    message.channel.sendMessage('Gible has smashed ' + args[0] + '!');
    console.log(`${message.author.username}#${message.author.discriminator} used smash!`);
}

module.exports.help = {
    name: "smash"
}