// SC ORI : ManzBot
// PEMILIK ORI : MrLazar
//=================================/
// ILANGAN BAGIAN ATAS NERAKA PALING BAWAH TEMPAT MU


module.exports = async (Manz, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await Manz.decodeJid(Manz.user.id)
const sender = m.key.fromMe ? (Manz.user.id.split(':')[0]+'@s.whatsapp.net' || Manz.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Manz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
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
const antilink = JSON.parse(fs.readFileSync('./all/antilink.json'));

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Manz.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

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
displayName: await Manz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Manz.getName(i + '@s.whatsapp.net')}\n
FN:${await Manz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Manz@gmail.com\n
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
ppuser = await Manz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

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
Manz.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
Manz.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "LazarHost 💥", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://telegra.ph/file/f2c25fd18ec9c26a6d744.jpg", 
"sourceUrl": "" }}}, { quoted: m }) }

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
    
if (antilink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await Manz.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return Manz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return Manz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isOwner) return Manz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await Manz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
Manz.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:Manz})
}
}

switch (command) {
case 'menu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `*Hi @${sender.split("@")[0]} 👋${ucapanWaktu}*
❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *LIST MENU* 』━━
┣✦ allmenu
┣✦ mainmenu
┣✦ panelmenu
┣✦ grupmenu
┣✦ ownermenu
┗━═┅═━━━๑`
const videoFile = fs.readFileSync('./all/menu.mp3');
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 📕\",\"url\":\"https://youtube.com/@Zennhostt\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 📘\",\"url\":\"https://t.me/lixxch\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Website ⚙️\",\"url\":\"https://lynk.id/szz\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Owner 🛡\",\"url\":\"https://wa.me/6285649735418\",\"merchant_url\":\"https://www.google.com\"}"
              },           
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Mainmenu 🗂","id":"${prefix}mainmenu"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Panelmenu 🗂","id":"${prefix}panelmenu"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Grupmenu 🗂","id":"${prefix}grupmenu"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Ownermenu 🗂","id":"${prefix}ownermenu"}`
              }
           ],
          })
        })
    }
  }
}, {})
await Manz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

     break

case 'allmenu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const allmenu = `*Hi @${sender.split("@")[0]} 👋${ucapanWaktu}*
❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *LIST MENU* 』━━
┣✦ allmenu
┣✦ mainmenu
┣✦ panelmenu
┣✦ grupmenu
┣✦ ownermenu
┗━═┅═━━━๑

❏━━『 *MAIN MENU* 』━━
┣✦ ai / openai
┣✦ hdr
┣✦ remini
┣✦ tiktok
┣✦ tiktokaudio
┣✦ mediafire
┗━═┅═━━━๑

❏━━『 *PANEL MENU* 』━━
┣✦ 1gb *nama,number*
┣✦ 2gb *nama,number*
┣✦ 3gb *nama,number*
┣✦ 4gb *nama,number*
┣✦ 5gb *nama,number*
┣✦ 6gb *nama,number*
┣✦ 7gb *nama,number*
┣✦ 8gb *nama,number*
┣✦ 9gb *nama,number*
┣✦ unli *nama,number*
┣✦ delsrv *id*
┣✦ delusr *id*
┣✦ deladm *id*
┣✦ cadm 
┣✦ cusr 
┣✦ csrv 
┣✦ panel
┗━═┅═━━━๑

❏━━『 *GRUP MENU* 』━━
┣✦ kick
┣✦ hidetag
┣✦ totag
┣✦ antilink on / off
┗━═┅═━━━๑

