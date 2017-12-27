const Discord = module.require("discord.js");

module.exports.run = (pw, message, args) => {
    var embed = new Discord.RichEmbed()
        .setThumbnail(`http://megaadventure.weebly.com/uploads/3/9/3/3/39332297/6413434.png`)
        .setTitle(`Professor Haru`)
        .setDescription(`All commands for Pokémon Mega Adventure`)
        .addField(`pma-encounter <Location>`,`Check encounters of specific Location.`,inline = true)
        .addField(`pma-mega <Pokémon>`,`Find Mega Stone's location.`,inline = true)
        .addField(`pma-control`,`Controls in Game.`,inline = true)
        .setColor(`#ff99cc`);
   
    message.channel.sendEmbed(embed);
    console.log(`${message.author.username}#${message.author.discriminator} sent help!`);
}

module.exports.help = {
    name: "help"
}