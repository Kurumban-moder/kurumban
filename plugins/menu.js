const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/03/Pikachu-wallpaper-HD-dowload.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━✨️BADBOTZ✨️━━━━━⛦


╔═════════════════❍
║-BADBOTZ 亗!!
║
║╾ ɴᴜᴍʙᴇʀ : @918593079460
║
║▬▭▬▭▬▭▬▭▬▭
║╾ ᴄʀᴇᴀᴛᴏʀ : wa.me/918593079460
║
║╾ ᴄʀᴇᴅɪᴛs : wa.me/918593079460
║
║╾ ᴏᴡɴᴇʀ : BADBOTZ亗!!
║
║╾ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : wa.me/918593079460
║
║╾ sᴛᴀᴛᴜs : Public
║
║    ᴇɴᴛʜᴀᴅᴀ ɴᴇ ғᴇᴀʀ ᴀʏᴏ
║▬▭▬▭▬▭▬▭▬▭
╠══════════════════⎉
║-
║-
║-
║-ᴀsᴋ ᴍʏ ᴏᴡɴᴇʀ
╠══════════════════⎉
╠═════⊱*「 Media Commends 」* 
║┏━━⊱
║┣❏ !song*
║┣❏ 
║┣❏ *!video*
║┣❏ 
║┣❏ *!insta*
║┣❏ 
║┣❏ *!yt*
║┣❏ 
║┣❏ *!show*
║┣❏
║┣❏ *!gif*
║┣❏
║┣❏ *!say*
║┣❏ 
║┣❏ *!img*
║┣❏ 
║┣❏ *!trt*
║┣❏ 
║┣❏ *!wiki*
║┣❏ 
║┣❏ *!lyric*
║┣❏ 
║┣❏ *!covid*
║┣❏ 
║┣❏ *!weather*
║┣❏ 
║┣❏ *!removebg*
║┣❏ 
║┣❏ *!ocr*
║┣❏ 
║┣❏ *!wallpaper*
║┣❏ 
║┗━━━━*《 BADBOTZ 》*
╠═════════════════❍
║┣━━⊱*「 Fun Commends 」* 
║┣❏ *!joke*
║┣❏  
║┣❏ *!meme*
║┣❏
║┣❏ *!quote*
║┣❏  
║┣❏ *!ss*
║┣❏  
║┣❏ *!changesay*
║┣❏  
║┣❏ *!trumpsay*
║┣❏ 
║┣❏ *!compliment*
║┣❏
║┣❏ *!bitly*
║┣❏
║┣❏ *dict*
║┣❏ 
║┣❏ *!zodiac*
║┣❏
║┣❏ *!qr*
║┣❏
║┣❏ *!movie*
║┣❏
║┣❏ *!anime*
║┣❏ 
║┗━━━━*《 BADBOTZ 》*
╠═════════════════❍
║┣━━⊱*「 Sticker Commends 」* 
║┣❏ *!sticker*
║┣❏
║┣❏ *!photo*
║┣❏
║┣❏ !*attp*
║┣❏
║┣❏ *!ttp
║┣❏
║┣❏ *!gft
║┣❏
║┣❏ *!carbon*
║┣❏
║┗━━━━*《 BADBOTZ 》*
╠═════════════════❍
║┣━━⊱*「 Bgm Commends 」* 
║┣❏
║┗━━━━*《 BADBOTZ 》*
╠═════════════════❍
║┣❏ Bᴏᴛ sᴇʀ
║┣❏ 
║┣❏ ✆ ʀᴇᴘᴏʀᴛ ʙᴜɢ?
║┣❏ 
║┣❏ https://wa.me/918593079460
║┣❏ 
║┣❏ ✆ ᴄʀᴇᴅɪᴛs ɢᴏᴇs ᴛᴏ!
║┣❏ 
║┣❏ https://wa.me/918593079460
║┣❏ 
║┗━━━━*《 BADBOTZ 》*
╚═════════════════❍ 

`}) 

}));