❏━━『 *OWNER MENU* 』━━
┣✦ addseler
┣✦ addowner
┣✦ delseler
┣✦ delowner
┣✦ addgc
┣✦ delgc
┣✦ self
┣✦ public
┗━═┅═━━━๑
`

           const videoFile = fs.readFileSync('./all/menu.mp3'); // Ganti path sesuai dengan lokasi video kamu
let msg = generateWAMessageFromContent(from, {

  viewOnceMessage: {

    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 📕\",\"url\":\"https://youtube.com/@Zennhostt\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 📘\",\"url\":\"https://t.me/lixxch\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Website ⚙️\",\"url\":\"https://lynk.id/szz\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Owner 🛡\",\"url\":\"https://wa.me/6285649735418\",\"merchant_url\":\"https://www.google.com\"}"
              }         
           ],
          })
        })
    }
  }
}, {})
await Manz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

     break
             case 'mainmenu':{
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const mainmenu = `*Hi @${sender.split("@")[0]} 👋${ucapanWaktu}*
❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *MAIN MENU* 』━━
┣✦ ai / openai
┣✦ hdr
┣✦ remini
┣✦ tiktok
┣✦ tiktokaudio
┣✦ mediafire
┗━═┅═━━━๑`
const videoFile = fs.readFileSync('./all/menu.mp3');
let msg = generateWAMessageFromContent(from, {

  viewOnceMessage: {

    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 📕\",\"url\":\"https://youtube.com/@Zennhostt\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 📘\",\"url\":\"https://t.me/lixxch\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Website ⚙️\",\"url\":\"https://lynk.id/szz\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Owner 🛡\",\"url\":\"https://wa.me/6285649735418\",\"merchant_url\":\"https://www.google.com\"}"
              }
           ],
          })
        })
    }
  }
}, {})
await Manz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

     break
             case 'panelmenu':{
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const panelmenu = `*Hi @${sender.split("@")[0]} 👋${ucapanWaktu}*
❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *PANEL MENU* 』━━
┣✦ 1gb *nama,number*
┣✦ 2gb *nama,number*
┣✦ 3gb *nama,number*
┣✦ 4gb *nama,number*
┣✦ 5gb *nama,number*
┣✦ 6gb *nama,number*
┣✦ 7gb *nama,number*
┣✦ 8gb *nama,number*
┣✦ 9gb *nama,number*
┣✦ unli *nama,number*
┣✦ delsrv *id*
┣✦ delusr *id*
┣✦ deladm *id*
┣✦ cadm 
┣✦ cusr 
┣✦ csrv 
┣✦ panel
┗━═┅═━━━๑`
const videoFile = fs.readFileSync('./all/menu.mp3');
let msg = generateWAMessageFromContent(from, {

  viewOnceMessage: {

    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 📕\",\"url\":\"https://youtube.com/@Zennhostt\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 📘\",\"url\":\"https://t.me/lixxch\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Website ⚙️\",\"url\":\"https://lynk.id/szz\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Owner 🛡\",\"url\":\"https://wa.me/6285649735418\",\"merchant_url\":\"https://www.google.com\"}"
              }         
           ],
          })
        })
    }
  }
}, {})
await Manz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

     break
             case 'grupmenu': case 'groupmenu':{
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const grupmenu = `*Hi @${sender.split("@")[0]} 👋${ucapanWaktu}*
❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *GRUP MENU* 』━━
┣✦ kick
┣✦ hidetag
┣✦ totag
┗━═┅═━━━๑`
const videoFile = fs.readFileSync('./all/menu.mp3');
let msg = generateWAMessageFromContent(from, {

  viewOnceMessage: {

    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 📕\",\"url\":\"https://youtube.com/@Zennhostt\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 📘\",\"url\":\"https://t.me/lixxch\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Website ⚙️\",\"url\":\"https://lynk.id/szz\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Owner 🛡\",\"url\":\"https://wa.me/6285649735418\",\"merchant_url\":\"https://www.google.com\"}"
              }         
           ],
          })
        })
    }
  }
}, {})
await Manz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

     break
             case 'ownermenu':{
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const ownermenu = `*Hi @${sender.split("@")[0]} 👋${ucapanWaktu}*
❏━━『 *INFO USER* 』━━
┣✦  ɴᴀᴍᴀ: ${pushname} 
┣✦  ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO BOT* 』━━
┣✦ NAMA BOT: ${namabot}
┣✦ NOMOR CREATOR @${owner.split("@")[0]}
┣✦ VERSI SCRIPT ${global.versisc}
┣✦ VERSI BAILEYS: ^${version}
┣✦ RUNTIME: ${runtime(process.uptime())}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *INFO HARI* 』━━
┣✦ TODAY: ${hariini}
┣✦ WAKTU WIB : ${wib}
┣✦ WAKTU WIT: ${wit}
┣✦ WAKTU WITA : ${wita}
┗━═┅═━━━═┅═━━━═┅═━━━๑

