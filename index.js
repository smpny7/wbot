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
    if (/ありがとう/.test(msg.content))
        msg.channel.send('おっ、ありがてぇ！おっ、ありがてぇ！おっ、ありがてぇ！おっ、ありがてぇおっ、ありがおっ、あrおっ、あおっ、あえいおっ、あえいがおっ、あえいおっ、あおっ、おltお');
    if (/検索/.test(msg.content))
        msg.channel.send('ばいんぐ');
    if (/^終$/.test(msg.content))
        msg.channel.send('制作・著作\n━━━━━\n　ⓃⒽⓀ');
    if (/^sudo /.test(msg.content) || /^sudo$/.test(msg.content) || /^su /.test(msg.content) || /^su$/.test(msg.content))
        msg.channel.send('あなたはシステム管理者から通常の講習を受けたはずです。\n   これは通常、以下の3点に要約されます:\n\n       #1) 他人のプライバシーを尊重すること。\n       #2) タイプする前に考えること。\n       #3) 大いなる力には大いなる責任が伴うこと。');
    if (/素うどん/.test(msg.content))
        msg.channel.send('■■■■■■■■■■■■■■■■■■■■■■■■■■■\n    ■■■■■■■■■3■■■■■■■■:\n\n        #1) ■■■■■■■■■■■■■■■■■\n        #2) ■■■■■■■■■■■■■\n        #3) ■■■■■■■■■■■■■■■■■■■');
    if (/1TB/.test(msg.content))
        msg.channel.send('行ってらっしゃい');
});

client.login(process.env.DISCORD_TOKEN);
