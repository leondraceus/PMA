module.exports.run = (pw, message, args) => {
    var toMention = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!toMention) return message.channel.sendMessage(`You did not specify a user mention!`)
    message.channel.sendMessage(message.author.username + ' has slapped ' + args[0] + '! http://i.imgur.com/WhoW7z6.gif');
    console.log(`${message.author.username}#${message.author.discriminator} used slap!`);
}

module.exports.help = {
    name: "slap"
}