❏━━『 *OWNER MENU* 』━━
┣✦ addseler
┣✦ addowner
┣✦ delseler
┣✦ delowner
┣✦ delgc
┣✦ addgc
┣✦ self
┣✦ public
┗━═┅═━━━๑`
const videoFile = fs.readFileSync('./all/menu.mp3');
let msg = generateWAMessageFromContent(from, {

  viewOnceMessage: {

    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 📕\",\"url\":\"https://youtube.com/@Zennhostt\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 📘\",\"url\":\"https://t.me/lixxch\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Website ⚙️\",\"url\":\"https://lynk.id/szz\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Owner 🛡\",\"url\":\"https://wa.me/6285649735418\",\"merchant_url\":\"https://www.google.com\"}"
              }         
           ],
          })
        })
    }
  }
}, {})
await Manz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

     break
             case "listusr": case "lusr": {
  if (!isSeler && !isOwner) return reply(mess.only.premium)
  let s = server.attributes;
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
  let user = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `Name: ${u.username}\n`;
    messageText += `Server: ${s.owned}\n`;
    messageText += `DLL: ${u.email} ${u.password}\n\n`;
    
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Manz.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "listsrv": case "lsrv": {
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
  let messageText = "Berikut adalah daftar server:\n\n";
  
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
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Manz.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "listadmin": case "ladm": {
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
  let user = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Manz.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
//===============CREATE PANEL =================
case "1gb": {
    
    if (!isSeler && !isOwner) return reply(mess.only.premium)
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "LBuy@Lazar.id"
akunlo = "https://telegra.ph/file/aa9bd8498cc6966710a82.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
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
m.reply(`DONE By LazarHost 💥 PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}
 
*TUTOR RUN BOT :*
https://youtu.be/-XKfz5Xzqt4

NOTE :
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
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
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
USER ID: ${user.id}
SERVER ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

DATA PANEL SUDAH DI KIRIM KE NOMOR TERSEBUT DI PRIVATE MESSAGE, SIALAHKAN DI CEK

SALAH MOMOR HUBUNGI OWNER
© Cs LazarHost 💥
`)

}
break
case "2gb": {
    if (!isSeler && !isOwner) return reply(mess.only.premium)
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + "LBuy@Lazar.id"
akunlo = "https://telegra.ph/file/aa9bd8498cc6966710a82.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
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
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*TUTOR RUN BOT :*
https://youtu.be/-XKfz5Xzqt4


NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
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
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
USER ID: ${user.id}
SERVER ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

DATA PANEL SUDAH DI KIRIM KE NOMOR TERSEBUT DI PRIVATE MESSAGE, SIALAHKAN DI CEK

SALAH MOMOR HUBUNGI OWNER
© Cs LazarHost 💥
`)

}

break
case "3gb": {
    if (!isSeler && !isOwner) return reply(mess.only.premium)
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "3072"
let email = username + "LBuy@Lazar.id"
akunlo = "https://telegra.ph/file/aa9bd8498cc6966710a82.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
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
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*TUTOR RUN BOT :*
https://youtu.be/-XKfz5Xzqt4


NOTE :
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
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
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
USER ID: ${user.id}
SERVER ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

DATA PANEL SUDAH DI KIRIM KE NOMOR TERSEBUT DI PRIVATE MESSAGE, SIALAHKAN DI CEK

SALAH MOMOR HUBUNGI OWNER
© Cs LazarHost 💥
`)

}
break
case "4gb" :{
    if (!isSeler && !isOwner) return reply(mess.only.premium)
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4gb"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "4000"
let email = username + "LBuy@Lazar.id"
akunlo = "https://telegra.ph/file/aa9bd8498cc6966710a82.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
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
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*TUTOR RUN BOT :*
https://youtu.be/-XKfz5Xzqt4


NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
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
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
USER ID: ${user.id}
SERVER ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

DATA PANEL SUDAH DI KIRIM KE NOMOR TERSEBUT DI PRIVATE MESSAGE, SIALAHKAN DI CEK

SALAH MOMOR HUBUNGI OWNER
© Cs LazarHost 💥
`)
}
break
case "unli": {
if (!isSeler && !isOwner) return reply(mess.only.premium)
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "LBuy@Lazar.id"
akunlo = "https://telegra.ph/file/aa9bd8498cc6966710a82.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
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
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*TUTOR RUN BOT :*
https://youtu.be/-XKfz5Xzqt4


NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
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
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
USER ID: ${user.id}
SERVER ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

DATA PANEL SUDAH DI KIRIM KE NOMOR TERSEBUT DI PRIVATE MESSAGE, SIALAHKAN DI CEK

SALAH MOMOR HUBUNGI OWNER
© Cs LazarHost 💥
`)

}

break
case "5gb":{
if (!isSeler && !isOwner) return reply(mess.only.premium)
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "5138"
let email = username + "LBuy@Lazar.id"
akunlo = "https://telegra.ph/file/aa9bd8498cc6966710a82.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
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
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*TUTOR RUN BOT :*
https://youtu.be/-XKfz5Xzqt4


NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
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
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
USER ID: ${user.id}
SERVER ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

DATA PANEL SUDAH DI KIRIM KE NOMOR TERSEBUT DI PRIVATE MESSAGE, SIALAHKAN DI CEK

SALAH MOMOR HUBUNGI OWNER
© Cs LazarHost 💥
`)

}

