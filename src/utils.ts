/**
 * Check if the message given is a command or not.
 * @param cmd The command that should be checked against
 * @param msg The message to check
 */
import {config} from "./config";
import {GuildMember, Message} from "discord.js";

/**
 * Gets the command and its arguments.
 * @param msg
 */
export function splitCommand(msg: Message): string[] {
    let content = msg.content;
    if (!content.startsWith(config.prefix) || msg.author.bot) return [];

    let cmd = content.slice(config.prefix.length);

    return cmd.split(/ +/);
}

/**
 * Check if this member has moderator privileges or not.
 */
export function isMod(member: GuildMember): boolean {
    return member.hasPermissions(['KICK_MEMBERS', 'BAN_MEMBERS']);
}