import { Command } from "./types/Command";
import { Hello } from "./commands/Hello";
import { Status } from "./commands/Status";
import { Connect } from "./commands/Connect";
import { Canvas } from "./commands/WelcomeCanvas";

export const Commands: Command[] = [Hello, Status, Connect, Canvas];