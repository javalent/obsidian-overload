import type DiceRoller from "obsidian-dice-roller";
import type { StatblockAPI } from "fantasy-statblocks";
import { DataviewAPI, FullIndex } from "obsidian-dataview";
import { LeafletAPI } from "obsidian-leaflet";

export interface Plugins {
    "obsidian-dice-roller": DiceRoller;
    "obsidian-5e-statblocks": StatblockAPI;
    "obsidian-leaflet-plugin": LeafletAPI;
    dataview: { api: DataviewAPI; index: FullIndex };
}

export * from "obsidian-dice-roller";
export * from "fantasy-statblocks";
export * from "obsidian-leaflet";
