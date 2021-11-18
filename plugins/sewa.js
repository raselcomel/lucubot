let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `╭━━•✵ ⃟  ⃟  ⃟✵•
┃
┃ *SEWA BOT : ↷↷*
┃ 
┃ *⸙ ુོ➪ Apa saja keuntungan premium?
┃ *〲 ✅Dapatkan fitur khusus premium.
┃ *〲 ✅Masukkan bot ke group anda.
┃ *〲 ✅Limit UNLIMITED (Tidak Terbatas)
┃ *─★‧ﾟ
╰━━━━━━━━⸙
Pembayaran:
Dana: 085346545126
OVO: 085346545126
GOPAY: 085346545126
PULSA: 085346545126 (+5.000)
    
「Syarat dan Ketentuan」
1. Bot akan keluar jika sudah waktu nya keluar
2. Jangan di kick
3. Mematuhi syarat dan ketentuan bot pada #rules
4. Di larang mengirimkan sesuatu yang mengganggu, contoh: virtex, berbagai macam bug.
5. Di larang spam dalam penggunaan
    `.trim()
    const button = {
        buttonText: 'List Harga',
        description: kontol,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Premium', description: "Rp50.000\nDapatkan fitur Premium Permanent.", rowId:".konfir Saya ingin sewa + jadi premium"},
        {title: '4 Bulan', description: "Rp40.000\nSewa bot selama 4 bulan.", rowId:".konfir Saya ingin sewa bot 4 bulan"},
        {title: '3 Bulan', description: "Rp30.000\nSewa bot selama 3 bulan.", rowId:".konfir Saya ingin sewa bot 3 bulan"},
        {title: '2 Bulan', description: "Rp20.000\nSewa bot selama 2 bulan.", rowId:".konfir Saya ingin sewa bot 2 bulan"},
        {title: '1 Bulan', description: "Rp10.000\nSewa bot selama 1 bulan.", rowId:".konfir Saya ingin sewa bot 1 bulan"},
        {title: '2 Minggu', description: "Rp7.000\nSewa bot selama 2 minggu.", rowId:".konfir Saya ingin sewa bot 2 minggu"},
        {title: '1 Minggu', description: "Rp5.000\nSewa bot selama 1 minggu.", rowId:".konfir Saya ingin sewa bot 1 minggu"},
        {title: '12 Jam', description: "Rp.0\nMemasukkan bot selama 12 Jam(-10 limit)", rowId:".joinf"},
        {title: 'Sewa RDP', description: "Rp20.000 run bot 24jam selama 1 bulan ", rowId:".konfir Saya ingin sewa RDP-nya"},
        {title: 'Owner? ', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Join?', description: "Cara Memasukkan Bot Ke Grup.", rowId:".join"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main', 'update']
handler.command = /^(sewa(bot)?)$/i
handler.help = ['sewa']
module.exports = handler
