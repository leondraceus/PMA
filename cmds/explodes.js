module.exports.run = (pw, message, args) => {
    message.channel.sendMessage('http://i.imgur.com/pE8DPJS.gif');
    console.log(`${message.author.username}#${message.author.discriminator} used explodes!`);
}

module.exports.help = {
    name: "explodes"
}