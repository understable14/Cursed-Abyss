import {client} from "./App";
import {Message} from "discord.js";
import {isMod, splitCommand} from "./utils";

export function registerListeners() {
    client.on('message', checkMessage);

    console.log("Registered listeners.");
}

function checkMessage(msg: Message) {
    let strings = splitCommand(msg);
    if (strings.length <= 0) return; //Not a valid command

    let command = strings[0].toLowerCase();
    let args = strings.slice(1);

    parseCommand(msg, command, args);
}

function parseCommand(msg: Message, command: string, args: string[]) {
    let sender = msg.member;

    switch (command) {
        case 'ping': {
            if (!isMod(sender)) return;

            msg.reply(`Pong! My current ping is **${client.ping}**ms!`)
                .then(() => {
                    console.log(`Ponged ${msg.author.username}#${msg.author.discriminator} ${client.ping}ms!`)
                });

            break;
        }

        case 'help': {
            if (!isMod(sender)) return;

            msg.reply(`Sorry, but I'm a lifeless synthetic at the moment :(\n Try again in the future!`)
                .then(() => {
                    console.log(`Helped ${msg.author.username}#${msg.author.discriminator}!`)
                });

            break;
        }

        // case 'echo': {
        //     if (!isMod(sender)) return;
        //
        //     let sentence = args.join(" ");
        //
        //     msg.channel.send(`${sentence}`)
        //         .then(r => {
        //             console.log(`Echo ${msg.author.username}#${msg.author.discriminator}: ${sentence}!`)
        //         });
        //
        //     msg.delete().then(r => console.log(`Deleted message ${r.id}, ${r.content}`));
        //     break;
        // }

        case 'hello': {
            if (!isMod(sender)) return;

            sender.send(`Hello! :)`)
                .then(r => {
                    console.log(`Hello ${msg.author.username}#${msg.author.discriminator}!`)
                });

            break;
        }

        default: {
            console.log(`Command attempted that doesn't exist by ${msg.author.username}#${msg.author.discriminator}: ${command}`)
        }
    }
}