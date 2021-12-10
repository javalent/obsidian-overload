import type DiceRollerPlugin from "../obsidian-dice-roller/src/main";
import type StatBlockPlugin from "../obsidian-statblock/src/main";
import type ObsidianLeaflet from "../obsidian-leaflet-plugin/src/main";
import type * as Dataview from "obsidian-dataview";
import InitiativeTracker from "../obsidian-initiative-tracker/src/main";
import ImageWindow from "../obsidian-image-window/src/main";
import AdmonitionPlugin from "../obsidian-admonition/src/main";
import FantasyCalendar from "../obsidian-fantasy-calendar/src/main";

import { TFile, EventRef } from "obsidian";

export interface Plugins {
    "obsidian-5e-statblocks": StatBlockPlugin;
    "obsidian-admonition": AdmonitionPlugin;
    dataview: {
        index: {
            tags: {
                invMap: Map<string, Set<string>>;
                map: Map<string, Set<string>>;
            };
            etags: {
                invMap: Map<string, Set<string>>;
                map: Map<string, Set<string>>;
            };
            pages: Map<
                string,
                {
                    fields: Map<string, number>;
                }
            >;
            events: {
                on(
                    name: "dataview:metadata-change",
                    callback: (...args: [op: "update", file: TFile]) => any,
                    ctx?: any
                ): EventRef;
            };
        };
        api: {
            page(path: string): Record<string, number>;
        };
    };
    "obsidian-dice-roller": DiceRollerPlugin;
    "fantasy-calendar": FantasyCalendar;
    "image-window": ImageWindow;
    "initiative-tracker": InitiativeTracker;
    "obsidian-leaflet-plugin": ObsidianLeaflet;
}
