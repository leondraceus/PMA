const Discord = module.require("discord.js");

module.exports.run = (pw, message, args) => {
    var embed = new Discord.RichEmbed()
        .setThumbnail(`http://img04.deviantart.net/cfd1/i/2017/148/d/6/gible_artwork___my_mascot_by_leondraceus-dbap216.png`)
        .setTitle(`Gible`)
        .setDescription(`Commands for Gible Bot! ( ◞･౪･)`)
        .addField(`--- Fun Commands ---`,`Gible's fun commands!`)
        .addField(`-bite`,`Bite someone!`,inline = true)
        .addField(`-smash`,`Smash someone!`,inline = true)
        .addField(`-slap`,`Slap them!`,inline = true)
        .addField(`-poke`,`Poke your friend!`,inline = true)
        .addField(`-hug`,`Hug your friend!`,inline = true)
        .addField(`-lollipop`,`Give lollipop!`,inline = true)
        .addField(`-roll`,`Roll a die.`,inline = true)
        .addField(`-intensifies`,`Espurr intensifies!`,inline = true)
        .addField(`-explodes`,`Boom!`,inline = true)
        .addField(`-invite`,`Generates Invite link.`,inline = true)
        .addField(`--- Pokémon Mega Adventure ---`,`All commands for Pokémon Mega Adventure`)
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