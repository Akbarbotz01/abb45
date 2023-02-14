import fetch from 'node-fetch'

let handler = async (m, { conn, command, args }) => {
   if (!args[0]) return conn.reply(m.chat, 'Masukkan Linknya Kak', m)

  await m.reply('_𝚃𝚞𝚗𝚐𝚐𝚞 𝚂𝚎𝚋𝚎𝚗𝚝𝚊𝚛⏲️_')
  
   let img = await (await fetch(`https://shot.screenshotapi.net/screenshot?url=${args[0]}&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load`)).buffer()

  
   conn.sendMessage(m.chat, { image: img, caption: 'Here' }, { quoted: m })
}
handler.help = ['ssweb2']
handler.tags = ['internet']
handler.command = /^ss2(web2)?f?$/i

handler.limit = false
handler.fail = null

export default handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
