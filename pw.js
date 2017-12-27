const settings = require("./settings.json");
const Discord = require('discord.js');
const pw = new Discord.Client();
const prefix = settings.prefix;
const fs = require("fs");

pw.login(settings.token);

pw.on('ready', () => {
    console.log(`${pw.user.username} is ready!`);
    console.log(`Stalking is on!`);
    pw.user.setGame('send -help',`https://www.twitch.tv/pokemon`)
});

pw.on('guildMemberAdd', member => {
    member.send(`:door: **__Welcome to Pokémon Mega Adventure Discord__** :door:
I hope you enjoy your time here and follow our <#395226662276431874> | <#395227126175105024> `);
});

pw.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    var jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        var props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        pw.commands.set(props.help.name, props);
    });
});

pw.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    var messageArray = message.content.split(` `);
    var command = messageArray[0];
    var args = messageArray.slice(1);
    var channelname = messageArray[1];
    var rep = messageArray[2];
    
    if(!command.startsWith(prefix)) return;

    var cmd = pw.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(pw, message, args);
});

///////////////////////////////////////////////////////////////////////////////////////
//                  Database of Encounters [Pokémon Mega Adventure]                  //
///////////////////////////////////////////////////////////////////////////////////////

pw.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var args = messageArray.slice(1);
    
    if(command === `pma${prefix}encounter`){
        if(args[0]==="Route1" | args[0]==="route1"){
            var Route1 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 1`)
                .addField(`:sunrise: Day :sunrise:`,`These Pokémon can be found at Day time only.`)
                .addField(`Rattata`,`21%`,inline = true).addField(`Pidgey`,`21%`,inline = true)
                .addField(`Sentret`,`10%`,inline = true).addField(`Poochyena`,`10%`,inline = true)
                .addField(`Zigzagoon`,`10%`,inline = true).addField(`Starly`,`10%`,inline = true)
                .addField(`Bidoof`,`5%`,inline = true).addField(`Patrat`,`5%`,inline = true)
                .addField(`Lillipup`,`4%`,inline = true).addField(`Purrloin`,`4%`,inline = true)
                .addField(`:crescent_moon: Night :crescent_moon:`,`These Pokémon can be found at Day time only.`)
                .addField(`Rattata`,`40%`,inline = true).addField(`Pidgey`,`40%`,inline = true)
                .addField(`Spinarak`,`20%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route1);
        }

        else if(args[0]==="CorrdaForest" | args[0]==="corrdaforest" | args[0]==="Corrdaforest"){
            var CorrdaForest = new Discord.RichEmbed().setColor(`#339933`)
                .setTitle(`Corrda Forest`)
                .addField(`:sunrise: Day :sunrise:`,`These Pokémon can be found at Day time.`)
                .addField(`Caterpie`,`20%`,inline = true).addField(`Weedle`,`20%`,inline = true)
                .addField(`Grubbin`,`20%`,inline = true).addField(`Metapod`,`10%`,inline = true)
                .addField(`Kakuna`,`10%`,inline = true).addField(`Spinarak`,`5%`,inline = true)
                .addField(`Ledyba`,`5%`,inline = true).addField(`Wurmple`,`4%`,inline = true)
                .addField(`Sewaddle`,`4%`,inline = true).addField(`Venipede`,`1%`,inline = true)
                .addField(`Heracross`,`1%`,inline = true)
                .addField(`:crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Night time.`)
                .addField(`Caterpie`,`20%`,inline = true).addField(`Weedle`,`20%`,inline = true)
                .addField(`Grubbin`,`10%`,inline = true).addField(`Venonat`,`10%`,inline = true)
                .addField(`Metapod`,`10%`,inline = true).addField(`Kakuna`,`10%`,inline = true)
                .addField(`Spinarak`,`5%`,inline = true).addField(`Ledyba`,`5%`,inline = true)
                .addField(`Wurmple`,`4%`,inline = true).addField(`Sewaddle`,`4%`,inline = true)
                .addField(`Venipede`,`1%`,inline = true).addField(`Pinsir`,`1%`,inline = true)          
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(CorrdaForest);
        }

        else if(args[0]==="Route2" | args[0]==="route2"){
            var Route2 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 2`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Ekans`,`20%`,inline = true).addField(`Buneary`,`20%`,inline = true)
                .addField(`Geodude`,`20%`,inline = true).addField(`Drifloon`,`10%`,inline = true)
                .addField(`Nosepass`,`10%`,inline = true).addField(`Nidoran ♂`,`5%`,inline = true)
                .addField(`Nidoran ♀`,`5%`,inline = true).addField(`Roggenrola`,`4%`,inline = true)
                .addField(`Shinx`,`4%`,inline = true).addField(`Seedot`,`1%`,inline = true)
                .addField(`Onix`,`1%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route2);
        }

        else if(args[0]==="Route3" | args[0]==="route3"){
            var Route3 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 3`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Nidoran ♂`,`20%`,inline = true).addField(`Nidoran ♀`,`20%`,inline = true)
                .addField(`Aipom`,`20%`,inline = true).addField(`Taillow`,`20%`,inline = true)
                .addField(`Mankey`,`10%`,inline = true).addField(`Marill`,`10%`,inline = true)
                .addField('\u200B','\u200B')
                .addField(`:surfer: Surf :surfer:`,`These Pokémon can be found while surfing.`)
                .addField(`Goldeen`,`60%`,inline = true).addField(`Carvanha`,`30%`,inline = true)
                .addField(`Feebas`,`5%`,inline = true).addField(`Magikarp`,`4%`,inline = true)
                .addField(`Basculin`,`1%`,inline = true)
                .addField('\u200B','\u200B')
                .addField(`:fish: Fishing :fish:`,`These Pokémon can be found while fishing.`)
                .addField(`Magikarp`,`Old/Good Rod`,inline = true).addField(`Feebas`,`Good Rod`,inline = true)
                .addField(`Basculin`,`Old/Good/Super Rod`,inline = true).addField(`Seaking`,`Super Rod`,inline = true)
                .addField(`Carvanha`,`Super Rod`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route3);
        }

        else if(args[0]==="Route4" | args[0]==="route4"){
            var Route4 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 4`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Snubbull`,`20%`,inline = true).addField(`Shinx`,`20%`,inline = true)
                .addField(`Mankey`,`10%`,inline = true).addField(`Abra`,`10%`,inline = true)
                .addField(`Pichu`,`10%`,inline = true).addField(`Nincada`,`10%`,inline = true)
                .addField(`Budew`,`10%`,inline = true).addField(`Croagunk`,`4%`,inline = true)
                .addField(`Dwebble`,`4%`,inline = true).addField(`Riolu`,`1%`,inline = true)
                .addField(`Scraggy`,`1%`,inline = true)
                .addField('\u200B','\u200B')
                .addField(`:surfer: Surf :surfer:`,`These Pokémon can be found while surfing.`)
                .addField(`Magikarp`,`95%`,inline = true).addField(`Basculin`,`5%`,inline = true)
                .addField('\u200B','\u200B')
                .addField(`:fish: Fishing :fish:`,`These Pokémon can be found while fishing.`)
                .addField(`Magikarp`,`Old/Good/Super Rod`,inline = true).addField(`Basculin`,`Old/Good/Super Rod`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route4);
        }

        else if(args[0]==="Route5" | args[0]==="route5"){
            var Route5 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 5`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Slowpoke`,`20%`,inline = true).addField(`Mareep`,`20%`,inline = true)
                .addField(`Yanma`,`10%`,inline = true).addField(`Budew`,`10%`,inline = true)
                .addField(`Sewaddle`,`10%`,inline = true).addField(`Venipede`,`10%`,inline = true)
                .addField(`Nincada`,`10%`,inline = true).addField(`Stunky`,`5%`,inline = true)
                .addField(`Glameow`,`5%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route5);
        }

        else if(args[0]==="PineForest" | args[0]==="pineforest" | args[0]==="Pineforest"){
            var PineForest = new Discord.RichEmbed().setColor(`#339933`)
                .setTitle(`Pine Forest`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Seedot`,`20%`,inline = true).addField(`Seedot`,`20%`,inline = true)
                .addField(`Sewaddle`,`20%`,inline = true).addField(`Venipede`,`20%`,inline = true)
                .addField(`Karrablast`,`10%`,inline = true).addField(`Shelmet`,`10%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(PineForest);
        }

        else if(args[0]==="Route6" | args[0]==="route6"){
            var Route6 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 6`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Bellsprout`,`20%`,inline = true).addField(`Grimer`,`20%`,inline = true)
                .addField(`Pineco`,`10%`,inline = true).addField(`Slakoth`,`10%`,inline = true)
                .addField(`Budew`,`10%`,inline = true).addField(`Pidove`,`10%`,inline = true)
                .addField(`Lotad`,`10%`,inline = true).addField(`Woobat`,`10%`,inline = true)
                .addField('\u200B','\u200B')
                .addField(`:surfer: Surf :surfer:`,`These Pokémon can be found while surfing.`)
                .addField(`Magikarp`,`60%`,inline = true).addField(`Lotad`,`30%`,inline = true)
                .addField(`Buizel`,`5%`,inline = true).addField(`Buizel`,`5%`,inline = true)
                .addField('\u200B','\u200B')
                .addField(`:fish: Fishing :fish:`,`These Pokémon can be found while fishing.`)
                .addField(`Magikarp`,`Old/Good/Super Rod`,inline = true).addField(`Basculin`,`Old/Good/Super Rod`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route6);
        }

        else if(args[0]==="RockyCave" | args[0]==="rockycave" | args[0]==="Rockycave"){
            var RockyCave = new Discord.RichEmbed().setColor(`#b33c00`)
                .setTitle(`Rocky Cave`)
                .addField(`Sandshrew`,`20%`,inline = true).addField(`Zubat`,`20%`,inline = true)
                .addField(`Geodude`,`10%`,inline = true).addField(`Aron`,`10%`,inline = true)
                .addField(`Roggenrola`,`10%`,inline = true).addField(`Machop`,`10%`,inline = true)
                .addField(`Makuhita`,`10%`,inline = true).addField(`Woobat`,`4%`,inline = true)
                .addField(`Dwebble`,`4%`,inline = true).addField(`Onix`,`1%`,inline = true)
                .addField(`Riolu`,`1%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(RockyCave);
        }

        else if(args[0]==="PureTower" | args[0]==="puretower" | args[0]==="Puretower"){
            var PureTower = new Discord.RichEmbed().setColor(`#9966ff`)
                .setTitle(`Pure Tower`)
                .setDescription(`Floors: 6`)
                .addField(`Gastly`,`20%`,inline = true).addField(`Koffing`,`20%`,inline = true)
                .addField(`Duskull`,`10%`,inline = true).addField(`Sableye`,`10%`,inline = true)
                .addField(`Shuppet`,`10%`,inline = true).addField(`Banette`,`10%`,inline = true)
                .addField(`Gothiata`,`5%`,inline = true).addField(`Elgem`,`5%`,inline = true)
                .addField(`Misdreavus`,`4%`,inline = true).addField(`Murkrow`,`4%`,inline = true)
                .addField(`Solosis`,`1%`,inline = true).addField(`Litwick`,`1%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(PureTower);
        }

        else if(args[0]==="Route7" | args[0]==="route7"){
            var Route7 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 7`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Oddish`,`20%`,inline = true).addField(`Foongus`,`20%`,inline = true)
                .addField(`Snubbull`,`10%`,inline = true).addField(`Bellsprout`,`10%`,inline = true)
                .addField(`Pansage`,`10%`,inline = true).addField(`Budew`,`10%`,inline = true)
                .addField(`Sewaddle`,`5%`,inline = true).addField(`Seedot`,`5%`,inline = true)
                .addField(`Ralts`,`4%`,inline = true).addField(`Shroomish`,`4%`,inline = true)
                .addField(`Tangela`,`2%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route7);
        }

        else if(args[0]==="EletonPath" | args[0]==="eletonpath" | args[0]==="Eletonpath"){
            var EletonPath = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Eleton Path`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Magnemite`,`30%`,inline = true).addField(`Mareep`,`30%`,inline = true)
                .addField(`Plusle`,`10%`,inline = true).addField(`Minun`,`10%`,inline = true)
                .addField(`Blitzle`,`5%`,inline = true).addField(`Voltorb`,`5%`,inline = true)
                .addField(`Emolga`,`5%`,inline = true).addField(`Pachirisu`,`5%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(EletonPath);
        }

        else if(args[0]==="EletonCave" | args[0]==="eletoncave" | args[0]==="Eletoncave"){
            var EletonCave = new Discord.RichEmbed().setColor(`#b33c00`)
                .setTitle(`Eleton Cave`)
                .addField(`Magnemite`,`30%`,inline = true).addField(`Voltorb`,`30%`,inline = true)
                .addField(`Aron`,`10%`,inline = true).addField(`Klink`,`10%`,inline = true)
                .addField(`Ferroseed`,`5%`,inline = true).addField(`Bronzor`,`5%`,inline = true)
                .addField(`Tynamo`,`4%`,inline = true).addField(`Joltik`,`4%`,inline = true)
                .addField(`Emolga`,`1%`,inline = true).addField(`Drilbur`,`1%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(EletonCave);
        }

        else if(args[0]==="AerocliffBridge" | args[0]==="aerocliffbridge" | args[0]==="Aerocliffbridge"){
            var AerocliffBridge = new Discord.RichEmbed().setColor(`#4dffff`)
                .setTitle(`Aerocliff Bridge`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Pidgey`,`20%`,inline = true).addField(`Pidove`,`20%`,inline = true)
                .addField(`Poochyena`,`10%`,inline = true).addField(`Zigzagoon`,`10%`,inline = true)
                .addField(`Ekans`,`10%`,inline = true).addField(`Rattata`,`10%`,inline = true)
                .addField(`Mankey`,`5%`,inline = true).addField(`Starly`,`5%`,inline = true)
                .addField(`Sentret`,`4%`,inline = true).addField(`Hoppip`,`4%`,inline = true)
                .addField(`Aipom`,`1%`,inline = true).addField(`Seedot`,`1%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(AerocliffBridge);
        }

        else if(args[0]==="Route9" | args[0]==="route9"){
            var Route9 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 9`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Ralts`,`20%`,inline = true).addField(`Flabebe`,`20%`,inline = true)
                .addField(`Clefairy`,`20%`,inline = true).addField(`Slowpoke`,`20%`,inline = true)
                .addField(`Dedenne`,`10%`,inline = true).addField(`Marill`,`4%`,inline = true)
                .addField(`Kirlia`,`4%`,inline = true).addField(`Audino`,`1%`,inline = true)
                .addField(`Floette`,`1%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route9);
        }

        else if(args[0]==="WindflowBridge" | args[0]==="windflowbridge" | args[0]==="Windflowbridge"){
            var WindflowBridge = new Discord.RichEmbed().setColor(`#4dffff`)
                .setTitle(`Windflow Bridge`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Wingull`,`20%`,inline = true).addField(`Taillow`,`20%`,inline = true)
                .addField(`Spearow`,`10%`,inline = true).addField(`Pidove`,`10%`,inline = true)
                .addField(`Ducklett`,`10%`,inline = true).addField(`Staravia`,`10%`,inline = true)
                .addField(`Pidgeotto`,`10%`,inline = true).addField(`Swanna`,`5%`,inline = true)
                .addField(`Fletchling`,`5%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(WindflowBridge);
        }

        else if(args[0]==="MistyIsland" | args[0]==="mistyisland" | args[0]==="Mistyisland"){
            var MistyIsland = new Discord.RichEmbed().setColor(`#ff8533`)
                .setTitle(`Misty Island`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Poliwag`,`20%`,inline = true).addField(`Lotad`,`20%`,inline = true)
                .addField(`Tympole`,`10%`,inline = true).addField(`Buizel`,`10%`,inline = true)
                .addField(`Wooper`,`10%`,inline = true).addField(`Panpour`,`10%`,inline = true)
                .addField(`Poliwhirl`,`5%`,inline = true).addField(`Lombre`,`5%`,inline = true)
                .addField(`Palpitoad`,`4%`,inline = true).addField(`Quagsire`,`4%`,inline = true)
                .addField(`Absol`,`2%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(MistyIsland);
        }

        else if(args[0]==="DescentPath" | args[0]==="descentpath" | args[0]==="Descentpath"){
            var DescentPath = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Descent Path`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Pidgeotto`,`20%`,inline = true).addField(`Emolga`,`20%`,inline = true)
                .addField(`Staravia`,`20%`,inline = true).addField(`Tranquill`,`20%`,inline = true)
                .addField(`Fletchinder`,`10%`,inline = true).addField(`Flabebe`,`5%`,inline = true)
                .addField(`Hawlucha`,`5%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(DescentPath);
        }

        else if(args[0]==="DescentTower" | args[0]==="descenttower" | args[0]==="Descenttower"){
            var DescentTower = new Discord.RichEmbed().setColor(`#9966ff`)
                .setTitle(`Descent Tower`)
                .setDescription(`Floors: 10`)
                .addField(`Golbat`,`1F - 4F`,inline = true).addField(`Sableye`,`1F - 6F`,inline = true)
                .addField(`Mawile`,`1F - 8F`,inline = true).addField(`Banette`,`1F - 8F`,inline = true)
                .addField(`Swablu`,`1F - 6F`,inline = true).addField(`Dusclops`,`4F - 8F`,inline = true)
                .addField(`Claydol`,`5F - 8F`,inline = true).addField(`Inkay`,`7F - 8F`,inline = true)
                .addField(`Altaria`,`7F - 8F`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(DescentTower);
        }

        else if(args[0]==="Route10" | args[0]==="route10"){
            var Route10 = new Discord.RichEmbed().setColor(`#3399ff`)
                .setTitle(`Route 10`)
                .addField(`:surfer: Surf :surfer:`,`These Pokémon can be found while surfing.`)
                .addField(`Clauncher`,`60%`,inline = true).addField(`Skrelp`,`30%`,inline = true)
                .addField(`Buizel`,`5%`,inline = true).addField(`Shellos`,`4%`,inline = true)
                .addField(`Frillish`,`1%`,inline = true)
                .addField('\u200B','\u200B')
                .addField(`:fish: Fishing :fish:`,`These Pokémon can be found while fishing.`)
                .addField(`Magikarp`,`Old/Good Rod`,inline = true).addField(`Basculin`,`Good/Super Rod`,inline = true)
                .addField(`Carvanha`,`Good/Super Rod`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route10);
        }

        else if(args[0]==="Route8" | args[0]==="route8"){
            var Route8 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 8`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Lopunny`,`20%`,inline = true).addField(`Bibarel`,`20%`,inline = true)
                .addField(`Linoone`,`20%`,inline = true).addField(`Herdier`,`10%`,inline = true)
                .addField(`Watchog`,`10%`,inline = true).addField(`Raticate`,`10%`,inline = true)
                .addField(`Furret`,`10%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route8);
        }

        else if(args[0]==="Route11" | args[0]==="route11"){
            var Route11 = new Discord.RichEmbed().setColor(`#3399ff`)
                .setTitle(`Route 11`)
                .addField(`:surfer: Surf :surfer:`,`These Pokémon can be found while surfing.`)
                .addField(`Clauncher`,`60%`,inline = true).addField(`Alomomola`,`30%`,inline = true)
                .addField(`Poliwhirl`,`5%`,inline = true).addField(`Seadra`,`4%`,inline = true)
                .addField(`Wishiwashi`,`1%`,inline = true)
                .addField('\u200B','\u200B')
                .addField(`:fish: Fishing :fish:`,`These Pokémon can be found while fishing.`)
                .addField(`Magikarp`,`Old/Good Rod`,inline = true).addField(`Feebas`,`Good/Super Rod`,inline = true)
                .addField(`Remoraid`,`Good Rod`,inline = true).addField(`Finneon`,`Super Rod`,inline = true)
                .addField(`Carvanha`,`Super Rod`,inline = true).addField(`Wishiwashi`,`Super Rod`,inline = true)
                .addField(`Dratini`,`Super Rod`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route11);
        }

        else if(args[0]==="Route12" | args[0]==="route12"){
            var Route12 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 12`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Krabby`,`30%`,inline = true).addField(`Palpitoad`,`30%`,inline = true)
                .addField(`Tympole`,`20%`,inline = true).addField(`Stunfisk`,`20%`,inline = true)
                .addField('\u200B','\u200B')
                .addField(`:surfer: Surf :surfer:`,`These Pokémon can be found while surfing.`)
                .addField(`Clauncher`,`60%`,inline = true).addField(`Alomomola`,`30%`,inline = true)
                .addField(`Poliwhirl`,`5%`,inline = true).addField(`Seadra`,`4%`,inline = true)
                .addField(`Wishiwashi`,`1%`,inline = true)
                .addField('\u200B','\u200B')
                .addField(`:fish: Fishing :fish:`,`These Pokémon can be found while fishing.`)
                .addField(`Magikarp`,`Old/Good Rod`,inline = true).addField(`Feebas`,`Good/Super Rod`,inline = true)
                .addField(`Remoraid`,`Good Rod`,inline = true).addField(`Finneon`,`Super Rod`,inline = true)
                .addField(`Carvanha`,`Super Rod`,inline = true).addField(`Wishiwashi`,`Super Rod`,inline = true)
                .addField(`Dratini`,`Super Rod`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route12);
        }

        else if(args[0]==="SafariZone" | args[0]==="safarizone" | args[0]==="Safarizone"){
            var SafariZone = new Discord.RichEmbed().setColor(`#339933`)
                .setTitle(`Safari Zone`)
                .addField(`:triangular_flag_on_post: Area 1 :triangular_flag_on_post:`,`These Pokémon can be found in this area.`)
                .addField(`Grass`,`Nidoran ♂, Nidoran ♀, Rhyhorn, Doduo, Nidoking, Nidoqueen, Tauros, Scyther, Kangaskhan, Pinsir, Cyndaquil, Chikorita`,inline = true)
                .addField(`Surf`,`Psyduck, Marill, Slowpoke, Goldeen, Totodile`)
                .addField(`Fishing`,`Magikarp, Poliwag, Poliwhirl, Goldeen, Seaking, Tentacool, Wooper, Dratini`)
                .addField('\u200B','\u200B')
                .addField(`:triangular_flag_on_post: Area 2 :triangular_flag_on_post:`,`These Pokémon can be found in this area.`)
                .addField(`Grass`,`Vigoroth, Ninjask, Graveler, Volbeat, Illumise, Gloom, Dodrio, Roselia, Zangoose, Seviper, Torchic, Treecko`,inline = true)
                .addField(`Surf`,`Lombre, Masquerain, Seadra, Tentacruel, Mudkip`)
                .addField(`Fishing`,`Feebas, Luvdisc, Barboach, Carvanha`)
                .addField('\u200B','\u200B')
                .addField(`:triangular_flag_on_post: Area 3 :triangular_flag_on_post:`,`These Pokémon can be found in this area.`)
                .addField(`Grass`,`Kricketune, Wormadam, Vespiqueen, Honchkrow, Carnivine, Munchlax, Stunky, Skorupi, Riolu, Croagunk, turtwig, Chimchar`,inline = true)
                .addField(`Surf`,`Bibarel, Floatzel, Octillery, Mantyke, Piplup`)
                .addField(`Fishing`,`Feebas, Remoraid, Finneon, Barboach, Mantyke`)
                .addField('\u200B','\u200B')
                .addField(`:triangular_flag_on_post: Area 4 :triangular_flag_on_post:`,`These Pokémon can be found in this area.`)
                .addField(`Grass`,`Watchog, Liepard, Pansage, Pansear, Panpour, Blitzle, Audino, Cottonee, Petilil, Dwebble, Snivy, Tepig`,inline = true)
                .addField(`Surf`,`Tympole, Palpitoad, Basculin, Floatzel, Oshawott`)
                .addField(`Fishing`,`Basculin, Remoraid, Wailmer, Frillish, Alomomola`)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(SafariZone);
        }

        else if(args[0]==="Route13" | args[0]==="route13"){
            var Route13 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 13`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Kirlia`,`20%`,inline = true).addField(`Gothorita`,`20%`,inline = true)
                .addField(`Bronzor`,`10%`,inline = true).addField(`Solosis`,`10%`,inline = true)
                .addField(`Duosion`,`10%`,inline = true).addField(`Espurr`,`4%`,inline = true)
                .addField(`Elgyem`,`4%`,inline = true).addField(`Slowbro`,`1%`,inline = true)
                .addField(`Spiritomb`,`1%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route13);
        }

        else if(args[0]==="Route14" | args[0]==="route14"){
            var Route14 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 14`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Sandslash`,`20%`,inline = true).addField(`Carbink`,`20%`,inline = true)
                .addField(`Lairon`,`20%`,inline = true).addField(`Ursaring`,`10%`,inline = true)
                .addField(`Pangoro`,`10%`,inline = true).addField(`Miltank`,`10%`,inline = true)
                .addField(`Nidorina`,`4%`,inline = true).addField(`Nidorino`,`4%`,inline = true)
                .addField(`Rockruff`,`2%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route14);
        }

        else if(args[0]==="NaturalPark" | args[0]==="naturalpark" | args[0]==="Naturalpark"){
            var NaturalPark = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Natural Park`)
                .addField(`:sunrise: Day :sunrise:`,`These Pokémon can be found at Day time only.`)
                .addField(`Caterpie`,`20%`,inline = true).addField(`Weedle`,`20%`,inline = true)
                .addField(`Wurmple`,`20%`,inline = true).addField(`Sewaddle`,`20%`,inline = true)
                .addField(`Venipede`,`20%`,inline = true)
                .addField(`:crescent_moon: Night :crescent_moon:`,`These Pokémon can be found at Day time only.`)
                .addField(`Scatterbug`,`20%`,inline = true).addField(`Grubbin`,`20%`,inline = true)
                .addField(`Hoothoot`,`60%`,inline = true)
                .addField(`:beetle: **Bug Catching Contest** :beetle:`)
                .addField(`Caterpie`,`20%`,inline = true).addField(`Weedle`,`20%`,inline = true)
                .addField(`Metapod`,`10%`,inline = true).addField(`Kakuna`,`10%`,inline = true)
                .addField(`Paras`,`10%`,inline = true).addField(`Venonat`,`10%`,inline = true)
                .addField(`Butterfree`,`5%`,inline = true).addField(`Beedrill`,`5%`,inline = true)
                .addField(`Scyther`,`5%`,inline = true).addField(`Pinsir`,`5%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(NaturalPark);
        }

        else if(args[0]==="Mt.Snarlet" | args[0]==="mt.snarlet" | args[0]==="Mt.snarlet" | args[0]==="MtSnarlet" | args[0]==="Mtsnarlet" | args[0]==="mtsnarlet"){
            var MtSnarlet = new Discord.RichEmbed().setColor(`#b33c00`)
                .setTitle(`Mt. Snarlet`)
                .addField(`Land`,`Graveler, Onix, Diggersby, Braviary, Druddigon, Fraxure, Absol, Skarmory, Lycanroc (Midday & Midnight), Nidoqueen, Nidoking, Pupitar, Exploud, Hariyama, Mawile, Magnezone, Probopass, Boldore, Barbaracle, Machoke, Excadrill, Lairon, Steelix, Gabite, Flygon, Aggron, Noivern, Haxorus, Garchomp, Sliggoo, Altaria, Shelgon, Goodra, Dragonair, Jangmo-o, Tyranitar, Metagross, Dragonite`)
                .addField(`Surf`,`Seadra, Basculin, Gyarados, Lapras, Dratini`)
                .addField(`Fishing`,`Not vailable`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(MtSnarlet);
        }

        else if(args[0]==="Route15" | args[0]==="route15"){
        message.channel.sendMessage(`Pokémon Mega Adventure doesn't have Route 15 lol :joy:`)
        }

        else if(args[0]==="Route16" | args[0]==="route16"){
            var Route16 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 16`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Medicham`,`20%`,inline = true).addField(`Amoonguss`,`20%`,inline = true)
                .addField(`Houndoom`,`20%`,inline = true).addField(`Camerupt`,`10%`,inline = true)
                .addField(`Absol`,`10%`,inline = true).addField(`Skuntank`,`10%`,inline = true)
                .addField(`Bouffalant`,`5%`,inline = true).addField(`Klefki`,`5%`,inline = true)
                .addField(`Diggersby`,`4%`,inline = true).addField(`Lickilicky`,`4%`,inline = true)
                .addField(`Zoroark`,`1%`,inline = true).addField(`Ditto`,`1%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route16);
        }

        else if(args[0]==="Route17" | args[0]==="route17"){
            var Route17 = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Route 17`)
                .addField(`:sunrise: Day :sunrise: | :crescent_moon: **Night** :crescent_moon:`,`These Pokémon can be found at Day/Night time.`)
                .addField(`Growlithe`,`20%`,inline = true).addField(`Vulpix`,`20%`,inline = true)
                .addField(`Shuckle`,`20%`,inline = true).addField(`Teddiursa`,`10%`,inline = true)
                .addField(`Phanpy`,`10%`,inline = true).addField(`Sandile`,`10%`,inline = true)
                .addField(`Darumaka`,`5%`,inline = true).addField(`Scraggy`,`5%`,inline = true)
                .addField(`Stunfisk`,`4%`,inline = true).addField(`Bouffalant`,`4%`,inline = true)
                .addField(`Beldum`,`2%`,inline = true)
                .setFooter(`[Author: Lio] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Encounters`);
                
            message.channel.sendEmbed(Route17);
        }
        
        else {message.channel.send("No result found, there must have been some mistakes in your command. Remove space between words")}
    };
});

///////////////////////////////////////////////////////////////////////////////////////
//                 Database of Mega Stones [Pokémon Mega Adventure]                  //
///////////////////////////////////////////////////////////////////////////////////////

pw.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    var messageArray = message.content.split(` `);
    var command = messageArray[0];
    var args = messageArray.slice(1);
    var channelname = messageArray[1];
    var rep = messageArray[2];
    
    if(command === `pma${prefix}mega`){
        if(args[0]==="Venusaur" | args[0]==="venusaur"){
            var Venusaurite = new Discord.RichEmbed().setColor(`#47d147`)
                .setTitle(`Venusaur`)
                .addField(`Venusaurite`,`Location: Sunnyvall City (May's Gift), Mega Stone Shop`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/0/01/11.PNG/revision/latest?cb=20170418163509`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Venusaurite);
        }   
        
        else if(args[0]==="Charizard" | args[0]==="charizard"){
            var Charizardite = new Discord.RichEmbed().setColor(`#ff3300`)
                .setTitle(`Charizard`)
                .addField(`Charizardite X/Charizardite Y`,`Location: Sunnyvall City (May's Gift), Mega Stone Shop`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/0/01/11.PNG/revision/latest?cb=20170418163509`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Charizardite);
        }   

        else if(args[0]==="Blastoise" | args[0]==="blastoise"){
            var Blastoisinite = new Discord.RichEmbed().setColor(`#0066ff`)
                .setTitle(`Blastoise`)
                .addField(`Blastoisinite`,`Location: Sunnyvall City (May's Gift), Mega Stone Shop`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/0/01/11.PNG/revision/latest?cb=20170418163509`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Blastoisinite);
        }

        else if(args[0]==="Beedrill" | args[0]==="beedrill"){
            var Beedrillite = new Discord.RichEmbed().setColor(`#ffff00`)
                .setTitle(`Beedrill`)
                .addField(`Beedrillite`,`Location: 1st Prize in Bug Catching Contest`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/6/61/34.PNG/revision/latest?cb=20170418195451`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Beedrillite);
        }   
        
        else if(args[0]==="Pidgeot" | args[0]==="pidgeot"){
            var Pidgeotite = new Discord.RichEmbed().setColor(`#b38600`)
                .setTitle(`Pidgeot`)
                .addField(`Pidgeotite`,`Location: Aerocliff Bridge`)
                .setImage(`https://vignette4.wikia.nocookie.net/pkmmga/images/6/6a/10.PNG/revision/latest?cb=20170418155004`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Pidgeotite);
        }   
    
        else if(args[0]==="Alakazam" | args[0]==="alakazam"){
            var Alakazite = new Discord.RichEmbed().setColor(`#ffff00`)
                .setTitle(`Alakazam`)
                .addField(`Alakazite`,`Location: Synchrone Cave`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/6/69/24.PNG/revision/latest?cb=20170418183350`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Alakazite);
        }   

        else if(args[0]==="Slowbro" | args[0]==="slowbro"){
            var Slowbronite = new Discord.RichEmbed().setColor(`#ff66ff`)
                .setTitle(`Slowbro`)
                .addField(`Slowbronite`,`Location: Koriyama City`)
                .setImage(`https://vignette1.wikia.nocookie.net/pkmmga/images/f/f4/6.PNG/revision/latest?cb=20170418150015`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Slowbronite);
        }   

        else if(args[0]==="Gengar" | args[0]==="gengar"){
            var Gengarite = new Discord.RichEmbed().setColor(`#6600cc`)
                .setTitle(`Gengar`)
                .addField(`Gengarite`,`Location: Underground Path`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/1/11/13.PNG/revision/latest?cb=20170419134531`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Gengarite);
        }   

        else if(args[0]==="Kangaskhan" | args[0]==="kangaskhan"){
            var Kangaskhanite = new Discord.RichEmbed().setColor(`#c68c53`)
                .setTitle(`Kangaskhan`)
                .addField(`Kangaskhanite`,`Location: Route 1`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Kangaskhanite);
        }   

        else if(args[0]==="Pinsir" | args[0]==="pinsir"){
            var Pinsirite = new Discord.RichEmbed().setColor(`#c68c53`)
                .setTitle(`Pinsir`)
                .addField(`Pinsirite`,`Location: 1st Prize in Bug Catching Contest`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Pinsirite);
        }   
        
        else if(args[0]==="Gyarados" | args[0]==="gyarados"){
            var Gyaradosite = new Discord.RichEmbed().setColor(`#0066ff`)
                .setTitle(`Gyarados`)
                .addField(`Gyaradosite`,`Location: Route 10`)
                .setImage(`https://vignette1.wikia.nocookie.net/pkmmga/images/4/4a/19.PNG/revision/latest?cb=20170418175437`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Gyaradosite);
        }   
        
        else if(args[0]==="Aerodactyl" | args[0]==="aerodactyl"){
            var Aerodactylite = new Discord.RichEmbed().setColor(`#cc99ff`)
                .setTitle(`Aerodactyl`)
                .addField(`Aerodactylite`,`Location: Mt. Snarlet`)
                .setImage(`https://vignette1.wikia.nocookie.net/pkmmga/images/0/08/30.PNG/revision/latest?cb=20170418193923`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Aerodactylite);
        }   
        
        else if(args[0]==="Mewtwo" | args[0]==="mewtwo"){
            var Mewtwonite = new Discord.RichEmbed().setColor(`#cc99ff`)
                .setTitle(`Mewtwo`)
                .addField(`Mewtwonite X/Mewtwonite Y`,`Location: Synchrone Cave`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Mewtwonite);
        }   
        
        else if(args[0]==="Ampharos" | args[0]==="ampharos"){
            var Ampharosite = new Discord.RichEmbed().setColor(`#ffff00`)
                .setTitle(`Ampharos`)
                .addField(`Ampharosite`,`Location: Eleton Cave`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Ampharosite);
        }   
        
        else if(args[0]==="Steelix" | args[0]==="steelix"){
            var Steelixite = new Discord.RichEmbed().setColor(`#8c8c8c`)
                .setTitle(`Steelix`)
                .addField(`Steelixite`,`Location: Mt. Snarlet`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Steelixite);
        }
        
        else if(args[0]==="Scizor" | args[0]==="scizor"){
            var Scizorite = new Discord.RichEmbed().setColor(`#ff0000`)
                .setTitle(`Scizor`)
                .addField(`Scizorite`,`Location: 1st Prize in Bug Catching Contest`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Scizorite);
        }   
        
        else if(args[0]==="Heracross" | args[0]==="heracross"){
            var Heracronite = new Discord.RichEmbed().setColor(`#0000e6`)
                .setTitle(`Heracross`)
                .addField(`Heracronite`,`Location: 1st Prize in Bug Catching Contest`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Heracronite);
        }   
        
        else if(args[0]==="Houndoom" | args[0]==="houndoom"){
            var Houndoominite = new Discord.RichEmbed().setColor(`#0d0d0d`)
                .setTitle(`Houndoom`)
                .addField(`Houndoominite`,`Location: Safari Zone`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Houndoominite);
        }   
        
        else if(args[0]==="Tyranitar" | args[0]==="tyranitar"){
            var Tyranitarite = new Discord.RichEmbed().setColor(`#99ff66`)
                .setTitle(`Tyranitar`)
                .addField(`Tyranitarite`,`Location: Victory Road`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Tyranitarite);
        }   
        
        else if(args[0]==="Sceptile" | args[0]==="sceptile"){
            var Sceptilite = new Discord.RichEmbed().setColor(`#33cc33`)
                .setTitle(`Sceptile`)
                .addField(`Sceptilite`,`Location: Mega Stone Shop`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Sceptilite);
        }   
        
        else if(args[0]==="Blaziken" | args[0]==="blaziken"){
            var Blazikenite = new Discord.RichEmbed().setColor(`#ff1a1a`)
                .setTitle(`Blaziken`)
                .addField(`Blazikenite`,`Location: Mega Stone Shop`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Blazikenite);
        }   
        
        else if(args[0]==="Swampert" | args[0]==="swampert"){
            var Swampertite = new Discord.RichEmbed().setColor(`#3366ff`)
                .setTitle(`Swampert`)
                .addField(`Swampertite`,`Location: Mega Stone Shop`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Swampertite);
        }   
        
        else if(args[0]==="Gardevoir" | args[0]==="gardevoir"){
            var Gardevoirite = new Discord.RichEmbed().setColor(`#ff66ff`)
                .setTitle(`Gardevoir`)
                .addField(`Gardevoirite`,`Location: Fairy City Market`)
                .setImage(`https://vignette4.wikia.nocookie.net/pkmmga/images/d/df/15.PNG/revision/latest?cb=20170418201421`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Gardevoirite);
        }   
        
        else if(args[0]==="Mawile" | args[0]==="mawile"){
            var Mawilite = new Discord.RichEmbed().setColor(`#ffff33`)
                .setTitle(`Mawile`)
                .addField(`Mawilite`,`Location: Descent Ground`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Mawilite);
        }   
        
        else if(args[0]==="Aggron" | args[0]==="aggron"){
            var Aggronite = new Discord.RichEmbed().setColor(`#8c8c8c`)
                .setTitle(`Aggron`)
                .addField(`Aggronite`,`Location: Rocky Cave`)
                .setImage(`https://vignette1.wikia.nocookie.net/pkmmga/images/7/7f/4.PNG/revision/latest?cb=20170418143901`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Aggronite);
        }   
        
        else if(args[0]==="Medicham" | args[0]==="medicham"){
            var Medichamite = new Discord.RichEmbed().setColor(`#ff1a75`)
                .setTitle(`Medicham`)
                .addField(`Medichamite`,`Location: Synchrone Cave Underground`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/1/1e/26.PNG/revision/latest?cb=20170418183654`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Medichamite);
        }   
        
        else if(args[0]==="Manectric" | args[0]==="manectric"){
            var Manectite = new Discord.RichEmbed().setColor(`#ffff00`)
                .setTitle(`Manectric`)
                .addField(`Manectite`,`Location: Power Plant`)
                .setImage(`https://vignette4.wikia.nocookie.net/pkmmga/images/c/c7/Capture.PNG/revision/latest?cb=20170510093840`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Manectite);
        }   
        
        else if(args[0]==="Sharpedo" | args[0]==="sharpedo"){
            var Sharpedonite = new Discord.RichEmbed().setColor(`#ffff00`)
                .setTitle(`Sharpedo`)
                .addField(`Sharpedonite`,`Location: Underwater (Seaside Beach)`)
                .setImage(`https://vignette2.wikia.nocookie.net/pkmmga/images/d/d2/35.PNG/revision/latest?cb=20170418195511`)
                .setFooter(`[Author: Lio, Fall2Ground] Check Wikia for more!`)
                .setURL(`http://pkmmga.wikia.com/wiki/Mega_Stones`);
                
            message.channel.sendEmbed(Sharpedonite);
        }   
        
        else if(args[0]==="Camerupt"){
        message.channel.sendMessage(`**Cameruptite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Altaria"){
        message.channel.sendMessage(`**Altarianite - Location:** Descent Tower, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Banette"){
        message.channel.sendMessage(`**Banettite - Location:** Pure Tower, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Absol"){
        message.channel.sendMessage(`**Absolite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Glalie"){
        message.channel.sendMessage(`**Glalietite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Salamence"){
        message.channel.sendMessage(`**Salamencite - Location:** Mt. Snarlet, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Metagross"){
        message.channel.sendMessage(`**Metagrossite - Location:** Ancientus Cave, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Latios"){
        message.channel.sendMessage(`**Latiosite - Location:** Descent Forest (Latios' Gift)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Latias"){
        message.channel.sendMessage(`**Latiasite - Location:** ??? (v1.3)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Lopunny"){
        message.channel.sendMessage(`**Lopunnite - Location:** Route 8, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Sableye"){
        message.channel.sendMessage(`**Sablenite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Garchomp"){
        message.channel.sendMessage(`**Garchompite - Location:** Descent Tower, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Lucario"){
        message.channel.sendMessage(`**Lucarionite - Location:** Route 13, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Abomasnow"){
        message.channel.sendMessage(`**Abomasite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Gallade"){
        message.channel.sendMessage(`**Galladite - Location:** Route 17, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Rayquaza"){
        message.channel.sendMessage(`Hahaha, noob. Google it bruh.
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Diancie"){
        message.channel.sendMessage(`**Diancite - Location:** Mt. Snarlet (Hiker's Quest), Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Audino"){
        message.channel.sendMessage(`**Audinite - Location:** In your dream mate ;)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   

        else {message.channel.send("No result found, there must have been some mistakes in your command. *Note:* There isn't a space between 2 characters & don't forget Capital letters.")}
    }
});