// SC ORI : LazarBot
// PEMILIK ORI : MrLazar
//=================================/
// ILANGAN BAGIAN ATAS NERAKA PALING BAWAH TEMPAT MU


module.exports = async (Lazar, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const botNumber = await Lazar.decodeJid(Lazar.user.id)
const sender = m.key.fromMe ? (Lazar.user.id.split(':')[0]+'@s.whatsapp.net' || Lazar.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const qmsg = (quoted.msg || quoted)      
const groupMetadata = isGroup ? await Lazar.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const more = String.fromCharCode(8206)
const ytdl = require("ytdl-core")
const calip = require ('caliph-api')
const yts = require("yt-search")
const path = require('path')
const readmore = more.repeat(4001) 
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./all/list')
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./all/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./all/converter')
const db_respon_list = JSON.parse(fs.readFileSync('./store/list.json'))
const uploadImage = require('./all/uploadImage')
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const { addSaldo, minSaldo, cekSaldo } = require("./all/database/deposit");
const { mediafireDl } = require('./all/database/mediafire.js') 
const plerr = JSON.parse(fs.readFileSync('./all/database/cpgrup.json'))
const jangann = m.isGroup ? plerr.includes(m.chat) : false
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const antilink = JSON.parse(fs.readFileSync('./all/antilink.json'));
const { smsg, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, formatp, getRandom, h2k, randomNomor, reSize, getGroupAdmins, sendMedia, FileSize, generateProfilePicture } = require('./all/myfunc')
const db_user = JSON.parse(fs.readFileSync('./all/user.json'))
    let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
}


const getRandomFile = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}