break
case "6gb":{
if (!isSeler && !isOwner) return reply(mess.only.premium)
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "6GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "150"
let disk = "6144"
let email = username + "LBuy@Lazar.id"
akunlo = "https://telegra.ph/file/aa9bd8498cc6966710a82.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
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
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*TUTOR RUN BOT :*
https://youtu.be/-XKfz5Xzqt4


NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
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
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
USER ID: ${user.id}
SERVER ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

DATA PANEL SUDAH DI KIRIM KE NOMOR TERSEBUT DI PRIVATE MESSAGE, SIALAHKAN DI CEK

SALAH MOMOR HUBUNGI OWNER
© Cs LazarHost 💥
`)

}

break
case "7gb":{
if (!isSeler && !isOwner) return reply(mess.only.premium)
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "7GB"
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "170"
let disk = "7168"
let email = username + "LBuy@Lazar.id"
akunlo = "https://telegra.ph/file/aa9bd8498cc6966710a82.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
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
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*TUTOR RUN BOT :*
https://youtu.be/-XKfz5Xzqt4


NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
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
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
USER ID: ${user.id}
SERVER ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

DATA PANEL SUDAH DI KIRIM KE NOMOR TERSEBUT DI PRIVATE MESSAGE, SIALAHKAN DI CEK

SALAH MOMOR HUBUNGI OWNER
© Cs LazarHost 💥
`)

}

break
case "8gb" :{
if (!isSeler && !isOwner) return reply(mess.only.premium)
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "8GB"
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "200"
let disk = "8192"
let email = username + "LBuy@Lazar.id"
akunlo = "https://telegra.ph/file/aa9bd8498cc6966710a82.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
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
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*TUTOR RUN BOT :*
https://youtu.be/-XKfz5Xzqt4


NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
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
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
USER ID: ${user.id}
SERVER ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

DATA PANEL SUDAH DI KIRIM KE NOMOR TERSEBUT DI PRIVATE MESSAGE, SIALAHKAN DI CEK

SALAH MOMOR HUBUNGI OWNER
© Cs LazarHost 💥
`)

}

break
case "9gb": {
if (!isSeler && !isOwner) return reply(mess.only.premium)
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "9GB"
let egg = global.eggsnya
let loc = global.location
let memo = "9216"
let cpu = "220"
let disk = "9216"
let email = username + "LBuy@Lazar.id"
akunlo = "https://telegra.ph/file/aa9bd8498cc6966710a82.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
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
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

*TUTOR RUN BOT :*
https://youtu.be/-XKfz5Xzqt4


NOTE:
1.OWNER HANYA MENGIRIM DATA AKUN 1X 
2.JANGAN MENGSHARE AKUN PANEL ANDA 
3.NO SHARE WEBSITE PANEL 
4. NO MAKSA REFF 
5.JANGAN LUPA BILANG DONE         TERIMAKASIH
=====================================
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
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
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
USER ID: ${user.id}
SERVER ID: ${server.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

DATA PANEL SUDAH DI KIRIM KE NOMOR TERSEBUT DI PRIVATE MESSAGE, SIALAHKAN DI CEK

SALAH MOMOR HUBUNGI OWNER
© Cs LazarHost 💥
`)

}

