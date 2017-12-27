module.exports.run = (pw, message, args) => {
    var roll = Math.floor(Math.random() * 6) +1;
    message.reply("you rolled " + roll + " :game_die:");
    console.log(`${message.author.username}#${message.author.discriminator} used roll!`);
}

module.exports.help = {
    name: "roll"
}