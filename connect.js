require("./all/global")

const func = require("./all/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
async function startSesi() {

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'ՏᎬᏞᎪᎷᎪͲ ᎷᎪᏞᎪᎷ 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'ՏᎬᏞᎪᎷᎪͲ ᏢᎬͲᎪΝᏀ 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'ՏᎬᏞᎪᎷᎪͲ ՏϴᎡᎬ 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'ՏᎬᏞᎪᎷᎪͲ ՏᏆᎪΝᏀ 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'ՏᎬᏞᎪᎷᎪͲ ᏢᎪᏀᏆ 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'ՏᎬᏞᎪᎷᎪͲ ՏႮᏴႮᎻ 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'ՏᎬᏞᎪᎷᎪͲ ͲᎬΝᏀᎪᎻ ᎷᎪᏞᎪᎷ 🌃'
        }

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const LazarectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: ['Chrome (Linux)', '', '']
}
const Lazar = func.makeWASocket(LazarectionOptions)
if(usePairingCode && !Lazar.authState.creds.registered) {
		const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62:\n');
		const code = await Lazar.requestPairingCode(phoneNumber.trim())
		console.log(`Ni kode nya: ${code}`)

	}
store.bind(Lazar.ev)
//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭


Lazar.ev.on("groups.update", async (json) => {
			console.log(json)
			const res = json[0];
			    try {
                    ppgroup = await Lazar.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }
			if (res.announce == true) {
				await sleep(2000)
				let a = `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admin can send messages !`
				Lazar.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaCreator}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "http://lynk.id/szz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.announce == false) {
				await sleep(2000)
				let a = `「 Group Settings Change 」\n\nGroup has been opened by admin, Now participants can send messages !`
				Lazar.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaCreator}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "http://lynk.id/szz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.restrict == true) {
				await sleep(2000)
				let a = `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`
				Lazar.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaCreator}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "http://lynk.id/szz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.restrict == false) {
				await sleep(2000)
				let anu = `「Group Settings Change 」\n\nGroup info has been opened, Now participant can edit group info !`
				Lazar.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaCreator}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "http://lynk.id/szz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if(!res.desc == ''){
				await sleep(2000)
				let a = `「Group Settings Change 」\n\n*Group desk has been changed to*\n\n${res.desc}`
				Lazar.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaCreator}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "http://lynk.id/szz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
            } else {
				await sleep(2000)
				let a = `「Group Settings Change 」\n\n*Group Subject has been changed to*\n\n*${res.subject}*`
				Lazar.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namabot}`,
                            body: `${namaCreator}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: "http://lynk.id/szz",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                });
			}
        });


Lazar.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await Lazar.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await Lazar.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://tinyurl.com/yx93l6da'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await Lazar.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }
               if (anu.action == 'add') {
                 let a = `*Hello @${num.split("@")[0]}, Welcome To ${metadata.subject}*\n, I hope you feel comfortable in this group and don't forget to read the group description`
                    Lazar.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         externalAdReply: {
         title: `${namabot}`,
         body: `${namaCreator}`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://chat.whatsapp.com/DEn9fBxRkFv4geSUxzQQcP",
         mediaType: 1,
         renderLargerThumbnail: true
    }}})
                } else if (anu.action == 'remove') {
                    let a = `good luck, hope you don't come back`
      Lazar.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         externalAdReply: {
         title: `${namabot}`,
         body: `${namaCreator}`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://chat.whatsapp.com/DEn9fBxRkFv4geSUxzQQcP",
         mediaType: 1,
         renderLargerThumbnail: true
    }}})
                } else if (anu.action == 'promote') {
                    let a = `Congratulations @${num.split("@")[0]}, on being promoted to admin of this group ${metadata.subject} 🎉`
                    Lazar.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         externalAdReply: {
         title: `${namabot}`,
         body: `${namaCreator}`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://chat.whatsapp.com/DEn9fBxRkFv4geSUxzQQcP",
         mediaType: 1,
         renderLargerThumbnail: true
    }}})
                } else if (anu.action == 'demote') {
                    let a = `nice try for the demotion to become an ordinary member`
                    Lazar.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         externalAdReply: {
         title: `${namabot}`,
         body: `${namaCreator}`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://chat.whatsapp.com/DEn9fBxRkFv4geSUxzQQcP",
         mediaType: 1,
         renderLargerThumbnail: true
    }}})
              }
            }
        } catch (err) {
            console.log("Eror Di Bagian Welcome Group "+err)
        }
    })

//▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
Lazar.ev.on('Lazarection.update', async (update) => {
const { Lazarection, lastDisLazarect } = update
if (Lazarection === 'close') {
const reason = new Boom(lastDisLazarect?.error)?.output.statusCode
console.log(color(lastDisLazarect.error, 'deeppink'))
if (lastDisLazarect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisLazarectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisLazarectReason.LazarectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Lazarection closed, reLazarecting...', 'deeppink'))
process.exit()
} else if (reason === DisLazarectReason.LazarectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Lazarection lost, trying to reLazarect', 'deeppink'))
process.exit()
} else if (reason === DisLazarectReason.LazarectionReplaced) {
console.log(color('Lazarection Replaced, Another New Session Opened, Please Close Current Session First'))
Lazar.logout()
} else if (reason === DisLazarectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Lazar.logout()
} else if (reason === DisLazarectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisLazarectReason.timedOut) {
console.log(color('Lazarection TimedOut, ReLazarecting...'))
startSesi()
}
} else if (Lazarection === 'Lazarecting') {
//console.log(`${color(`[`,`white`)+color(`1`,`red`)+color(`]`,`white`)}`,`WA v${version.join('.')}`)
//await sleep(400) 
console.log(`${color(`[`,`white`)+color(`2`,`red`)+color(`]`,`white`)}`,`${hariini}`)
//await sleep(400) 
console.log(`${color(`[`,`white`)+color(`3`,`red`)+color(`]`,`white`)}`,`Base Sc:Lazar`)
//await sleep(400)  
console.log(`${color(`[`,`white`)+color(`4`,`red`)+color(`]`,`white`)}`,"DO NOT DOWNLOAD THIS SC REMAKE!!!") 
//await sleep(400)  
console.log(color(`─[`,`magenta`),`「`,  color(`LazarID`,`red`), `」`,  color(`]─`,`magenta`))
//await sleep(400)  
start(`1`,`Lazarecting...`)
} else if (Lazarection === "open") {
  Lazar.sendMessage('6285655654790' + "@s.whatsapp.net", { text: `*Assalamualaikum*
[1] Halooo ${ucapanWaktu} Bot Telah Aktif Tuan ><`});
  success(`1`,`[■■■■■■■■■■■■■■■] Lazarected`) 
if (autoJoin) {
Lazar.groupAcceptInvite(codeInvite)
}
}
})

//=================================================//

//=================================================//

Lazar.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return Lazar.readMessages([m.key])
if (!Lazar.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(Lazar, m, store)
require("./appearance")(Lazar, m, store)
} catch (err) {
console.log(err)
}
})





Lazar.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = Lazar.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Lazar.public = true

Lazar.ev.on('creds.update', saveCreds)
return Lazar
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})