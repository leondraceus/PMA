module.exports.run = (pw, message, args) => {
        console.log(`${message.author.username}#${message.author.discriminator} generated Bot Invite!`);
        message.channel.sendMessage(`https://discordapp.com/oauth2/authorize?&client_id=341119127269933057&scope=bot&permissions=12659727`);
}

module.exports.help = {
    name: "invite"
}