/**


   * Create By verdi.


   * Contact Me on wa.me/6285706735450


   * Follow https://github.com/VERDIBOTZ1


*/





const fs = require('fs')


const chalk = require('chalk')





// Website Api


global.APIs = {


	zenz: 'https://zenzapi.xyz',


}





// Apikey Website Api


global.APIKeys = {

'https://zenzapi.xyz': 'sanzychan01'

}





// Other


global.owner = [ '6285706735450' ]


global.premium = ['6283869803330']


global.packname = 'verdi botz'


global.author = ' Bot'


global.sessionName = 'BOTZ'


global.prefa = ['','!','.','🐦','🐤','🗿']


global.sp = '⭔'


global.mess = {


    success: '✓ Success',


    admin: 'Fitur Khusus Admin Group anjg!',


    botAdmin: 'Bot bukan admin anjg lihat mata mu!',


    owner: 'Fitur Khusus Owner Bot yang tamvan',


    group: 'Fitur Digunakan Hanya Untuk Group ya anjeg!',


    private: 'Fitur Digunakan Hanya Untuk Private Chat! anjeg',


    bot: 'Fitur Khusus Pengguna Nomor Bot anjg',


    wait: 'Loading...deck jan lupa donasi',


    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',


}


global.limitawal = {


    premium: "Infinity",


    free: 100


}


global.thumb = fs.readFileSync('./lib/hisoka.jpg')





let file = require.resolve(__filename)


fs.watchFile(file, () => {


	fs.unwatchFile(file)


	console.log(chalk.redBright(`Update'${__filename}'`))


	delete require.cache[file]


	require(file)


})
