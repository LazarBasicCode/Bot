// SC ORI : ManzBot
// PEMILIK ORI : RavaHosting
//=================================/
// ILANGAN BAGIAN ATAS NERAKA PALING BAWAH TEMPAT MU


require("./module")

global.owner = "6285655654790" //pake no lu biar bisa add akses
global.namabot = "LazarID" //nama bot ganti
global.namaCreator = "SLazar" //nama creator ganti aja
global.themeemoji = '🪀'
global.autoJoin = false
global.antilink = false 
global.versisc = '1.0.0'
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
//===========================================
global.domain = 'https://farnesiaxshoyo.xmartpanel.my.id' //DOMAIN
global.apikey = 'ptla_pVNw3QV8M8ZDi2eC1wX9PQCjJbRVs5lFMb6HQFob7WP' // PLTA
global.capikey = 'ptlc_TTW8rHoBSeuhuyy0JD9aIeZjojvTMjsuje6k1u6xw1U' //PLTC
global.eggsnya = '15' //ID EGGS
global.location = '1' // ID LOCATION
//=====================================
global.imageurl = 'https://telegra.ph/file/3e98338284ac70bd9c34d.jpg'
global.isLink = ''
global.audionya = fs.readFileSync("./all/sound.mp3")
global.simbol = 'ダ'
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = "© Created By"
global.author = "MrSlazer"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})