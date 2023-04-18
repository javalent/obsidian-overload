import type DiceRoller from "obsidian-dice-roller";
import { DataviewAPI, FullIndex } from "obsidian-dataview";

export interface Plugins {
    "obsidian-dice-roller": DiceRoller;
    dataview: { api: DataviewAPI; index: FullIndex };
}
