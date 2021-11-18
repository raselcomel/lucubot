let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭━━•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•━━╮ 
┃╭┈─────────────⩵꙰ཱི࿐ 
┃╰──DONATE──➤ ↶↷* 
╰•͙✩̣̣
⁙┃ *⸙ ુོ➪ *VIA EMONEY*
⁙┃ ુོ DANA  : 6282146176911
⁙┃ ુོ OVO   : 6282146176911
⁙┃ ુོ GOPAY : tanya ke owner
⁙┃ ુོ PULSA : 6289621278920
⁙┃ ુོ saweria.co/mrzee78
⁙┃ ુོ trakteer.id/mr zee/tip
⁙┃ ુོ
⁙┃ *⸙ ુོ➪ *INSTAGRAM OWNER*
⁙┃ ુོ instagram.com/yrdan_21
⁙┃ 
⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
`.trim(), watermark, 'Konfirmasi', '.konfirm saya ingin donasi bang', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
