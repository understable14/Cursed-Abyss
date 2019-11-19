import * as Discord from "discord.js";
import {registerCommandListeners} from "./command-listener";
import {setupTimers} from "./timers";
import {config} from "./config";

export const client: Discord.Client = new Discord.Client();

client.on('ready', () => {
    console.log(`Cursed Abyss is ready... to end lives! Just kidding... ;)`);
    registerCommandListeners();

    setTimeout(function () {
        setupTimers();
    }, 1000);
});

client.login(config.token)
    .then(() => {
        console.log("Login successful!");
    });