'use strict';

const { Client } = require('discord.js');
const client = new Client();

require('dotenv').config();

client.on('message', msg => {
    if (msg.author.bot)
        return;
    if (/w\(\)/.test(msg.content) || /w \(\)/.test(msg.content))
        msg.channel.send('草 超えて森超えてモーリーファンタジーも超えてグリーンファンタジーも超えてグリーンランドですら超越して美しき緑の星をも凌駕した');
    if (/草なん/.test(msg.content))
        msg.channel.send({
            files: [
                "./mollyfantasy.jpg"
            ]
        });
    else if (/草/.test(msg.content) && !/千草/.test(msg.content))
        msg.channel.send('草');
    if (/おっ/.test(msg.content))
        msg.channel.send('おっ、ありがてぇ！おっ、ありがてぇ！おっ、ありがてぇ！おっ、ありがてぇおっ、ありがおっ、あrおっ、あおっ、あえいおっ、あえいがおっ、あえいおっ、あおっ、おltお');
    if (/終/.test(msg.content) && (!/終わ/.test(msg.content) || !/終了/.test(msg.content)))
        msg.channel.send('制作・著作\n━━━━━\n　ⓃⒽⓀ');
});

client.login(process.env.DISCORD_TOKEN);
