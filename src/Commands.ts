import { Command } from "./types/Command";
import { Hello } from "./commands/Hello";
import { Status } from "./commands/Status";

export const Commands: Command[] = [Hello, Status];