Lazar.sendImageAsSticker = async (jid, media, t, options = {}) => {
let jancok = new Sticker(media, {
pack: "LCode°᭄ᴮᵒᵗ", // The pack name
author: "Created By LAzarHost", // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 50, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandomFile(".webp")
  let nono = await jancok.toFile(stok)
  let nah = fs.readFileSync(nono)
  await Lazar.sendMessage(jid, { contextInfo: { externalAdReply: { showAdAttribution: true,
  title: 'lazar вσт',body: 'Created By zarHost',previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/thumb.jpeg'),
  sourceUrl:'https://lynk.id/szz'																																
  }}, sticker: nah }, { quoted: t})   				
  return await fs.unlinkSync(stok)
  }
  
Lazar.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Lazar.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
  
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await Lazar.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Lazar.updateBlockStatus(m.sender, 'block')

Lazar.sendContactArray = async (jid, data, quoted, options) => {
      let contacts = []
      for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
          number = number.replace(/[^0-9]/g, '')
          let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET: Lazarhostラザール@LOwn.id
item2.X-ABLabel:📧 Email
item3.ADR:;; Arek Malang;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 Region
item4.URL:https://lynk.id/szz
item4.X-ABLabel:Website
item5.X-ABLabel:LCode By Lazar@LOwn.id
END:VCARD`.trim()
          contacts.push({ vcard, displayName: name })

      }
      return await Lazar.sendMessage(jid, {
          contacts: {
              displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
              contacts,
          }
      },
      {
           quoted,
           ...options
      })
  }
  
//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭













//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
 
  const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result
}
const makeidd = (length) => {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result
}

Lazar.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)

let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

async function loading () {

var xeonlod = [
"Pleasd Wait Command Have Been Running..."
]
let { key } = await Lazar.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await Lazar.sendMessage(from, {text: xeonlod[i], edit: key })
}
}

async function suprise () {

var supload = [
  
"Dapat apa Yaaa 🌧"

  ]
let { key } = await Lazar.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < supload.length; i++) {
await Lazar.sendMessage(from, {text: supload[i], edit: key })
}
}

async function plus () {

var plusload = [
  
"Dapat apa Yaaa 🌎"

  ]
let { key } = await Lazar.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < plusload.length; i++) {
await Lazar.sendMessage(from, {text: plusload[i], edit: key })
}
}

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))



//System Expired
//autoClearChat(Lazar,clearchat)



        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const seler = JSON.parse(fs.readFileSync("./all/database/seler.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isSeler = seler.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Lazar.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Lazar.getName(i + '@s.whatsapp.net')}\n
FN:${await Lazar.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Lazar@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://chat.whatsapp.com/Bn3tcvTGopCHirKLd2Us9z
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Lazar.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)
const totalFitur = () =>{
            var mytext = fs.readFileSync("./appearance.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
Lazar.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
async function reply(teks) {
let photo = `https://f.uguu.se/NZCvlPmc.jpg`
 const ngel = {
contextInfo: {
 mentionedJid: [m.sender],
 forwardingScore: 9999999, 
isForwarded: true, 
 externalAdReply: {
 showAdAttribution: true,
  title: '© Lcode вσт ν4.5',
body: `Hai  ${ucapanWaktu} kak ${pushname}`,
previewType: "PHOTO",
 thumbnailUrl: photo,
 sourceUrl: 'https://lynk.id/szz'
   }
  },
 text: teks
  };
return Lazar.sendMessage(m.chat, ngel, { quoted: fkontak});
};
// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp3",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot By LazarHost 💥`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/3e98338284ac70bd9c34d.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    


switch (command) {
  
  case 'daftar': case 'register': case 'verify': case 'Registrasi': {
 if (cekUser("id", sender) !== null) return reply('Kamu sudah terdaftar !!')
let s = q.split(',')
let umur = `${makeidd(2)}`
if (s.length < 1) return reply(`*Format salah!*
Penggunaan:
${prefix + command} umur`)
let res_us = `${makeid(10)}`
let user_name = `#GR${makeid(5)}`
let object_user = {"id": sender, "name": user_name, "seri": res_us, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./all/user.json', JSON.stringify(db_user, 2, null))
reply(`Sukses, Anda Sekarang Sudah Terdaftar✅ @${sender.split("@")[0]}`, [sender])
let verify_teks =`───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────
┏─• *ᴜsᴇʀs*
│▸ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│▸ *ɴᴀᴍᴇ:* ${pushname}
│▸ *ᴀɢᴇ:* ${umur}
│▸ *sɴ:* ${res_us}
┗────···
ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ʙᴀᴄᴀ ʀᴜʟᴇs ʏᴀ ᴋᴀᴋ...
ᴅᴀᴛᴀ ᴜsᴇʀ ʏᴀɴɢ ᴛᴇʀsɪᴍᴘᴀɴ ᴅɪᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ, ᴅɪᴊᴀᴍɪɴ ᴀᴍᴀɴ ᴛᴀɴᴘᴀ ᴛᴇʀsʜᴀʀᴇ 📁

⻝ 𝗗𝗮𝘁𝗲: ${hariini}
⻝ 𝗧𝗶𝗺𝗲: ${wit}
`
Lazar.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'TERVERIFIKASI',
mimetype: 'application/msword',
caption: verify_teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: '©LCodeI拉D Prime',
body: `Hai  ${ucapanWaktu} kak ${pushname}` ,
thumbnailUrl: 'https://telegra.ph/file/d79d6a1fcb429dd897de6.jpg',
sourceUrl: 'https://chat.whatsapp.com/HV8ErrQ5JgZ5xSsf8gmj1H',
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: m,ephemeralExpiration: 86400});
}
break
  
case 'menu': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const menu = `
> ⏱️ *${wit}*

ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *ʟᴄᴏᴅᴇɪᴅ*
sᴀʏᴀ ᴅɪ ᴄɪᴘᴛᴀᴋᴀɴ ᴏʟᴇʜ *ʟᴀᴢᴀʀ ᴏғғɪᴄɪᴀʟ*

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ
*ʙᴏᴛ ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴏᴛᴏᴍᴀᴛɪᴋ*, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ 
ᴋᴀᴍᴜ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴɪ ʜᴀʀɪ-ʜᴀʀɪ ><

> *✎ ᴏᴡɴᴇʀ   : ʟᴀᴢᴀʀ ᴏғғɪᴄɪᴀʟ*
> *✎ ᴄʀᴇᴀᴛᴏʀ : ᴍᴀɴᴢ*
> *✎ ʙᴜʏ 𝘀𝗰  : 6285655654790*

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ 
ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ (ʟᴀᴢᴀʀ ᴏғғɪᴄɪᴀʟ) 

> *ꜱᴄʀɪᴘᴛ ᴄʀᴇᴀᴛᴇ ʙʏ ʟᴀᴢᴀʀ*

* ᴾˡᵉᵃˢᵉ ᵈᵒⁿ'ᵗ ˢᵖᵃᵐ ᵗʰᶦˢ ᴮᴼᵀ
* ᴾˡᵉᵃˢᵉ ᵐᵃᵏᵉ ˢᵘʳᵉ ʸᵒᵘʳ ʰᵃᵛᵉ ᵇᵉᵉⁿ ʳᵉᵍᶦˢᵗᵉʳ
`
const videoFile = fs.readFileSync('./all/menu.mp3');
await loading ()
let sections = [{
title: 'List Menu',
highlight_label: 'Lazarhost ラザール',
rows: [{
title: 'Allmenu',
description: `Select To View All Of Main Menu`, 
id: '.allmenu'
},
{
title: 'Register 💳',
description: `Select To Register In Database`, 
id: '.daftar'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: menu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/89d1595f342c2038d48da.jpg" } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6285655654790\",\"merchant_url\":\"https://wa.me/6285655654790\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
await Lazar.sendMessage(m.chat, {
    audio: fs.readFileSync('./menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
             break

case 'allmenu': {
  if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const allmenu = `
╭* *ɴᴀᴍᴇ*: ${pushname}
* *𝘀ᴇʟʟᴇʀ*: ${isSeler ? 'Seler' : 'Gratisan'}
* *𝘀ᴛᴀᴛᴜ𝘀*: ${isOwner ? "Owner":"Free"}
* *ɴᴜᴍʙᴇʀ*: ${m.sender.split('@')[0]}

╭───⌜ *ɪɴꜰᴏ* ⌟───
│• *ᴘʀᴇғɪ𝘅:* *( ${prefix} )*
│• *ᴡᴀᴋᴛᴜ:* *${wib} ᴡɪʙ*
│• *ʀᴜɴᴛɪᴍᴇ:* *^${version}*
│• *ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ:* *ᴏɴʟɪɴᴇ*
│• *ᴄʀᴇᴀᴛᴏʀ ꜱᴄʀɪᴘᴛ:* *${namaCreator}*
╰───────

* *This SC Is not Free*
* *If you want to buy this SC*
* *Ask With Owner For SC*

> *ꜱᴄʀɪᴘᴛ ᴄʀᴇᴀᴛᴇ ʙʏ ©ʟᴀᴢᴀʀ*
> *${wit}*
> *${hariini}*
*━━──━━[ 𝗠𝗘𝗡𝗨 ]━━──━━*
`
const videoFile = fs.readFileSync('./all/menu.mp3');
await loading ()
let sections = [{
title: 'All Of Main Menu',
highlight_label: 'Lazarhost ラザール',
rows: [{
title: 'Main Feature',
description: `𝙳𝚒𝚜𝚙𝚕𝚊𝚢 𝚃𝚘𝚘𝚕 𝙾𝚛 𝙳𝚕𝚕 𝙵𝚎𝚊𝚝𝚞𝚛𝚎 🔮`, 
id: '.mainmenu'
},
{
title: 'Panel Feature',
description: `𝙳𝚒𝚜𝚙𝚕𝚊𝚢 𝚃𝚘 𝚂𝚎𝚝𝚝𝚒𝚗𝚐 𝙿𝚝𝚎𝚛𝚘𝚍𝚊𝚌𝚝𝚢𝚕 𝙿𝚊𝚗𝚎𝚕 🛡`, 
id: '.panelmenu'
},
{
title: 'Store Feature',
description: `𝙳𝚒𝚜𝚙𝚕𝚊𝚢 𝚃𝚑𝚎 𝙼𝚊𝚒𝚗 𝙾𝚏 𝚂𝚝𝚘𝚛𝚎 𝙵𝚎𝚊𝚝𝚞𝚛𝚎 💰`, 
id: '.storemenu'
},
{
title: 'Funny Feature',
description: `𝙳𝚒𝚜𝚙𝚕𝚊𝚢 𝙵𝚘𝚛 𝙵𝚞𝚗𝚗𝚢𝚜 𝙵𝚎𝚊𝚝𝚞𝚛𝚎 🧸`, 
id: '.funmenu'
},
{
title: 'Group Feature',
description: `𝙳𝚒𝚜𝚙𝚕𝚊𝚢 𝚂𝚎𝚝𝚝𝚒𝚗𝚐 𝙵𝚘𝚛 𝚃𝚑𝚎 𝙶𝚛𝚘𝚞𝚙 𝙾𝚙𝚝𝚒𝚘𝚗 ✅`, 
id: '.groupmenu'
},
{
title: 'Owner Feature ⚙️',
description: `𝙳𝚒𝚜𝚙𝚕𝚊𝚢 𝙾𝚠𝚗𝚎𝚛 𝙼𝚎𝚗𝚞 𝙸𝚏 𝚈𝚘𝚞𝚛 𝙾𝚠𝚗𝚎𝚛 ⚙️`, 
id: '.ownermenu'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: allmenu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/89d1595f342c2038d48da.jpg" } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6285655654790\",\"merchant_url\":\"https://wa.me/6285655654790\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
await Lazar.sendMessage(m.chat, {
    audio: fs.readFileSync('./menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
             break
             
case 'funmenu':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const funmenu = `> ⏱️ *${wit}*
╭୧──────────┈◦•◦
│✼ *Nomor :* ${sender.split("@")[0]}
│✼ *Nama Bot :* ${namabot}
│✼ *Date :* ${wit}, ${hariini}
│✼ *Jumlah User:* User
│✼ *Fitur Saat ini :* ${totalFitur()}
│✼ *Status:* ${isSeler ? 'Seller user':'Free user'}
│✼ *Runtime :* ${runtime(process.uptime())}
꒰⚘݄꒱₊___________________˓
`+readmore+`
         *FUNNYS MENU*
╭୧⍤⃝───────────┈◦•◦❥•◦
│•⟢.apakah
│•⟢.bagaimanakah
│•⟢.bisakah
│•⟢.kapankah
│•⟢.gantengcek
│•⟢.cantikcek
│•⟢.rate
│•⟢.halah
│•⟢.cekmati
│•⟢.wangy
│•⟢.sangecek
│•⟢.tafsirmimpi
│•⟢.ramalanjodohbali
│•⟢.suamiistri
│•⟢.artinama
│•⟢.ramalcinta
│•⟢.kecocokannama
│•⟢.kecocokanpasangan
│•⟢.jadianpernikahan
│•⟢.suamiistri
│•⟢.sifatusaha
│•⟢.rezeki
│•⟢.pekerjaan
│•⟢.ramalannasib
│•⟢.penyakit
│•⟢.tarot
│•⟢.fengshui
│•⟢.haribaik
│•⟢.harisangar
│•⟢.harinaas
│•⟢.harinaga
│•⟢.arahrezeki
│•⟢.peruntungan
│•⟢.weton
│•⟢.sifat
│•⟢.Keberuntungan
│•⟢.memancing
│•⟢.masasubur
│•⟢.zodiak
│•⟢.shio
│•⟢.suprise { Owner }
│•⟢.supriseplus { Owner }
꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
`
const videoFile = fs.readFileSync('./all/menu.mp3'); 
await loading ()
let sections = [{
title: 'List Menu',
highlight_label: 'Lazarhost ラザール',
rows: [{
title: 'Back ❌',
description: `Back To All Of Main Menu ❌`, 
id: '.allmenu'
},
{
title: 'Owner Menu ⚙️',
description: `Select To Displays Owner Menu If Your Owner`, 
id: '.ownermenu'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: funmenu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/89d1595f342c2038d48da.jpg" } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6285655654790\",\"merchant_url\":\"https://wa.me/6285655654790\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
await Lazar.sendMessage(m.chat, {
    audio: fs.readFileSync('./menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
             break
             case 'mainmenu':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const mainmenu = `> ⏱️ *${wit}*
╭୧──────────┈◦•◦
│✼ *Nomor :* ${sender.split("@")[0]}
│✼ *Nama Bot :* ${namabot}
│✼ *Date :* ${wit}, ${hariini}
│✼ *Jumlah User:* User
│✼ *Fitur Saat ini :* ${totalFitur()}
│✼ *Status:* ${isSeler ? 'Seller user':'Free user'}
│✼ *Runtime :* ${runtime(process.uptime())}
꒰⚘݄꒱₊___________________˓
`+readmore+`
         *MAIN MENU*
╭୧⍤⃝───────────┈◦•◦❥•◦
│•⟢.totalFitur
│•⟢.speedtest
│•⟢.ai / openai
│•⟢.hdr
│•⟢.remini
│•⟢.tiktok  {Error}
│•⟢.tiktokaudio {Error}
│•⟢.mediafire
│•⟢.play
│•⟢.npmstalk
│•⟢.git
│•⟢.removebg
│•⟢.sticker
│•⟢.qc
│•⟢.tovn 
│•⟢.toaudio
│•⟢.tomp3 
│•⟢.nightcore
│•⟢.bass
│•⟢.blown
│•⟢.deep
│•⟢.earrape
│•⟢.fast
│•⟢.fat 
│•⟢.reverse
│•⟢.robot
│•⟢.slow
│•⟢.smooth
│•⟢.squirrel
꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
`
const videoFile = fs.readFileSync('./all/menu.mp3');
await loading ()
let sections = [{
title: 'List Menu',
highlight_label: 'Lazarhost ラザール',
rows: [{
title: 'Back ❌',
description: `Back To All Of Main Menu ❌`, 
id: '.allmenu'
},
{
title: 'Owner Menu ⚙️',
description: `Select To Displays Owner Menu If Your Owner`, 
id: '.ownermenu'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: mainmenu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/89d1595f342c2038d48da.jpg" } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6285655654790\",\"merchant_url\":\"https://wa.me/6285655654790\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
await Lazar.sendMessage(m.chat, {
    audio: fs.readFileSync('./menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
             break
case 'storemenu':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const storemenu = `> ⏱️ *${wit}*
╭୧──────────┈◦•◦
│✼ *Nomor :* ${sender.split("@")[0]}
│✼ *Nama Bot :* ${namabot}
│✼ *Date :* ${wit}, ${hariini}
│✼ *Jumlah User:* User
│✼ *Fitur Saat ini :* ${totalFitur()}
│✼ *Status:* ${isSeler ? 'Seller user':'Free user'}
│✼ *Runtime :* ${runtime(process.uptime())}
꒰⚘݄꒱₊___________________˓
`+readmore+`
         *REQ MENU*
╭୧⍤⃝───────────┈◦•◦❥•◦
│•⟢.Reqbuy
│•⟢.list
│•⟢.alllist
꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒

         *FOR OWNER*
╭୧⍤⃝───────────┈◦•◦❥•◦
│•⟢.done
│•⟢.proses
│•⟢.addlist
│•⟢.dellist 
꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
`
const videoFile = fs.readFileSync('./all/menu.mp3');
await loading ()
let sections = [{
title: 'List Menu',
highlight_label: 'Lazarhost ラザール',
rows: [{
title: 'Back ❌',
description: `Back To All Of Main Menu ❌`, 
id: '.allmenu'
},
{
title: 'Owner Menu ⚙️',
description: `Select To Displays Owner Menu If Your Owner`, 
id: '.ownermenu'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: storemenu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/89d1595f342c2038d48da.jpg" } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6285655654790\",\"merchant_url\":\"https://wa.me/6285655654790\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
await Lazar.sendMessage(m.chat, {
    audio: fs.readFileSync('./menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
             break
case 'tutorials': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const tutor = `> ⏱️ *${wit}*
❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑


❏━━『 *HOW TO USE* 』━━
┣✦ • Example .reqbuy AkunGame,andDll
┣✦ • Example .reqbuy Pterodactyl,Unli
┣✦ • Req Without Spasi Or Your Req Error
┣✦ • *Please Read The Tutorial*
┗━═┅═━━━═┅═━━━═┅═━━━❖`
const videoFile = fs.readFileSync('./all/menu.mp3');
await loading ()
Lazar.sendMessage(m.chat, {
    video: videoFile,
    caption: tutor,
    gifPlayback: true,
    contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            title: global.namabot,
            body: "Tutorials",
            thumbnailUrl: global.imageurl,
            sourceUrl: global.isLink,
            mediaType: 1,
            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fkontak
                    })
     await Lazar.sendMessage(m.chat, {
                        audio: fs.readFileSync('./all/menu.mp3'),
                        mimetype: 'all/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break
case 'alllist':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const alllist = `> ⏱️ *${wit}*
╭୧──────────┈◦•◦
│✼ *Nomor :* ${sender.split("@")[0]}
│✼ *Nama Bot :* ${namabot}
│✼ *Date :* ${wit}, ${hariini}
│✼ *Jumlah User:* User
│✼ *Fitur Saat ini :* ${totalFitur()}
│✼ *Status:* ${isSeler ? 'Seller user':'Free user'}
│✼ *Runtime :* ${runtime(process.uptime())}
꒰⚘݄꒱₊___________________˓
`+readmore+`
*Ini listnya yaa Ӝ*

𖡹 *List Utama ®*
> *Admin Panel*
> PT *Admin Panel*
> Own *Panell*
> *Sewa Bot*

=note=
> *Diskon Berada Di 30%*

𖤼 *Menu Utama*
> Jasa Create Logo
> Jasa Push Member
> Jasa Suntik Sosmed
> Jasa Install { Custome }
> Jasa Installing Server Siap pakai
> Jasa Install Domain
> Jasa Running Bot
> Jasa Setting Full Node JS
> Jasa Seller Bot Cpanel
> Jasa Sebar
> Bot wa No Enc Ada Cpanel
> Script Brutal HC { Java/Be }
> Sc Enigma

 =note=
*  *Mungkin Hanya Ini Yang Bisa Ditampilkan*
*  *Untuk Harga Atau Lain" Bisa Ditanyakan*
*  *Langsung yaa* :)

 =Information=
GC https://chat.whatsapp.com/DEn9fBxRkFv4geSUxzQQcP

© 𝓛𝓪𝔃𝓪𝓻𝓱𝓸𝓼𝓽 𝓜𝓮𝓭𝓲𝓪
`
const videoFile = fs.readFileSync('./all/menu.mp3');
await loading ()
let sections = [{
title: 'List Menu',
highlight_label: 'Lazarhost ラザール',
rows: [{
title: 'Back ❌',
description: `Back To All Of Main Menu ❌`, 
id: '.allmenu'
},
{
title: 'Owner Menu ⚙️',
description: `Select To Displays Owner Menu If Your Owner`, 
id: '.ownermenu'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: alllist
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/89d1595f342c2038d48da.jpg" } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Buy ✅\",\"url\":\"https://wa.me/6285655654790\",\"merchant_url\":\"https://wa.me/6285655654790\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
await Lazar.sendMessage(m.chat, {
    audio: fs.readFileSync('./menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
             break
             case 'panelmenu':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const panelmenu = `> ⏱️ *${wit}*
╭୧──────────┈◦•◦
│✼ *Nomor :* ${sender.split("@")[0]}
│✼ *Nama Bot :* ${namabot}
│✼ *Date :* ${wit}, ${hariini}
│✼ *Jumlah User:* User
│✼ *Fitur Saat ini :* ${totalFitur()}
│✼ *Status:* ${isSeler ? 'Seller user':'Free user'}
│✼ *Runtime :* ${runtime(process.uptime())}
꒰⚘݄꒱₊___________________˓
`+readmore+`
         *PANEL MENU*
╭୧⍤⃝───────────┈◦•◦❥•◦
│•⟢.1gb *nama,number*
│•⟢.2gb *nama,number*
│•⟢.3gb *nama,number*
│•⟢.4gb *nama,number*
│•⟢.5gb *nama,number*
│•⟢.6gb *nama,number*
│•⟢.7gb *nama,number*
│•⟢.8gb *nama,number*
│•⟢.9gb *nama,number*
│•⟢.unli *nama,number*
│•⟢.delsrv *id*
│•⟢.delusr *id*
│•⟢.cadm
│•⟢.cusr
│•⟢.csrv
│•⟢.panel
│•⟢ >
꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
`
const videoFile = fs.readFileSync('./all/menu.mp3');
await loading ()
let sections = [{
title: 'List Menu',
highlight_label: 'Lazarhost ラザール',
rows: [{
title: 'List Admin',
description: `Select To Displays All Admin`, 
id: '.listadmin'
},
{
title: 'List Server',
description: `Select To Displays All Server`, 
id: '.listserver'
},
{
title: 'List User',
description: `Select To Displays All User`, 
id: '.listuser'
},
{
title: 'Back ❌',
description: `Back To All Of Main Menu ❌`, 
id: '.allmenu'
},
{
title: 'Owner Menu ⚙️',
description: `Select To Displays Owner Menu If Your Owner`, 
id: '.ownermenu'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: panelmenu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/89d1595f342c2038d48da.jpg" } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6285655654790\",\"merchant_url\":\"https://wa.me/6285655654790\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
await Lazar.sendMessage(m.chat, {
    audio: fs.readFileSync('./menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
             break
             case 'grupmenu': case 'groupmenu':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const grupmenu = `> ⏱️ *${wit}*
╭୧──────────┈◦•◦
│✼ *Nomor :* ${sender.split("@")[0]}
│✼ *Nama Bot :* ${namabot}
│✼ *Date :* ${wit}, ${hariini}
│✼ *Jumlah User:* User
│✼ *Fitur Saat ini :* ${totalFitur()}
│✼ *Status:* ${isSeler ? 'Seller user':'Free user'}
│✼ *Runtime :* ${runtime(process.uptime())}
꒰⚘݄꒱₊___________________˓
`+readmore+`
         *GROUP MENU*
╭୧⍤⃝───────────┈◦•◦❥•◦
│•⟢.kick
│•⟢.add
│•⟢.hidetag
│•⟢.totag
│•⟢.promote 
│•⟢.demote 
│•⟢.promoteall 
│•⟢.demoteall 
│•⟢.setnamegc  
│•⟢.setppgc  
│•⟢.delppgc  
│•⟢.setdesc  
│•⟢.delsesi  
꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
`
const videoFile = fs.readFileSync('./all/menu.mp3');
await loading ()
let sections = [{
title: 'List Menu',
highlight_label: 'Lazarhost ラザール',
rows: [{
title: 'Back ❌',
description: `Back To All Of Main Menu ❌`, 
id: '.allmenu'
},
{
title: 'Owner Menu ⚙️',
description: `Select To Displays Owner Menu If Your Owner`, 
id: '.ownermenu'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: grupmenu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/89d1595f342c2038d48da.jpg" } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6285655654790\",\"merchant_url\":\"https://wa.me/6285655654790\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
await Lazar.sendMessage(m.chat, {
    audio: fs.readFileSync('./menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
             break
             case 'ownermenu':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const ownermenu = `> ⏱️ *${wit}*
╭୧──────────┈◦•◦
│✼ *Nomor :* ${sender.split("@")[0]}
│✼ *Nama Bot :* ${namabot}
│✼ *Date :* ${wit}, ${hariini}
│✼ *Jumlah User:* User
│✼ *Fitur Saat ini :* ${totalFitur()}
│✼ *Status:* ${isSeler ? 'Seller user':'Free user'}
│✼ *Runtime :* ${runtime(process.uptime())}
꒰⚘݄꒱₊___________________˓
`+readmore+`
         *OWNER MENU*
╭୧⍤⃝───────────┈◦•◦❥•◦
│•⟢.addseler
│•⟢.addowner
│•⟢.delseler
│•⟢.delowner
│•⟢.delgc
│•⟢.addgc
│•⟢.addcase
│•⟢.creategc
│•⟢.bcgc
│•⟢.delsesi
│•⟢.listpc
│•⟢.listgc
│•⟢.pushkontak
│•⟢.self
│•⟢.public
꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
`
const videoFile = fs.readFileSync('./all/menu.mp3');
await loading ()
let sections = [{
title: 'List Menu',
highlight_label: 'Lazarhost ラザール',
rows: [{
title: 'Back ❌',
description: `Back To All Of Main Menu ❌`, 
id: '.allmenu'
},
{
title: 'Owner Menu ⚙️',
description: `Your Have Been Select This Menu ✅`, 
id: '.ownermenu'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ownermenu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/89d1595f342c2038d48da.jpg" } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6285655654790\",\"merchant_url\":\"https://wa.me/6285655654790\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
await Lazar.sendMessage(m.chat, {
    audio: fs.readFileSync('./menu.mp3'), mimetype:'audio/mpeg', ptt: true,
    viewOnce: false,
    }, { quoted: m})
             break
//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭





























case 'addlist':
if (!isOwner) return reply(`Maaf, Anda tidak dapat melakukan ini.`);
let args1 = text.split("@")[0]
let args2 = text.split("@")[1]
if (!q.includes("@")) return reply(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await Lazar.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Successful Add List With Key : *${args1}*`)
}
break


case 'dellist':
if (!isOwner) return reply(`Maaf, Anda tidak dapat melakukan ini.`);
if (db_respon_list.length === 0) return reply(`There is no message list in the database yet`)
if (!q) return reply(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`Item list by Name *${q}* not in the database!`)
delResponList(from, q, db_respon_list)
reply(`Successfully delete list message with key *${q}*`)
break

case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
reply(teks)
}
break


case 'deleteppbot': case 'delppbot': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Maaf, Anda tidak dapat melakukan ini.`);
    await Lazar.removeProfilePicture(Lazar.user.id)
    reply(`Success in deleting bot's profile picture`)
    }
    break

case 'gcbot':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
 let cap = `Untuk Menghindari Admin Group Marah :'v\nSilahkan Cek Chat Private Bot Untuk Link Group Nya`
Lazar.sendMessage(m.chat, {
      text: cap,
      contextInfo: {
      externalAdReply: {
      title: `${namabot}`,
      body: global.namaCreator,
      thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
      Lazar.reply(m.sender, `Grub Salazar - Private\n\nhttps://chat.whatsapp.com/HV8ErrQ5JgZ5xSsf8gmj1H`, m)
}
break

case 'owner':
case 'creator':{
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Lazar.user.jid : m.sender
let pp = await Lazar.profilePictureUrl(who).catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
let name = await Lazar.getName(who)

await Lazar.sendContactArray(m.chat, [ 
[`${owner}@s.whatsapp.net`, `${namaCreator}`, `Developer Bot`, `✍️ Masih Belajar Bwang Jangan Dibully`],
[`${Lazar.user.jid.split('@')[0]}`, `${await Lazar.getName(Lazar.user.jid)}`, `🤖 I'm Bot WhatsApp`, `⚠️ Please Dont Spam Block or Banned`]
], m)
await reply(`Hii 👋, Chat Me ? Jangan Basa Basi To The Point Aje!`)
} 
break

case 'addcase': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Maaf, Anda tidak dapat melakukan ini.`);
    if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'appearance.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('`sukses menambahkan case`');
            }
        });
    } else {
        reply('Tidak dapat menemukan case gimage dalam file.');
    }
});
}
     break
//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
     
case 'reqbuy': case 'buy': case 'beli': case 'purcase': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
let s = q.split(',')
let barang = s[0];
let garage = s[1]
let dll = s[2]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} reqbuy barang,garasi,detail pesanan`)
if (!barang) return reply(`Please Read The Tutorial`)
if (!garage) return reply(`Please Read The Tutorial`)

let tks = `
TYPE: Buyer
❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑
📊ADMIN: ${global.owner}
☢️Tanggal: ${hariini}
`
    const listMessage = {

        text: tks,

    }

	

    await Lazar.sendMessage(m.chat, listMessage)

    await Lazar.sendMessage('6285655654790' + "@s.whatsapp.net", {

        text: `*BERIKUT DETAIL REQUES BUYER ANDA*\n

❏━━『 *INFO BUYER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑
❏━━『 *INFO BUY* 』━━
┣✦  ʙᴀʀᴀɴɢ: ${barang} 
┣✦  ᴅᴀʏ: ${garage}
┣✦  ᴅʟʟ: ${dll} 
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑
Please Type :
.proses
`,
    })
    }
        break
case 'proses': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`*hedeh si ajg*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let barang = s[0];
let nomor = s[1]
let dll = s[2] || 'Tidak diketahui'
if (s.length < 1) return reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nomor,perkiraan waktu`)
if (!barang) return reply(`Please Write Name Paket`)
if (!nomor) return reply(`Please Write Point Nomor With 62XX`)

let tks = `
TYPE: Proses
❏━━『 *INFO USER* 』━━
┣✦  proses send to ${nomor}
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━
Please Type
.done
`
    const listMessage = {

        text: tks,

    }

	

    await Lazar.sendMessage(m.chat, listMessage)

    await Lazar.sendMessage(nomor + "@s.whatsapp.net", {

        text: `*BERIKUT DETAIL REQUES ANDA*\n

❏━━『 *INFO BUYER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑
❏━━『 *INFO BUY* 』━━
┣✦  ʙᴀʀᴀɴɢ: ${barang} 
┣✦  ᴅʟʟ: pesanan telah di proses
┣✦  ᴛɪᴍᴇ : perkiraan ${dll}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑
`,
    })
    }
        break
case 'done': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`*hedeh si ajg*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let barang = s[0];
let nomor = s[1]
let dll = s[2]
if (s.length < 1) return reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nomer,detail pesanan`)
if (!barang) return reply(`Please Write Paket`)
if (!nomor) return reply(`Please Write nomor`)

let tks = `
TYPE: Done
❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ʙᴀʀᴀɴɢ: ${barang} 
┗━═┅═━━━═┅═━━━═┅═━━━๑
☢️Tanggal: ${hariini}
`
    const listMessage = {

        text: tks,

    }

	

    await Lazar.sendMessage(m.chat, listMessage)

    await Lazar.sendMessage(nomor + "@s.whatsapp.net", {

        text: `*BERIKUT DETAIL REQUES BUYER ANDA*\n
❏━━『 *INFO BUY* 』━━
┣✦  ʙᴀʀᴀɴɢ: ${barang} 
┣✦  ᴅʟʟ: *Your package has been completed in the process*
┗━═┅═━━━═┅═━━━═┅═━━━๑
𝓟𝓔𝓢𝓐𝓝:
${dll}

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑
`,
    })
    }
        break
  case 'listuser': case 'listusr': case 'lusr': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
  if (!isSeler && !isOwner) return reply(mess.only.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = `❏ 🌎 *Berikut List User Yang Tersedia* :\n\n`;
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `*╭ ────━─── ❏❏ ────━───❏*\n`;
    messageText += `*│* • *ID*: ${u.id}\n`;
    messageText += `*│* • *Name*: ${u.username}\n`;
    messageText += `*│* • *DLL*: ${u.email}\n`;
    messageText += `*╰* • *aktif*: ${u.attributes?.user?.server_limit === null ? 'inactive' : 'active'}\n\n`;
    
  }
  
  messageText += `> © 𝓛𝓪𝔃𝓪𝓻𝓱𝓸𝓼𝓽 𝓜𝓮𝓭𝓲𝓪\n`;
  messageText += `> *▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭*\n`;
  messageText += `> *╔ Page* : ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `> *╚ Total Users* : ${res.meta.pagination.count}`;
  
  await Lazar.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'listserver': case 'listsrv': case 'lsrv': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = `❏ 🌏 *Berikut List Admin Yang Tersedia* :\n\n`;
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    
    messageText += `*╭ ────━─── ❏❏ ────━───❏*\n`;
    messageText += `*│* • *S ID* : ${s.id}\n`;
    messageText += `*│* • *S Name* : ${s.name}\n`;
    messageText += `*╰* • *Status* : ${status}\n\n`;
  }
  
  messageText += `> © 𝓛𝓪𝔃𝓪𝓻𝓱𝓸𝓼𝓽 𝓜𝓮𝓭𝓲𝓪\n`;
  messageText += `> *▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭*\n`;
  messageText += `> *╔ Halaman* : ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `> *╚ Total Server* : ${res.meta.pagination.count}`;
  
  await Lazar.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case 'listadmin': case 'listadm': case 'ladm': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = `❏ ⭐ *Berikut List Admin Yang Tersedia* :\n\n`;

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
    messageText += `*╭ ────━─── ❏❏ ────━───❏*\n`;
    messageText += `*│* • *ID*: ${u.id}\n`;
    messageText += `*│* • *Name*: ${u.username}\n`;
    messageText += `*│* • *DLL*: ${u.email}\n`;
    messageText += `*╰* • *Status*: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n\n`;
    }
  }

  messageText += `> © 𝓛𝓪𝔃𝓪𝓻𝓱𝓸𝓼𝓽 𝓜𝓮𝓭𝓲𝓪\n`;
  messageText += `> *▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭*\n`;
  messageText += `> *Halaman* : ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`;

  await Lazar.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
//===============CREATE PANEL =================
case '1gb': {
    
    if (!isSeler && !isOwner) return reply(mess.only.premium)
 

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${makeid(3)}`
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@LBuy.Lazar.id"
akunlo = "https://telegra.ph/file/530c2d6a9f0259a6e2f28.jpg" 
if (!u) return
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = `${makeid(5)}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `> *Berikut Data Anda*

* *ID* : ${user.id}
* *Nama* : ${user.username}
* *Pasaword* : ${password}
`
let msg = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: akunlo } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login Website ✅\",\"url\":\"${domain}\",\"merchant_url\":\"https://google.com\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Berhasil Membuat Data Panel* ✅
* *Type : DataSet*
* *User ID* : ${user.id}
* *Server ID* : ${server.id}
* *Name* : ${user.username}
* *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
* *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
* *Cpu* : ${server.limits.cpu}%

> © Lazarhost ラザール
`)

}
break
case '2gb': {
    if (!isSeler && !isOwner) return reply(mess.only.premium)
 

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${makeid(3)}`
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + "@LBuy.Lazar.id"
akunlo = "https://telegra.ph/file/530c2d6a9f0259a6e2f28.jpg" 
if (!u) return
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = `${makeid(5)}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `> *Berikut Data Anda*

* *User ID* : ${user.id}
* *Nama* : ${user.username}
* *Pasaword* : ${password}
`
let msg = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: akunlo } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login Website ✅\",\"url\":\"${domain}\",\"merchant_url\":\"https://google.com\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Berhasil Membuat Data Panel* ✅
* *Type : DataSet*
* *User ID* : ${user.id}
* *Server ID* : ${server.id}
* *Name* : ${user.username}
* *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
* *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
* *Cpu* : ${server.limits.cpu}%

> © Lazarhost ラザール
`)

}

break
case '3gb': {
    if (!isSeler && !isOwner) return reply(mess.only.premium)
 

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${makeid(3)}`
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "3072"
let email = username + "@LBuy.Lazar.id"
akunlo = "https://telegra.ph/file/530c2d6a9f0259a6e2f28.jpg" 
if (!u) return
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = `${makeid(5)}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `> *Berikut Data Anda*

* *User ID* : ${user.id}
* *Nama* : ${user.username}
* *Pasaword* : ${password}
`
let msg = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: akunlo } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login Website ✅\",\"url\":\"${domain}\",\"merchant_url\":\"https://google.com\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Berhasil Membuat Data Panel* ✅
* *Type : DataSet*
* *User ID* : ${user.id}
* *Server ID* : ${server.id}
* *Name* : ${user.username}
* *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
* *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
* *Cpu* : ${server.limits.cpu}%

> © Lazarhost ラザール
`)

}
break
case '4gb' :{
    if (!isSeler && !isOwner) return reply(mess.only.premium)
 
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${makeid(3)}`
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "4000"
let email = username + "@LBuy.Lazar.id"
akunlo = "https://telegra.ph/file/530c2d6a9f0259a6e2f28.jpg" 
if (!u) return
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = `${makeid(5)}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `> *Berikut Data Anda*

* *User ID* : ${user.id}
* *Nama* : ${user.username}
* *Pasaword* : ${password}
`
let msg = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: akunlo } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login Website ✅\",\"url\":\"${domain}\",\"merchant_url\":\"https://google.com\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Berhasil Membuat Data Panel* ✅
* *Type : DataSet*
* *User ID* : ${user.id}
* *Server ID* : ${server.id}
* *Name* : ${user.username}
* *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
* *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
* *Cpu* : ${server.limits.cpu}%

> © Lazarhost ラザール
`)
}
break
case 'unli': {
if (!isSeler && !isOwner) return reply(mess.only.premium)
 
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${makeid(3)}`
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@LBuy.Lazar.id"
akunlo = "https://telegra.ph/file/530c2d6a9f0259a6e2f28.jpg" 
if (!u) return
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = `${makeid(5)}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `> *Berikut Data Anda*

* *User ID* : ${user.id}
* *Nama* : ${user.username}
* *Pasaword* : ${password}
`
let msg = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: akunlo } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login Website ✅\",\"url\":\"${domain}\",\"merchant_url\":\"https://google.com\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Berhasil Membuat Data Panel* ✅
* *Type : DataSet*
* *User ID* : ${user.id}
* *Server ID* : ${server.id}
* *Name* : ${user.username}
* *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
* *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
* *Cpu* : ${server.limits.cpu}%

> © Lazarhost ラザール
`)

}

break
case '5gb':{
if (!isSeler && !isOwner) return reply(mess.only.premium)
 
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${makeid(3)}`
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "5138"
let email = username + "@LBuy.Lazar.id"
akunlo = "https://telegra.ph/file/530c2d6a9f0259a6e2f28.jpg" 
if (!u) return
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = `${makeid(10)}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `> *Berikut Data Anda*

* *User ID* : ${user.id}
* *Nama* : ${user.username}
* *Pasaword* : ${password}
`
let msg = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: akunlo } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login Website ✅\",\"url\":\"${domain}\",\"merchant_url\":\"https://google.com\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Berhasil Membuat Data Panel* ✅
* *Type : DataSet*
* *User ID* : ${user.id}
* *Server ID* : ${server.id}
* *Name* : ${user.username}
* *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
* *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
* *Cpu* : ${server.limits.cpu}%

> © Lazarhost ラザール
`)

}

break
case '6gb':{
if (!isSeler && !isOwner) return reply(mess.only.premium)
 

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${makeid(3)}`
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "150"
let disk = "6144"
let email = username + "@LBuy.Lazar.id"
akunlo = "https://telegra.ph/file/530c2d6a9f0259a6e2f28.jpg" 
if (!u) return
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = `${makeid(10)}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `> *Berikut Data Anda*

* *User ID* : ${user.id}
* *Nama* : ${user.username}
* *Pasaword* : ${password}
`
let msg = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: akunlo } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login Website ✅\",\"url\":\"${domain}\",\"merchant_url\":\"https://google.com\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Berhasil Membuat Data Panel* ✅
* *Type : DataSet*
* *User ID* : ${user.id}
* *Server ID* : ${server.id}
* *Name* : ${user.username}
* *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
* *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
* *Cpu* : ${server.limits.cpu}%

> © Lazarhost ラザール
`)

}

break
case '7gb':{
if (!isSeler && !isOwner) return reply(mess.only.premium)
 

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${makeid(3)}`
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "170"
let disk = "7168"
let email = username + "@LBuy.Lazar.id"
akunlo = "https://telegra.ph/file/530c2d6a9f0259a6e2f28.jpg" 
if (!u) return
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = `${makeid(10)}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `> *Berikut Data Anda*

* *User ID* : ${user.id}
* *Nama* : ${user.username}
* *Pasaword* : ${password}
`
let msg = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: akunlo } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login Website ✅\",\"url\":\"${domain}\",\"merchant_url\":\"https://google.com\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Berhasil Membuat Data Panel* ✅
* *Type : DataSet*
* *User ID* : ${user.id}
* *Server ID* : ${server.id}
* *Name* : ${user.username}
* *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
* *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
* *Cpu* : ${server.limits.cpu}%

> © Lazarhost ラザール
`)

}

break
case '8gb' :{
if (!isSeler && !isOwner) return reply(mess.only.premium)
 

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${makeid(3)}`
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "200"
let disk = "8192"
let email = username + "@LBuy.Lazar.id"
akunlo = "https://telegra.ph/file/530c2d6a9f0259a6e2f28.jpg" 
if (!u) return
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = `${makeid(10)}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `> *Berikut Data Anda*

* *User ID* : ${user.id}
* *Nama* : ${user.username}
* *Pasaword* : ${password}
`
let msg = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: akunlo } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login Website ✅\",\"url\":\"${domain}\",\"merchant_url\":\"https://google.com\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Berhasil Membuat Data Panel* ✅
* *Type : DataSet*
* *User ID* : ${user.id}
* *Server ID* : ${server.id}
* *Name* : ${user.username}
* *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
* *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
* *Cpu* : ${server.limits.cpu}%

> © Lazarhost ラザール
`)

}

break
case '9gb': {
if (!isSeler && !isOwner) return reply(mess.only.premium)
 

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + `${makeid(3)}`
let egg = global.eggsnya
let loc = global.location
let memo = "9216"
let cpu = "220"
let disk = "9216"
let email = username + "@LBuy.Lazar.id"
akunlo = "https://telegra.ph/file/530c2d6a9f0259a6e2f28.jpg" 
if (!u) return
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = `${makeid(10)}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `> *Berikut Data Anda*

* *User ID* : ${user.id}
* *Nama* : ${user.username}
* *Pasaword* : ${password}
`
let msg = generateWAMessageFromContent(u, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Lazar', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Lazar.decodeJid(Lazar.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ctf
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ('LCodeI拉D')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ ${m.sender.split('@')[0]}\n`,
 subtitle: "LazarHost ラザール",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: akunlo } }, { upload: Lazar.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Login Website ✅\",\"url\":\"${domain}\",\"merchant_url\":\"https://google.com\"}`
 },
 ],
 })
 })
 }
 }
}, {})

await Lazar.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Berhasil Membuat Data Panel* ✅
* *Type : DataSet*
* *User ID* : ${user.id}
* *Server ID* : ${server.id}
* *Name* : ${user.username}
* *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
* *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
* *Cpu* : ${server.limits.cpu}%

> © Lazarhost ラザール
`)

}

break
case 'adduser': case 'cuser': case 'addusr': case 'cusr': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`sᴏʀʀʏ ʙᴜᴛ ᴛʜɪs ғɪᴛᴜʀ ɪs ᴏɴʟʏ ғᴏʀ sᴀʟᴀᴢᴀʀ`)
let t = text.split(',');
if (t.length < 1) return reply(`*Format salah!*

Penggunaan:
${prefix + command} username,number/tag`);
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await Lazar.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[1]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@LOwn.id",
"username": username,
"first_name": "I Dont Now",
"last_name": "LBuyer",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await Lazar.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

  INFO USER
*⥁**ID* : ${user.id}
*⥁**USERNAME* : ${user.username}
*⥁**EMAIL* : ${user.email}
*⥁**NAME* : ${user.first_name} ${user.last_name}
*⥁**CREATED AT* :  ${hariini}
*⥁**PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
Lazar.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
  INFO USER
*⥁**EMAIL* : ${email}
*⥁**USERNAME* : ${username}
*⥁**PASSWORD* : ${password.toString()}
*⥁**LOGIN* : ${domain}
*⥁**INFO PANEL* : https://chat.whatsapp.com/DEn9fBxRkFv4geSUxzQQcP
*⥁**TUTOR* : https://youtu.be/@Zennhostt
`,
})
}
break
case 'addserver': case 'cserver': case 'addsrv': case 'csrv': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
let s = text.split(',');
if (s.length < 4) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = global.eggsnya;
let loc = global.location;
let memo_disk = s[3].split`/`;
let cpu = s[4];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

*⥁*ID: ${server.id}
*⥁*UUID: ${server.uuid}
*⥁*NAME: ${server.name}
*⥁*DESCRIPTION: ${server.description}
*⥁** *Memory* : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
*⥁** *Disk* : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
*⥁** *Cpu* : ${server.limits.cpu}%
*⥁*CREATED AT: ${server.created_at}`)
}
        break
case 'addadm': case 'addadmin': case 'cadm': case 'cadmin': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
     
if (!isOwner) return reply(`*hedeh si ajg*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@LOwn.id",
"username": username,
"first_name": username,
"last_name": "LBuyer",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
* *Type : DataSet*

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖* *Name* : ${user.username}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await Lazar.sendMessage(m.chat, listMessage)

    await Lazar.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n
$const ${requere} readmore

👤USERNAME :  ${username}
🔑PASSWORD: ${password}
🌐LOGIN: ${domain}
🖥️TUTORIAL : https://youtu.be/4XRnXhSrroo?si=YCuR1NymeA0yWDU3
🖥️TUTORIAL RUN BOT : https://youtu.be/-XKfz5Xzqt4

*NOTE : 
1.Jangan mengunakan panel Sampai Overload
2.Jangan Otak Atik Dibagian3.Harap Tidak Membagikan Domain Panel!
4.Jangan Mencuri Script Yang Ada Di Server Orang
5.Dilarang Mengecek Server Orang Lain
6.Dilarang Mendelete User/Server Sembarangan
7.Jangan Bagikan Akun Panel Anda
❗️ *Harap Simpan Data Akun Panel Anda* ❗️

OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*

`,
    })
} 
break
case 'delsrv': case 'dsrv': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
 
if (!isOwner) return reply('*KHUSUS OWNER*')
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break

case 'delusr': case 'dusr': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
 
if (!isOwner) return reply('*KHUSUS OWNER*')
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
        case 'panel': {
const owned = `6285655654790@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*
 
BY MrLazar

CARA ADD USER PANEL :
ram user,nomer

contoh Server 1 : 1gb Zar,628xxxxx

Powered By *LazarHost 💥*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Lazar.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
//================= OWNER MENU =================
case 'addowner':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285655654790`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Lazar.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case 'leave':

            case 'out':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isOwner) return reply(`Only Owner`);
                if (!isGroup) return reply(mess.only.group);
                reply('Bye Everyone 🥺')
                await Lazar.groupLeave(m.chat)
            break
case 'tagall':

            case 'tag':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isGroup) return reply(mess.only.group);
                if (!isAdmins && !isGroupOwner && !isOwner) return reply(`Only Owner`);
                if (!isBotAdmins) return reply(mess.only.badmin);
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                Lazar.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break;
            case 'setbotbio':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Only my Owner`)

if (!text) return reply(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await Lazar.updateProfileStatus(text)
    reply(`Success in changing the bio of bot's number`)
    }
    break;
       case 'creategc': case 'creategroup': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Only my Owner`)

if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await Lazar.groupCreate(args.join(" "), [])
let response = await Lazar.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
Lazar.sendMessage(m.chat, { text:teksop, mentions: await Lazar.parseMention(teksop)}, {quoted:m})
} catch {
	reply(`Error`)
	}
}
break;










case 'artimimpi': case 'tafsirmimpi': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} Dika Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} Dika|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!ext)return reply(`Contoh : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
case 'artitarot': case 'tarot': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') return date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
                if (!text) return reply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                Lazar.sendText(m.chat, `• *Hasil :* ${anu.message}`, m)
            }
            break
            

















case 'artimimpi': case 'tafsirmimpi': {
  
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
await loading ()
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return m.reply(anu.message)
 Lazar.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break

            case 'togif': {
              if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
                await loading ()
                let media = await Lazar.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Lazar.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break

case 'toqr':{
  if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
  if (!q) return replygcxeon(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await Lazar.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break

case 'listonline':
            case 'liston': {
              if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isGroup) reply(mess.only.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                Lazar.sendMessage(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break

case  'delsesi':
            case 'clearsession': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isCreator) return reply(mess.only.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Menghapus file sampah...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Berhasil menghapus semua sampah di folder session")
                });
            }
            break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isGroup) return reply(mess.only.group)
 if (!quoted) return reply(` reply Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Lazar.sendImageAsSticker(from, media, m, { packname: global.packName, author: global.authorName })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await Lazar.sendVideoAsSticker(from, media, m, { packname: global.packName, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'qc': {
  
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
            const { quote } = require('./all/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await Lazar.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            await loading ()
            Lazar.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break

case 'git': case 'gitclone':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Lazar.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply('Terjadi Kesalahan'))
break

case 'npmstalk':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!q) return reply(`Example ${prefix+command} xeonapi`)
await loading ()
let npmstalk = require('./all/scraper')
eha = await npmstalk.npmstalk(q)
reply(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break

case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await loading ()
                let media = await Lazar.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Lazar.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break

case 'removebg': case 'nobg':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await Lazar.sendMessage(m.chat, {image: {url: data.url.result}, caption: `Here u go!`}, {quoted: m})
}
break
case'tozombie':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await Lazar.sendMessage(m.chat, {image: {url: data.url}, caption: `Here u go!`}, {quoted: m})
}
break

case 'tovn':
            case 'toptt': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await loading ()
                let media = await Lazar.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./all/converter')
                let audio = await toPTT(media, 'mp4')
                Lazar.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break

case 'tourl': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                await loading ()
                let media = await Lazar.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            
case 'toaud':
            case 'toaudio': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await loading ()
                let media = await Lazar.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Lazar.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await loading ()
                let media = await Lazar.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                Lazar.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dgxeon.mp3`
                }, {
                    quoted: m
                })

            }
            break
            
            
            












case 'add':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isGroup) return reply(mess.only.group);

                if(!isOwner) return reply(`Only Owner`);
                if (!isBotAdmins) return reply(mess.only.badmin);
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Lazar.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                reply(`Success`);
                break;
case 'promote':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isGroup) return reply(mess.only.group);
                if(!isOwner) return reply(`Only Owner`);
                if (!isBotAdmins) return reply(mess.only.badmin);
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Lazar.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                reply(`Success`);
                break
case 'demote':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isGroup) return reply(mess.only.group);
                if(!isOwner) return reply(`Only Owner`);
                if (!isBotAdmins) return reply(mess.only.badmin);
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Lazar.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                reply(`Success`);
                break
case 'setnamegc':
            case 'setsubject':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isGroup) return reply(mess.only.group);
                if(!isOwner) return reply(`Only Owner`);
                if (!isBotAdmins) return reply(mess.only.badmin);
                if (!text) return reply('Text ?')
                await Lazar.groupUpdateSubject(m.chat, text)
                reply(`Success`);
                break
                case 'userjid':{
          	if(!isOwner) return reply(`Only Owner`);
        const groupMetadata = m.isGroup ? await Lazar.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `🛡 ${mem.id}\n`
        }
      reply(textt)
    }
    break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isGroup) return reply(mess.only.group);
if (!isAdmins && !isOwner) return XeonStickAdmin()
if (!isBotAdmins) return reply(mess.only.badmin);
    await Lazar.removeProfilePicture(from)
    }
    break
case 'setdesc':
            case 'setdesk':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isGroup) return reply(mess.only.group);
                if(!isOwner) return reply(`Only Owner`);
                if (!isBotAdmins) return reply(mess.only.badmin);
                if (!text) return reply('Text ?')
                await Lazar.groupUpdateDescription(m.chat, text)
                reply(`Success`);
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!isGroup) return reply(mess.only.group);
                if(!isOwner) return reply(`Only Owner`);
                if (!isBotAdmins) return reply(mess.only.badmin);
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Lazar.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Lazar.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(`Success`);
                } else {
                    var memeg = await Lazar.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(`Success`);
                }
                break
                
case 'kickall': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
 if (!isGroup) return reply(mess.only.group);
 if(!isOwner) return reply(`Only Owner`);
 if (!isBotAdmins) return reply(mess.only.badmin);
  const xeonkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of xeonkickall) {
 await Lazar.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 reply(`Success`);
}
break

case 'promoteall': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
 if (!isGroup) return reply(mess.only.group);
 if(!isOwner) return reply(`Only Owner`);
 if (!isBotAdmins) return reply(mess.only.badmin);
  const xeonpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of xeonpromoteall) {
 await Lazar.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 reply(`Success`);
}
break

case 'demoteall': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
 if (!isGroup) return reply(mess.only.group);
 if(!isOwner) return reply(`Only Owner`);
 if (!isBotAdmins) return reply(mess.only.badmin);
  const xeondemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of xeondemoteall) {
 await Lazar.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 reply(`Success`);
}
break
case 'revoke':
            case 'resetlink':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isGroup) return reply(mess.only.group);
                if(!isOwner) return reply(`Only Owner`);
                if (!isBotAdmins) return reply(mess.only.badmin);
                await Lazar.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Reset Success`)
                    })
            break
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
case 'delowner':
  if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285655654790`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case 'addseler':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285655654790`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Lazar.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
seler.push(prrkek)
fs.writeFileSync("./all/database/seler.json", JSON.stringify(seler))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case 'delseler':{
  if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285655654790`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = seler1.indexOf(ya)
seler.splice(unp, 1)
fs.writeFileSync("./all/database/seler.json", JSON.stringify(seler))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case 'delgc':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
var ini = pler.indexOf(m.chat)
plerr.splice(ini, 1)
fs.writeFileSync('./all/database/cpgrup.json', JSON.stringify(plerr))
reply(`${command} Success Not Active Mr-LazarID💥`)
break
case 'addgc':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
plerr.push(m.chat)
fs.writeFileSync('./all/database/cpgrup.json', JSON.stringify(plerr))
reply(`${command} Success Active To Crate Panel Mr-LazarID💥`)
break
//=============== DOWNLOAD MENU =================
case 'play': 
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!isGroup) return (mess.only.group)
if (!q) return reply("Kirim perintah judul lagu/link youtube nya bwang")
try {
await loading ()
let rus = await yts(q)
if (rus.all.length == "0") return reply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `> *Y T  S T U D I O*
> *╭────━─── ❏ ❏ ────━───❏*
> *│* ◈ *Channel* : ${res.author.name}
> *│* ◈ *Viewers* : ${h2k(res.views)} 
> *│* ◈ *Duration* : ${res.timestamp}
> *╰* ◈ *Url* : ${res.url}`


Lazar.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `${wit} , ${hariini}`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
reply(`Server sedang error`)
}
}
break
case 'tiktok': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!text) return reply( `*Example :* ${prefix + command} linknya`)
await Lazar.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})   
if (!q.includes('tiktok')) return reply(`Link Invalid!`)
require('./all/tiktok.js').Tiktok(q).then( data => {
Lazar.sendMessage(m.chat, { caption: `*DONE*`, video: { url: data.nowm }}, {quoted: m})
const ttmp3nya = {url:data.audio}
Lazar.sendMessage(m.chat, { audio: ttmp3nya, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case 'tiktokaudio':
case 'tiktokmp3':{ 
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
await loading ()
 const Tiktok = require('./all/tiktok.js')
require('./all/tiktok').Tiktok(q).then( data => {
Lazar.sendMessage(m.chat, { caption: `Sukses, Ini Tuan Audio Nya`, audio: { url: data.audio }}, {quoted:m})
})
}
break
case 'mediafire': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
	if (args.length == 0) return reply(`Link Nya Om?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./all/database/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
Lazar.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'hdr': case 'remini':{
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
	   	if (!quoted) return reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			const { remini } = require('./all/remini.js')
			let proses = await remini(media, "enhance");
			Lazar.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break
		
 case 'ai': case 'openai': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!text) reply( 'Masukkan text!')
var api = await fetchJson(`https://api.betabotz.eu.org/api/search/c-ai?prompt=${text}&char=Nahida&apikey=adHlAudF`)
Lazar.sendMessage(m.chat, { text: api.message }, {quoted: fkontak })
}
break
//================== FUN MENU ===================
case 'apakah': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
                }
                break
case 'bisakah': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                 if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
                }
                break
case 'bagaimanakah': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                 if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
                }
            break
case 'rate': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                 if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                reply(`Rate : ${q}\nJawaban : *${te}%*`)
                }
            break
case 'gantengcek':
            case 'cekganteng': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
                const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                reply(`Nama : ${q}\nJawaban : *${teng}%`)
                }
            break
case 'kapankah': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                  if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
                }
            break
            
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!m.quoted && !text) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
            
case 'cekmati': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                }
            break
case 'wangy': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!q) return reply(`Contoh : .wangy Riy`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                reply(awikwok)
                }
            break
case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                reply(`Nama : ${q}\nJawaban : *${sange}%*`)
                }
            break
case 'cantikcek':
            case 'cekcantik': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const tik = can[Math.floor(Math.random() * can.length)]
                reply(`Nama : ${q}\nJawaban : *${tik}%`)
                }
            break
            
            
            
            
            
case 'suprise': {
if (!isOwner) return reply(`Only Owner`)
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['Selamat Kamu Mendapatkan Zonk ❌\nCanda Kocak Lu Dapet 1x SuprisePlus ✅','Selamat Kamu Mendapatkan Zonk ❌','Mendapatkan Perpanjangan Garansi ✅\nKalo Punya sih 😂','Mendapatkan SC Cpanel Terbaru Tetapi Index.js ✅\nKena... Apa Hayoo 😂','Selamat Kamu Mendapatkan Zonk ❌','Selamat Kamu Mendapatkan Zonk ❌','Yeee Dapet Zonk ❌','Dapet SuprisePlus Moga Beruntung ya ✅','Dapet Jadi Seler Garansi 20day','Telah Mendapatkan Zonk ❌','Telah Mendapatkan Zonk ❌','Zonk ❌','Mendapatkan SC Random ✅','Zonk ❌','Yahhh Dapet Zonk nih ❌','Mendapatkan Dua Kali Kesempatan SuprisePlus Jika Dapet Maka Habis ✅','Zonk ❌']
                const tik = can[Math.floor(Math.random() * can.length)]
                await suprise ()
                reply(`Nama : ${q}\nJawaban : ${tik}`)
                }
            break
            
            
case 'supriseplus': {
if (!isOwner) return reply(`Only Owner`)
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['Selamat Kamu Mendapatkan Zonk ❌\nDamn Dapet PT Panel Garansi 20day ✅','Selamat Kamu Mendapatkan Zonk ❌','Mendapatkan Perpanjangan Garansi ✅\nKalo Punya sih 😂','','Mendapatkan SC Cpanel Terbaru Full No Enc 😖✅','Selamat Kamu Mendapatkan Zonk ❌','Mendapatkan Free Panel Unli Garansi 40day✅','Selamat Kamu Mendapatkan Zonk ❌','Yeee Dapet Zonk ❌','Dapet SuprisePlus Moga Beruntung ya ✅','Dapet Jadi Seler Garansi 40day','Telah Mendapatkan Zonk ❌','Telah Mendapatkan Zonk ❌','Zonk ❌','Mendapatkan Owner Panel Dengan Garansi\nHingga Owner Tutup Store 😊✅','Zonk ❌','Yahhh Dapet Zonk nih ❌','Mendapatkan Kesempatan SuprisePlus Sekali Lagi','Zonk ❌']
                const tik = can[Math.floor(Math.random() * can.length)]
                await plus ()
                reply(`Nama : ${q}\nJawaban : ${tik}`)
                }
            break
            
//================== OWNER MENU =================
case 'pushkontak': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
          if (!text) return reply(`Example ${prefix}${command} Hi Semuanya`)
          if (!isOwner) return reply(`Only Owner`)
          let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
          let count = get.length;
          let sentCount = 0;
          reply('*_Sedang Push Kontak..._*');
          for (let i = 0; i < get.length; i++) {
            setTimeout(function() {
              Lazar.sendMessage(get[i], { text: text });
              count--;
              sentCount++;
              if (count === 0) {
                reply(`*_Semua pesan telah dikirim!_*:\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
              }
            }, i * 1000); // delay setiap pengiriman selama 1 detik
          }
        }
        break
case 'listpc': {
                if (!isOwner) return reply(`Only Owner`)
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let tekslist = `*🔒 LIST PERSONAL CHAT*\n\n`
                tekslist += `*📱 Total Chat :* ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    tekslist += `📛 *Nama :* ${nama}\n`
                    tekslist += `👤 *User :* @${i.split('@')[0]}\n`
                    tekslist += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
                    tekslist += `──────────────────────\n\n`
                }
                reply(tekslist)
            }
        break
case 'listgc': {
                if (!isOwner) return reply(`Only Owner`)
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
                tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
                for (let e of anu) {
                    let metadata = await Lazar.groupMetadata(e)
                    tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
                    tekslistgc += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
                    tekslistgc += `🌱 *ID :* ${metadata.id}\n`
                    tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                reply(tekslistgc)
            }
        break
case 'speedtest': {
                reply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) reply(stdout)
                    if (stderr.trim()) reply(stderr)
                }
            }
        break
case 'sc':
            case 'script':
               Lazar.relayMessage(m.chat, {
                "requestPaymentMessage": {
                    amount: {
                        value: 2022000,
                        offset: 0,
                        currencyCode: 'IDR'
                    },
                    amount1000: 20000000,
                    background: null,
                    currencyCodeIso4217: 'USD',
                    expiryTimestamp: 0,
                    noteMessage: {
                        extendedTextMessage: {
                            text: 
                            
                            `Pengen Sc ${namabot}?\nUntuk Sekarang SC Ini Tidak Tersedia Di YT\n\nMaka SC Ini Dijual Dengan Harga 20k\nIni Adalah Separuh Harga Dari Harga Asli\nBisa Beli Di Creator Bot Saat Ini\n.owner`
                        }
                    },
                    requestFrom: m.sender
                }
            }, {})
            break
case 'bcgc': {
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                if (!isOwner) return reply(`Only Owner`)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let getGroups = await Lazar.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      reply(i, {
                        text: txt,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `L O A D I N G`,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                                sourceUrl: 'https://chat.whatsapp.com/DEn9fBxRkFv4geSUxzQQcP',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
case 'join':
if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
                try {

                    if (!isOwner) return reply(`Only Owner`)
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    Lazar.groupAcceptInvite(result)
                    await reply(`Done`)
                } catch {
                    reply('Failed to join the Group')
                }
                break
  case 'totag': {
    if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply(`lu bukan owner jangan sok asik`);
    if (!isBotAdmins) return reply(mess.only.badmin);
    
    if (!m.quoted) return reply(`Reply pesan dengan caption ${prefix + command}`);
    
    const mentionedUsers = participants.map(a => a.id);
    Lazar.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: mentionedUsers });
}
break
case 'hidetag': {
  if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus Owner Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
Lazar.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'kick': {
  if (cekUser("id", sender) == null) return Lazar.sendMessage(from, { text: `Unknown Person *@${sender.split('@')[0]}* Please Register First in Order to Use the Command ${command}\n> ${wit}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(mess.only.premium)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Lazar.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break    
case 'public': {
  
    if (!isOwner) return reply(`lu bukan owner gausah sok asik`);
    Lazar.public = true;
    reply(`*Mode Public diaktifkan oleh Tuan! ✅*`);
}
break;
    case 'totalfitur': case 'totalfiture': case 'totalpitur': {
          reply (`*Total Fitur Versi Sekarang ini:* ${totalFitur()}`)
    }
    break;
case 'self': {
    if (!isOwner) return reply(`Lu bukan owner ga usah sok asik`);
    Lazar.public = false;
    reply(`*Mode Self diaktifkan oleh Tuan! ✅*`);
}
break;
case 'tes': case 'bot': {
  const owned = `6285655654790@s.whatsapp.net`;
  const responseText = `Bot aktif kak @${sender.split("@")[0]} 🫡`;
  
  Lazar.sendMessage(from, {
    text: responseText,
    contextInfo: {
      mentionedJid: [sender, owned],
      forwardingScore: 9999,
      isForwarded: true
    }
  }, { quoted: m });
}
break
case 'p': case 'assalamualaikum': case "assalamu'alaikum": {
  const owned = `6285655654790@s.whatsapp.net`;
  const responseText = `Waalaikumsalam Bot Masih Aktif kak @${sender.split("@")[0]} 😊`;
  
  Lazar.sendMessage(from, {
    text: responseText,
    contextInfo: {
      mentionedJid: [sender, owned],
      forwardingScore: 9999,
      isForwarded: true
    }
  }, { quoted: m });
}
break
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
Lazar.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})