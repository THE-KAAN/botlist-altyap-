const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('RED')
.setTitle('Settings » Yetkili Komutlar')
.setTimestamp()
.addField(`• ${PREFIX}log **#kanal**`,`Bot başvuru,kabul,red kanaln belirler.`)
.addField(`• ${PREFIX}log-kapat`,`Logu kapatır.`)
.addField(`• ${PREFIX}yetkili-log **#kanal**`,`Yetkili logunu belirler.`)
.addField(`• ${PREFIX}yetkili-kapat`,`Yetkili logunu kapatır.`)
.addField(`• ${PREFIX}kabul **<sahipID>** **<botID>**`,`Bot başvuru onaylarsınz.`)
.addField(`• ${PREFIX}reddet **<sahipID>** **<sebep>**` ,`Bot başvuru reddersiniz.`)
.setFooter('© 2020  Settings')
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yy','yyardim','ykomutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};
