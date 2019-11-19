import {client} from "./App";

type Marquee = 'Ping' | 'UsersOnline';

let currentMarquee: Marquee = 'Ping';

export function setupTimers() {
    //Fire the methods once before starting the timers
    updateRichPresence();
    currentMarquee = 'Ping';

    setInterval(updateRichPresence, 15 * 1000);
}

function updateRichPresence() {
    switch (currentMarquee) {
        case "Ping":
            client.user.setPresence({
                game: {name: `with dangerous curses | Ping: ${Math.round(client.ping)}`},
                status: 'online'
            })
                .catch(console.error);
            currentMarquee = "UsersOnline";
            break;

        case "UsersOnline":
            let size = 0;

            client.guilds.forEach(function (guild, key, map) {
                size += guild.memberCount;
            });

            client.user.setPresence({game: {name: `with dangerous curses | ${size} Users`}, status: 'online'})
                .catch(console.error);

            currentMarquee = "Ping";
    }
}