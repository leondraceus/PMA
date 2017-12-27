module.exports.run = (pw, message, args) => {
    message.channel.send('http://i.imgur.com/sUofPrR.gif');
    console.log(`${message.author.username}#${message.author.discriminator} used intensifies!`);
}

module.exports.help = {
    name: "intensifies"
}