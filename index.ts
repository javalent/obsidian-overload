import type DiceRoller from "obsidian-dice-roller";
import { DataviewAPI, FullIndex } from "obsidian-dataview";
import { LeafletAPI } from "obsidian-leaflet";

export interface Plugins {
    "obsidian-dice-roller": DiceRoller;
    "obsidian-leaflet-plugin": LeafletAPI;
    dataview: { api: DataviewAPI; index: FullIndex };
}

export * from "obsidian-dice-roller";
export * from "obsidian-leaflet";
export * from "initiative-tracker";
