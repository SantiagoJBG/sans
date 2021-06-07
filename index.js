const Discord = require ("discord.js");
const client = new Discord.Client;
const config = require ("./config.json");


var prefix = config.prefix;


client.on("ready", () => {
    console.log(`${client.user.username} esta preparado!`);
    client.user.setActivity("Undertale")
});


client.on("message", async message => {
    const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();


    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;

    let usuario = message.author


    switch (comando){
        case("s!hola"):
               message.reply("𝗵𝗼𝗹𝗮.");
               break;
        case("s!adios"):
               message.channel.send("𝗵𝗮𝘀𝘁𝗮 𝗹𝘂𝗲𝗴𝗼.");
               break;
        case("s!sex"):
               message.reply("𝘁𝗲 𝗴𝘂𝘀𝘁𝗮 𝗲𝗹 𝘀𝗲𝘅 𝘀𝗲𝘅𝗼 𝘁𝗲 𝗴𝘂𝘀𝘁𝗮 𝗲𝗹 𝘀𝗲𝘅 𝘀𝗲𝘅 𝘀𝗲𝘅𝗼 𝘁𝗲 𝗴𝘂𝘀𝘁𝗮 𝗲𝗹 𝘀𝗲𝘅 𝘀𝗲𝘅𝗼 𝘁𝗲 𝗴𝘂𝘀𝘁𝗮 𝗲𝗹 𝘀𝗲𝘅 𝘀𝗲𝘅 𝘀𝗲𝘅𝗼.")
               break;
        case("s!embed"):
               let prueba = new Discord.MessageEmbed()
               prueba.setTitle("𝗛𝗼𝗹𝗮 𝗮𝗺𝗶𝗴𝗼.. 𝗰𝗼𝗺𝗼 𝗲𝘀𝘁𝗮𝘀? 𝘁𝗼𝗱𝗼 𝘁𝗿𝗮𝗻𝗾𝘂𝗶 𝘁𝗼𝗱𝗼 𝗽𝗶𝗼𝗹𝗮?")
               prueba.setColor(0x00bfff)
               prueba.setDescription("𝗕𝘂𝗲𝗻𝗼 𝗰𝗼𝗺𝗼 𝗱𝗲𝗰𝗶𝗮 𝘀𝗼𝗹𝗼 𝗽𝗮𝘀𝗮𝗯𝗮 𝗽𝗼𝗿 𝗮𝗰𝗮 𝘆 𝗲𝗹 𝗮𝗱𝗺𝗶𝗻 𝗺𝗲 𝗱𝗶𝗷𝗼 𝗾𝘂𝗲 𝗻𝗼 𝗲𝘀𝘁𝗮𝘀 𝗰𝗼𝗻𝗲𝗰𝘁𝗮𝗱𝗼 𝗲𝗵?... 𝗯𝘂𝗲𝗻𝗼 𝗾𝘂𝗲 𝗽𝗮𝘀𝗮 𝗻𝗲𝗰𝗲𝘀𝗶𝘁𝗮𝗺𝗼𝘀 𝗾𝘂𝗲 𝗲𝘀𝘁𝗲𝘀 𝗰𝗼𝗻𝗲𝗰𝘁𝗮𝗱𝗼!! ¿𝗽𝗼𝗿𝗾𝘂𝗲? 𝗯𝘂𝗲𝗻𝗼 𝗲𝗹 𝗮𝗱𝗺𝗶𝗻 𝗱𝗶𝗰𝗲 𝗾𝘂𝗲 𝗹𝗼𝘀 𝗾𝘂𝗲 𝗻𝗼 𝘀𝗲 𝗰𝗼𝗻𝗲𝗰𝘁𝗲𝗻 𝗽𝗼𝗿 𝟭 𝘀𝗲𝗺𝗮𝗻𝗮 𝘀𝗲𝗿𝗮𝗻 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗱𝗼𝘀 𝗮𝘀𝗶 𝗾𝘂𝗲 𝘆𝗮 𝘀𝗮𝗯𝗲𝘀 𝗯𝗿𝗼𝘁𝗵𝗲𝗿.. 𝗰𝗼𝗻𝗲𝗰𝘁𝗮𝘁𝗲 𝗼 𝗺𝘂𝗲𝗿𝗲𝘀.. 𝗼𝗸? 𝗯𝘂𝗲𝗻𝗼 𝗲𝘀𝗽𝗲𝗿𝗼 𝗾𝘂𝗲 𝘀𝗶𝗴𝗮𝘀 𝗰𝗼𝗻𝗲𝗰𝘁𝗮𝗱𝗼 𝗮𝗹 𝘀𝗲𝗿𝘃𝗶𝗱𝗼𝗿 𝗵𝗲𝗵𝗲𝗵𝗲... 𝗮𝗻𝘁𝗲𝘀 𝗱𝗲 𝗶𝗿𝗺𝗲... 𝘀𝗶 𝗶𝗻𝘀𝘂𝗹𝘁𝗮𝘀 𝗮 𝗹𝗼𝘀 𝗰𝗿𝗲𝗮𝗱𝗼𝗿𝗲𝘀.. ¿𝗗𝗼 𝘆𝗼𝘂 𝘄𝗮𝗻𝗻𝗮 𝗵𝗮𝘃𝗲 𝗮 𝗯𝗮𝗱 𝘁𝗶𝗺𝗲?")             
               prueba.setFooter("-sans.")
               message.channel.send(prueba)
               break;
        case("s!hehe"):       
              let hehehe = new Discord.MessageEmbed()
              hehehe.setTitle ("HeHeHe")
              hehehe.setColor(0x00bfff)
              hehehe.setDescription("𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲𝗵𝗲.")
              hehehe.setFooter("-elhehehe")
              message.channel.send(hehehe)
              break;
        case("s!dance"):
              let dance = new Discord.MessageEmbed()
              dance.setAuthor (message.member.displayName)
              dance.setDescription ("𝗯𝗮𝗶𝗹𝗮, 𝗯𝗮𝘀𝘁𝗮𝗻𝘁𝗲 𝗲𝗽𝗶𝗰𝗼")
              dance.setThumbnail ('https://media1.tenor.com/images/bb657ee0e6582059ee7c9ca7ce27ef09/tenor.gif')
              dance.setColor (0x00bfff)
              message.channel.send(dance);
              break;
       case("s!badtime"):
              let bd = new Discord.MessageEmbed()
              bd.setAuthor (message.member.displayName)
              bd.setDescription ("𝗮 𝗰𝗮𝗺𝗯𝗶𝗮𝗱𝗼 𝗲𝗹 𝗰𝗼𝗹𝗼𝗿 𝗱𝗲 𝘀𝘂 𝗼𝗷𝗼. . . 𝗽𝗮𝗿𝗲𝗰𝗲 𝗾𝘂𝗲 𝗮𝗹𝗴𝘂𝗶𝗲𝗻 𝘃𝗮 𝗮 𝗽𝗮𝘀𝗮𝗿 𝘂𝗻 𝗺𝗮𝗹 𝗿𝗮𝘁𝗼")
              bd.setThumbnail ('https://art.pixilart.com/87cb04842382a1e.gif')
              bd.setColor (0x00bfff)
              message.channel.send(bd);
              break;
       case("s!gasterblast"):
              let gb = new Discord.MessageEmbed()
              gb.setAuthor (message.member.displayName)
              gb.setDescription ("𝗶𝗻𝘃𝗼𝗰𝗮 𝗮𝗹𝗴𝗼...")
              gb.setThumbnail ('https://media1.tenor.com/images/1339ee99b2015ef4ede47d9ee0ced858/tenor.gif')
              gb.setColor (0x00bfff)
              message.channel.send(gb);
              break; 
       case("s!intro"):
              let intro = new Discord.MessageEmbed()
              intro.setAuthor (message.member.displayName)
              intro.setDescription ("𝗵𝗮𝗰𝗲 𝘂𝗻 𝗵𝗲𝗿𝗺𝗼𝘀𝗼 𝗱í𝗮 𝗮𝗹𝗹á 𝗮𝗳𝘂𝗲𝗿𝗮... 𝗹𝗮𝘀 𝗮𝘃𝗲𝘀 𝗰𝗮𝗻𝘁𝗮𝗻, 𝗹𝗮𝘀 𝗳𝗹𝗼𝗿𝗲𝘀 𝗳𝗹𝗼𝗿𝗲𝗰𝗲𝗻, 𝗲𝗻 𝗱𝗶𝗮𝘀 𝗰𝗼𝗺𝗼 𝗲𝘀𝘁𝗼𝘀 𝗻𝗶ñ𝗼𝘀 𝗰𝗼𝗺𝗼 𝘁𝘂. . . 𝗱 𝗲 𝗯 𝗲 𝗿 í 𝗮 𝗻    𝗮 𝗿 𝗱 𝗲 𝗿     𝗲 𝗻     𝗲 𝗹    𝗶 𝗻 𝗳 𝗶 𝗲 𝗿 𝗻 𝗼.")
              intro.setThumbnail ('http://pa1.narvii.com/6187/991831f7ad03a6b14c569b6510c77b2a15891db8_00.gif')
              intro.setColor (0x00bfff)
              message.channel.send(intro);
              break;  

    }
});


client.login(config.token);