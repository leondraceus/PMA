const botsettings = require("./settings.json");
const Discord = require('discord.js');
const PW = new Discord.Client();

console.log(settings.token);

function commandIs(str , msg){
    return msg.content.startsWith("pma-" + str);
}

mga.on('ready', () => {
  mga.user.setGame('pma-commands')
});

mga.on('guildMemberAdd', member => {
    member.send(`:door: **__Welcome to Pokémon Mega Adventure Discord__** :door:
I hope you enjoy your time here and follow our <#395226662276431874> | <#395227126175105024> `);
});

mga.on('message', (message) => {

    var args = message.content.split(/[ ]+/);

    if(commandIs("commands", message)){
        message.channel.sendMessage(`**Commands:**
        **pma-commands** - Show commands list.
        **pma-encounter** - Show encounters in a specific area (*Example: -encounter Route1*).
        **pma-mega** - Show Mega Stone's location (*Example: -mega Lucario*).
        **-control** - Show controls in Game.
        **-trade** - Show in-game trades.
        **-gift** - Show in-game gifts (Mystery Gift, Pokemon given by NPCs).
        **-about** - Show Pokémon Mega Adventure latest update.
        Check out Wikia for more: http://pkmmga.wikia.com/wiki/Pok%C3%A9mon_Mega_Adventure_Wiki
        `)
    }
    
    if(command === `pma${prefix}encounter`){
        if(args[0]==="Route1"){
        message.channel.sendMessage(`**Route 1**
            :sunrise: **Day** :sunrise:
            RATTATA - 21%
            PIDGEY - 21%
            SENTRET - 10%
            POOCHYENA - 10%
            ZIGZAGOON - 10%
            STARLY - 10%
            BIDOOF - 5%
            PATRAT - 5%
            LILLIPUP - 4%
            PURRLOIN - 4%

            :crescent_moon: **Night** :crescent_moon:
            RATTATA - 40%
            HOOTHOOT - 40%
            SPINARAK - 10%
            SPINARAK - 10%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route2"){
        message.channel.sendMessage(`**Route 2**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            EKANS - 20%
            BUNEARY - 20%
            GEODUDE - 20%
            DRIFLOON - 10%
            NOSEPASS - 10%
            NIDORANmA - 5%
            NIDORANfE - 5%
            ROGGENROLA - 4%
            SHINX - 4%
            SEEDOT - 1%
            ONIX - 1%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route3"){
        message.channel.sendMessage(`**Route 3**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            NIDORAN(male) - 20%
            NIDORAN(female) - 20%
            MANKEY - 10%
            MARILL - 10%
            AIPOM - 20%
            TAILLOW - 20%

            :surfer: **Surf** :surfer:
            GOLDEEN, CARVANHA, FEEBAS
            MAGIKARP, BASCULIN

            :fishing_pole_and_fish: **Fishing** :fishing_pole_and_fish:
            GOLDEEN, CARVANHA, FEEBAS
            MAGIKARP, BASCULIN, SEAKING

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        } 

        else if(args[0]==="CorrdaForest"){
        message.channel.sendMessage(`**Corrda Forest**
            :sunrise: **Day** :sunrise:
            CATERPIE - 30%
            WEEDLE - 30%
            METAPOD - 10%
            KAKUNA - 10%
            SPINARAK - 5%
            LEDYBA - 5%
            WURMPLE - 4%
            SEWADDLE - 4%
            VENIPEDE - 1%
            KRICKETOT - 1%

            :crescent_moon: **Night** :crescent_moon:
            CATERPIE - 20%
            WEEDLE - 20$
            VENONAT - 20%
            METAPOD - 10%
            KAKUNA - 10%
            SPINARAK - 5%
            LEDYBA - 5%
            WURMPLE - 4%
            SEWADDLE - 4%
            VENIPEDE - 1%
            HOOTHOOT - 1%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route4"){
        message.channel.sendMessage(`**Route 4**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            SNUBBULL - 20%
            SHINX - 20%
            MANKEY - 10%
            ABRA - 10%
            PICHU - 10%
            NINCADA - 10%
            BUDEW - 10%
            CROAGUNK - 4%
            DWEBBLE - 4%
            RIOLU - 1%
            SCRAGGY - 1%

            :surfer: **Surf** :surfer:
            MAGIKARP, BASCULIN

            :fishing_pole_and_fish: **Fishing** :fishing_pole_and_fish:
            MAGIKARP, BASCULIN

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route5"){
        message.channel.sendMessage(`**Route 5**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            SLOWPOKE - 20%
            MAREEP - 20%
            YANMA - 10%
            NINCADA - 10%
            BUDEW - 10%
            SEWADDLE - 10%
            VENIPEDE - 10%
            STUNKY - 5%
            GLAMEOW - 5%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="PineForest"){
        message.channel.sendMessage(`**Pine Forest**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            CATERPIE - 20%
            WEEDLE - 20%
            METAPOD - 10%
            KAKUNA - 10%
            WURMPLE - 10%
            SEWADDLE - 10%
            VENIPEDE - 10%
            SILCOON - 5%
            CASCOON - 5%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route6"){
        message.channel.sendMessage(`**Route 6**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            BELLSPROUT - 20% 
            GRIMER - 20%
            PINECO - 10%
            SLAKOTH - 10%
            BUDEW - 10%
            PIDOVE - 10%
            LOTAD - 10%
            WOOBAT - 10%

            :surfer: **Surf** :surfer:
            MAGIKARP, BASCULIN, LOTAD, BUIZEL

            :fishing_pole_and_fish: **Fishing** :fishing_pole_and_fish:
            MAGIKARP, BASCULIN

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="RockyCave"){
        message.channel.sendMessage(`:mountain: **Rocky Cave** :mountain:
            SANDSHREW - 20%
            ZUBAT - 20%
            GEODUDE - 10%
            ARON - 10%
            ROGGENROLA - 10%
            MACHOP - 10%
            MAKUHITA - 10%
            WOOBAT - 4%
            DWEBBLE - 4%
            ONIX - 1%
            RIOLU - 1%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="PureTower"){
        message.channel.sendMessage(`:tokyo_tower: **Pure Tower** :tokyo_tower: 
            GASTLY - 20 %
            KOFFING - 20%
            GRIMER - 10%
            SABLEYE - 10%
            SHUPPET - 10%
            BANETTE - 10%
            GOTHITA - 5%
            ELGYEM - 5%
            MISDREAVUS - 4%
            MURKROW - 4%
            SOLOSIS - 1%
            LITWICK - 1%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route7"){
        message.channel.sendMessage(`**Route 7**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            ODDISH - 20%
            FOONGUS - 20%
            SNUBBULL - 10%
            BELLSPROUT - 10%
            RALTS - 10%
            BUDEW - 10%
            SEWADDLE - 5%
            SEEDOT - 5%
            LOTAD - 4%
            SHROOMISH - 4%
            SNIVY - 2%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="EletonPath"){
        message.channel.sendMessage(`**Eleton Path**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            MAGNEMITE - 20%
            MAREEP - 20%
            MAGNEMITE - 10%
            MAREEP - 10%
            PLUSLE - 10%
            MINUN - 10%
            BLITZLE - 5%
            VOLTORB - 5%
            EMOLGA - 5%
            PACHIRISU - 5%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="EletonCave"){
        message.channel.sendMessage(`:mountain: **Eleton Cave** :mountain:
            MAGNEMITE - 30%
            VOLTORB - 30%
            ARON - 10%
            KLINK - 10%
            FERROSEED - 5%
            BRONZOR - 5%
            TYNAMO - 4%
            JOLTIK - 4%
            EMOLGA - 1%
            DRILBUR - 1%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="AerocliffBridge"){
        message.channel.sendMessage(`:bridge_at_night: **Aerocliff Bridge** :bridge_at_night:
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            PIDGEY - 20%
            PIDOVE - 20%
            POOCHYENA - 10%
            ZIGZAGOON - 10%
            RATTATA - 10%
            EKANS - 10%
            MANKEY - 5%
            STARLY - 5%
            SENTRET - 4%
            HOPPIP - 4%
            AIPOM - 1%
            SEEDOT - 1%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route9"){
        message.channel.sendMessage(`**Route 9** 
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            RALTS - 20%
            FLABEBE - 20%
            CLEFAIRY - 20%
            SLOWPOKE - 20%
            DEDENNE - 20%
            MARILL - 4%
            KIRLIA - 4%
            AUDINO - 1%
            FLOETTE - 1%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="WindflowBridge"){
        message.channel.sendMessage(`:bridge_at_night: **Windflow Bridge** :bridge_at_night:
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            PIDGEY - 20%
            STARLY - 20%
            SPEAROW - 10%
            PIDOVE - 10%
            DUCKLETT - 10%
            STARAVIA - 10%
            PIDGEOTTO - 10%
            SWANNA - 5%
            FLETCHLING - 5%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="MistyIsland"){
        message.channel.sendMessage(`:island: **Misty Island** :island:
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            POLIWAG - 20%
            LOTAD - 20%
            TYMPOLE - 10%
            BUIZEL - 10%
            WOOPER - 10%
            PANPOUR - 10%
            POLIWHIRL - 5%
            LOMBRE - 5%
            PALPITOAD - 4% 
            QUAGSIRE - 4%
            ABSOL - 2%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="DescentPath"){
        message.channel.sendMessage(`**Descent Path** 
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            PIDGEOTTO - 20%
            EMOLGA - 20%
            STARAVIA - 20%
            TRANQUILL - 20%
            FLETCHINDER - 10%
            FLABEBE - 5%
            HAWLUCHA - 5%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="DescentTower"){
        message.channel.sendMessage(`:tokyo_tower: **Descent Tower** :tokyo_tower:
            CLAYDOL, INKAY, MAWILE 
            BANETTE, ALTARIA, DUSCLOPS
            GOLBAT, SABLEYE, SWABLU

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route10"){
        message.channel.sendMessage(`**Route 10**
            :surfer: **Surf** :surfer:
            CLAUNCHER, SKRELP, BUIZEL, SHELLOS, FRILLISH

            :fishing_pole_and_fish: **Fishing** :fishing_pole_and_fish: 
            MAGIKARP, BASCULIN, CARVANHA

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route8"){
        message.channel.sendMessage(`**Route 8** 
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            LOPUNNY - 20%
            BIBAREL - 20%
            LINOONE - 20%
            HERDIER - 10%
            WATCHOG - 10%
            RATICATE - 10%
            FURRET - 10%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route11"){
        message.channel.sendMessage(`**Route 11**
            :surfer: **Surf** :surfer:
            CLAUNCHER, ALOMOMOLA, POLIWAG, POLIWHIRL, SEADRA

            :fishing_pole_and_fish: **Fishing** :fishing_pole_and_fish: 
            MAGIKARP, FEEBAS, POLIWAG, POLIWHIRL
            REMORAID, CARVANHA, FINNEON, DRATINI

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route12"){
        message.channel.sendMessage(`**Route 12**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            KRABBY - 30%
            TYMPOLE - 20%
            PALPITOAD - 30%
            STUNFISK - 20%

            :surfer: **Surf** :surfer:
            CLAUNCHER, ALOMOMOLA, POLIWAG, POLIWHIRL, SEADRA

            :fishing_pole_and_fish: **Fishing** :fishing_pole_and_fish: 
            MAGIKARP, FEEBAS, POLIWAG, POLIWHIRL
            REMORAID, CARVANHA, FINNEON, DRATINI

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="SafariZone"){
        message.channel.sendMessage(`Please type !encounter SafariZone1/SafariZone2/SafariZone3/SafariZone4`)
        }

        else if(args[0]==="SafariZone1"){
        message.channel.sendMessage(`**Safari Zone**
            :triangular_flag_on_post: Area 1 :triangular_flag_on_post: 
            NIDORAN(male) - 20%
            NIDORAN(female) - 20%
            RHYHORN - 10%
            DODUO - 10%
            NIDOKING - 10%
            NIDOQUEEN - 10%
            TAUROS - 5%
            SCYTHER - 5%
            KANGASKHAN - 4% 
            PINSIR - 4%
            CYNDAQUIL - 1%
            CHIKORITA - 1%

            :surfer: **Surf** :surfer:
            PSYDUCK, MARILL, SLOWPOKE, GOLDEEN, TOTODILE

            :fishing_pole_and_fish: **Fishing** :fishing_pole_and_fish: 
            MAGIKARP, FEEBAS, POLIWAG, POLIWHIRL
            REMORAID, CARVANHA, FINNEON, DRATINI

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="SafariZone2"){
        message.channel.sendMessage(`**Safari Zone**
            :triangular_flag_on_post: Area 2 :triangular_flag_on_post: 
            VIGOROTH - 20%
            NINJASK - 20%
            GRAVELER - 10%
            VOLBEAT - 10%
            ILLUMISE - 10%
            GLOOM - 10%
            DODRIO - 5%
            ROSELIA - 5%
            ZANGOOSE - 4%
            SEVIPER - 4%
            TORCHIC - 1%
            TREECKO - 1%

            :surfer: **Surf** :surfer:
            PSYDUCK, MARILL, SLOWPOKE, GOLDEEN, MUDKIP

            :fishing_pole_and_fish: **Fishing** :fishing_pole_and_fish: 
            MAGIKARP, FEEBAS, POLIWAG, POLIWHIRL
            REMORAID, CARVANHA, FINNEON, DRATINI

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="SafariZone3"){
        message.channel.sendMessage(`**Safari Zone**
            :triangular_flag_on_post: Area 3 :triangular_flag_on_post: 
            KRICKETUNE - 20%
            WORMADAM - 20%
            VESPIQUEN - 10%
            HONCHKROW - 10%
            CARNIVINE - 10%
            MUNCHLAX - 10%
            STUNKY - 5%
            SKORUPI - 5%
            RIOLU - 4%
            CROAGUNK - 4% 
            TURTWIG - 1%
            CHIMCHAR - 1%

            :surfer: **Surf** :surfer:
            PSYDUCK, MARILL, SLOWPOKE, GOLDEEN, PIPLUP

            :fishing_pole_and_fish: **Fishing** :fishing_pole_and_fish: 
            MAGIKARP, FEEBAS, POLIWAG, POLIWHIRL
            REMORAID, CARVANHA, FINNEON, DRATINI

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="SafariZone4"){
        message.channel.sendMessage(`**Safari Zone**
            :triangular_flag_on_post: Area 4 :triangular_flag_on_post:
            WATCHOG - 20%
            LIEPARD - 20%
            PANSAGE - 10%
            PANSEAR - 10%
            PANPOUR - 10%
            BLITZLE - 10%
            AUDINO - 5%
            COTTONEE - 5%
            PETILIL - 4%
            DWEBBLE - 4%
            SNIVY - 1%
            TEPIG - 1%

            :surfer: **Surf** :surfer:
            PSYDUCK, MARILL, SLOWPOKE, GOLDEEN, OSHAWOTT

            :fishing_pole_and_fish: **Fishing** :fishing_pole_and_fish: 
            MAGIKARP, FEEBAS, POLIWAG, POLIWHIRL
            REMORAID, CARVANHA, FINNEON, DRATINI

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route13"){
        message.channel.sendMessage(`**Route 13**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            KIRLIA - 20%
            GOTHORITA - 20%
            KADABRA - 20%
            BRONZOR - 10%
            SOLOSIS - 10%
            DUOSION - 10%
            ESPURR - 4%
            ELGYEM - 4%
            SLOWBRO - 1%
            SPIRITOMB - 1%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route14"){
        message.channel.sendMessage(`**Route 14**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            SANDSLASH - 20%
            CARBINK - 20%
            LAIRON - 20%
            URSARING - 10%
            PANGORO - 10%
            MILTANK - 10%
            NIDORINA - 4%
            NIDORINO - 4%
            ROCKRUFF - 2%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="NaturalPark"){
        message.channel.sendMessage(`**Natural Park**
            :sunrise: **Day** :sunrise: 
            CATERPIE - 25%
            WEEDLE - 25%
            PIDGEY - 20%
            METAPOD - 15%
            KAKUNA - 15%

            :crescent_moon: **Night** :crescent_moon:
            HOOTHOOT - 100%

            :beetle: **Bug Catching Contest** :beetle:
            CATERPIE, WEEDLE, METAPOD, KAKUNA
            PARAS, VENONAT, BUTTERFREE, BEEDRILL
            SCYTHER, PINSIR, SCYTHER, PINSIR

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Mt.Snarlet"){
        message.channel.sendMessage(`:mountain: **Mt. Snarlet** :mountain:
            GRAVELER, ONIX, DIGGERSBY
            BRAVIARY, DRUDDIGON, FRAXURE
            ABSOL, SKARMORY
            LYCANROC(Midday), LYCANROC(Midnight)
            NIDOQUEEN, NIDOKING, PUPITAR
            EXPLOUD, HARIYAMA, MAWILE
            MAGNEZONE, PROBOPASS, BOLDORE
            BARBARACLE, MACHOKE, EXCADRILL
            LAIRON, STEELIX, GABITE
            FLYGON, AGGRON, NOIVERN
            HAXORUS, GARCHOMP, SLIGGOO
            ALTARIA, SHELGON, GOODRA
            DRAGONAIR, JANGMOO, TYRANITAR
            METAGROSS, DRAGONITE
            
            :surfer: **Surf** :surfer:
            SEADRA, BASCULIN, GYARADOS
            LAPRAS, DRATINI

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route15"){
        message.channel.sendMessage(`The game doesn't have Route 15 lol.`)
        }

        else if(args[0]==="Route16"){
        message.channel.sendMessage(`**Route 14**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            MEDICHAM - 20%
            AMOONGUSS - 20%
            HOUNDOOM - 10%
            CAMERUPT - 10%
            ABSOL - 10%
            SKUNTANK - 10%
            BOUFFALANT - 5%
            LYCANROC(Midday) - 5%
            DIGGERSBY - 4%
            LICKILICKY - 4%
            ZOROARK - 1%
            DITTO - 1%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }

        else if(args[0]==="Route17"){
        message.channel.sendMessage(`**Route 17**
            :sunrise: **Day** :sunrise: :crescent_moon: **Night** :crescent_moon:
            GROWLITHE - 20%
            VULPIX - 20%
            SHUCKLE - 10%
            TEDDIURSA - 10%
            PHANPY - 10%
            SANDILE - 10%
            DARUMAKA - 5%
            SCRAGGY - 5%
            STUNFISK - 4%
            BOUFFALANT - 4%
            BELDUM - 2%

            :book: **Encounters Wikia** :book:
            http://pkmmga.wikia.com/wiki/Encounters
            `)
        }
        
        else {message.channel.send("No result found, there must have been some mistakes in your command. *Note:* There isn't a space between 2 characters & don't forget Capital letters.")}
    }

    if(commandIs("mega", message)){
        if(args[0]==="Venusaur"){
        message.channel.sendMessage(`**Venusaurite - Location:** Sunnyvall City (May's Gift), Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Charizard"){
        message.channel.sendMessage(`**Charizardite Y/Charizardite X - Location:** Sunnyvall City (May's Gift), Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   

        else if(args[0]==="Blastoise"){
        message.channel.sendMessage(`**Blastoisinite - Location:** Sunnyvall City (May's Gift), Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   

        else if(args[0]==="Beedrill"){
        message.channel.sendMessage(`**Beedrillite - Location:** 1st Prize (Bug Catching Contest), Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Pidgeot"){
        message.channel.sendMessage(`**Pidgeotite - Location:** Aerocliff Bridge, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
    
        else if(args[0]==="Alakazam"){
        message.channel.sendMessage(`**Alakazite - Location:** Synchrone Cave, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   

        else if(args[0]==="Slowbro"){
        message.channel.sendMessage(`**Slowbronite - Location:** Koriyama City, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   

        else if(args[0]==="Gengar"){
        message.channel.sendMessage(`**Gengarite - Location:** Underground Path, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   

        else if(args[0]==="Kangaskhan"){
        message.channel.sendMessage(`**Kangaskhanite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   

        else if(args[0]==="Pinsir"){
        message.channel.sendMessage(`**Pinsirite - Location:** 1st Prize (Bug Catching Contest), Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Gyarados"){
        message.channel.sendMessage(`**Gyaradosite - Location:** Route 10, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Aerodactyl"){
        message.channel.sendMessage(`**Aerodactylite - Location:** Mt. Snarlet, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Mewtwo"){
        message.channel.sendMessage(`Mewtwonite X, Mewtwonite Y - Mystery Gift (v1.2.1)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Ampharos"){
        message.channel.sendMessage(`**Ampharosite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Steelix"){
        message.channel.sendMessage(`**Steelixite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Scizor"){
        message.channel.sendMessage(`**Scizorite - Location:** 1st Prize (Bug Catching Contest), Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Heracross"){
        message.channel.sendMessage(`**Heracronite - Location:** 1st Prize (Bug Catching Contest), Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Houndoom"){
        message.channel.sendMessage(`**Houndoominite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Tyranitar"){
        message.channel.sendMessage(`**Tyranitarite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Sceptile"){
        message.channel.sendMessage(`**Sceptilite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Blaziken"){
        message.channel.sendMessage(`**Blazikenite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Swampert"){
        message.channel.sendMessage(`**Swampertite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Gardevoir"){
        message.channel.sendMessage(`**Gardevoirite - Location:** Fairy City, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Mawile"){
        message.channel.sendMessage(`**Mawilite - Location:** Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Aggron"){
        message.channel.sendMessage(`**Aggronite - Location:** Rocky Cave, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Medicham"){
        message.channel.sendMessage(`**Medichamite - Location:** Synchrone Cave Underground, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Manectric"){
        message.channel.sendMessage(`**Manectite - Location:** Power Plant, Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
        }   
        
        else if(args[0]==="Sharpedo"){
        message.channel.sendMessage(`**Sharpedonite - Location:** Underwater (Seaside Beach), Event Hall (Mega Stones Shop)
            :book: **Mega Stones Wikia** :book:
            http://pkmmga.wikia.com/wiki/Mega_Stones
            `)
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

    if(commandIs("control", message)){
        message.channel.sendMessage(`A list of Controls in Pokémon Mega Adventure:
        **DO NOT Press Ctrl + X + Down**
        **Arrow Keys** - Move arround the map
        **Z** - Switch item's position in bag
        **X** or **Esc** - Back/Cancel, open Menu
        **Enter** or **C** or **Spacebar** - Confirm action, interact with NPC/Pokemon
        **F5** - Use Registered Item
        **Alt** - Turn Turbo Mode on/off
        **F8** - Take a screeshot
        **Page Up/Page Down** or **Q/W** - Jump up/down a list
        `)
    }

    if(commandIs("trade", message)){
        message.channel.sendMessage(`**In-game Trades**
        :book: **Wikia:** http://pkmmga.wikia.com/wiki/Gifts_%26_Trades :book:
        `)
    }

    if(commandIs("gift", message)){
        message.channel.sendMessage(`**In-game Gifts**
        :book: **Wikia:** http://pkmmga.wikia.com/wiki/Gifts_%26_Trades :book:
        `)
    }

    if(commandIs("about", message)){
        message.channel.sendMessage(`**Pokémon Mega Adventure**
        Latest version: 1.2.2
        Download: http://megaadventure.weebly.com/download.html
        `)
    }

    if(message.content.includes("(╯°□°）╯︵ ┻━┻")) {
        message.channel.sendMessage("┬─┬ ノ( ゜-゜ノ)")
    }
});

mga.login('MzE5NDY5Nzk0NTEwMzcyODY1.DBBY8w.hLU8Q4mEAtxI4duiOri3xDZOidY')
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ml = new Discord.Client();

ml.on('ready', () => {
  ml.user.setGame('with LeonDraceus')
});

ml.login('MzE5NDY2MjM5MjI1MjMzNDA5.DBBWFw.F0UM6NPc9YjQecRCmrK_93-n5v0')

///////////////////////////////////////////////////////////////////////////////////////////////////////
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();

Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});
 
music(Bot, {
	prefix: '>',     // Prefix of '-'.
	global: false,   // Server-specific queues.
	maxQueueSize: 20, // Maximum queue size of 10.
	anyoneCanSkip: false,
    volume: 100,
	clearInvoker: true // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
});

Bot.on('ready', () => {
  Bot.user.setGame('-help')
});

Bot.on('message', (message) => {

    var args = message.content.split(/[ ]+/);

    if(commandIs("roll", message)){
        var roll = Math.floor(Math.random() * 6) +1;
        message.reply("You rolled " + roll + " :game_die:");
    }
    
    if(commandIs("help", message)){
        message.channel.sendMessage(`**Fun Commands:**
        ***-bite*** - Gible will bite the mentioned user
        ***-smash*** - Smash a mentioned user 
        ***-slap*** - Slap a mentioned user 
        ***-poke*** - Poke a mentioned user 
        ***-lollipop*** - Give lollipop to a mentioned user 
        ***-roll*** - Roll a die
        ***-intensifies*** - ... Try it sometimes
        ***-explode*** - ... Try it sometimes 
        `)
        message.channel.sendMessage(`**Music Commands:**
        ***>play <url>|<search string>*** - Play music (Example: >play Hi)
        ***>skip [number]*** - Skip some number of songs. Will skip 1 song if a number is not specified.
        ***>volume*** - Adjust the playback volume between 1 and 200.
        ***>queue*** - Display the current queue
        ***>clearqueue*** - Clears the song queue..
        ***>pause*** - Pause music playback. (requires music manager)
        ***>resume*** - Resume paused music. (requires music manager)
        ***>leave*** - Clears the song queue and leaves the channel.
        `)
    }
    
    if(commandIs("bite", message)){
        message.channel.sendMessage('Gible has bitten ' + args[0] + ' :heart: ')
    }
    
    if(commandIs("slap", message)){
        message.channel.sendMessage(message.author.username + ' has slapped ' + args[0] + '! http://i.imgur.com/WhoW7z6.gif')
    }

    if(commandIs("smash", message)){
        message.channel.sendMessage(message.author.username + ' has smashed ' + args[0] + '!')
    }

    if(commandIs("kill", message)){
        message.channel.sendMessage('That is not (kinda) a command!')
    }

    if(commandIs("poke", message)){
        message.channel.sendMessage(message.author.username + ' has poked ' + args[0] + '!')
    }
    
    if(commandIs("lollipop", message)){
        message.channel.sendMessage(message.author.username + ' has given ' + args[0] + ' :lollipop: ')
    }
        
    if(commandIs("intensifies", message)){
        message.channel.sendMessage('http://i.imgur.com/sUofPrR.gif')
    }
    
    if(commandIs("explode", message)){
        message.channel.sendMessage('http://i.imgur.com/pE8DPJS.gif')
    }

    if(message.content === '(╯°□°）╯︵ ┻━┻') {
        message.channel.sendMessage('┬─┬ ノ( ゜-゜ノ)')
    }

    if(message.content === 'ping') {
        message.reply('pong')
    }

    if(message.content === 'hi') {
        message.reply('*Gible slightly bites you* Hello!')
    }

    if(message.content === 'gible') {
        message.reply('GIBLE! *Gible suddenly hugs you*')
    }

    if(message.content === '.') {
        message.reply(':T')
    }

    if(message.content === 'gible') {
        message.reply('GIBLE! *Gible suddenly hugs you*')
    }
});

Bot.login('')