break
case "addadm": case "addadmin": case "cadm": case "cadmin": {
    if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")
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
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await Manz.sendMessage(m.chat, listMessage)

    await Manz.sendMessage(nomornya, {

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
case "delsrv": case "dsrv": {
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")
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

case "delusr": case "dusr": {
if (!jangann) return reply("𝙂𝙧𝙤𝙪𝙥 𝘽𝙚𝙡𝙪𝙢 𝘼𝙙𝙖 𝙄𝙯𝙞𝙣 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙗𝙪𝙖𝙩 𝙋𝙖𝙣𝙚𝙡\n𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙡𝙞 𝘼𝙠𝙨𝙚𝙨 𝙐𝙣𝙩𝙪𝙠 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙞 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝘽𝙚𝙡𝙞 𝙆𝙚 𝙊𝙒𝙉𝙀𝙍")
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
        case "panel": {
const owned = `6285655654790@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*
 
BY MrLazar

CARA ADD USER PANEL :
ram user,nomer

contoh Server 1 : 1gb Zar,628xxxxx

Powered By *LazarHost 💥*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
//================= OWNER MENU =================
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285655654790`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Manz.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285655654790`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "addseler":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285655654790`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Manz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
seler.push(prrkek)
fs.writeFileSync("./all/database/seler.json", JSON.stringify(seler))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delseler":{
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
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
var ini = pler.indexOf(m.chat)
plerr.splice(ini, 1)
fs.writeFileSync('./all/database/cpgrup.json', JSON.stringify(plerr))
reply(`${command} Success Not Active Mr-LazarID💥`)
break
case 'addgc':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
plerr.push(m.chat)
fs.writeFileSync('./all/database/cpgrup.json', JSON.stringify(plerr))
reply(`${command} Success Active To Crate Panel Mr-LazarID💥`)
break
//=============== DOWNLOAD MENU =================
case 'tiktok':{ 
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
 const Tiktok = require('./all/tiktok.js')
require('./all/tiktok').Tiktok(q).then( data => {
Manz.sendMessage(m.chat, { caption: `Sukses, Ini Tuan Video Nya`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case "tiktokaudio":{
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
            reply(mess.wait) 
require('./all/tiktok.js').Tiktok(q).then( data => {
Manz.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp3' }, { quoted: m })
})
}
break
case 'mediafire': {
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
Manz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'hdr': case 'remini':{
	   	if (!quoted) return reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			const { remini } = require('./all/remini.js')
			let proses = await remini(media, "enhance");
			Manz.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break
		
 case "ai": case "openai": {
if (!text) reply( 'Masukkan text!')
var api = await fetchJson(`https://api.betabotz.eu.org/api/search/c-ai?prompt=${text}&char=Nahida&apikey=adHlAudF`)
Manz.sendMessage(m.chat, { text: api.message }, {quoted: fkontak })
}
break
//================== OWNER MENU =================
  case 'totag': {
    if (!isOwner) return reply(`lu bukan owner jangan sok asik`);
    if (!isBotAdmins) return reply(mess.only.badmin);
    
    if (!m.quoted) return reply(`Reply pesan dengan caption ${prefix + command}`);
    
    const mentionedUsers = participants.map(a => a.id);
    Manz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: mentionedUsers });
}
break
case "hidetag": {
if (!isOwner) return reply(`Khusus Owner Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
Manz.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case "kick": {
if (!isOwner) return reply(mess.only.premium)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Manz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break    
case 'public': {
    if (!isOwner) return reply(`lu bukan owner gausah sok asik`);
    Manz.public = true;
    reply(`*Mode Public diaktifkan oleh Tuan! ✅*`);
}
break;

case 'self': {
    if (!isOwner) return reply(`Lu bukan owner ga usah sok asik`);
    Manz.public = false;
    reply(`*Mode Self diaktifkan oleh Tuan! ✅*`);
}
break;
case "tes": case "bot": {
  const owned = `6285655654790@s.whatsapp.net`;
  const responseText = `Bot aktif kak @${sender.split("@")[0]} 🫡`;
  
  Manz.sendMessage(from, {
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
Manz.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})