import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import banner_patterns from '../resources/banner_patterns.json';
import block_id_map from '../jsp/block_id_map.json';
import creativeitems from '../resources/creativeitems.json';
import entity_id_map from '../resources/entity_id_map.json';
import item_id_map from '../jsp/item_id_map.json';
//import recipes from '../resources/recipes.json';

const readFile = (resource: string): any | null => {
    try {
        return fs.readFileSync(path.resolve(__dirname, resource));
    } catch {}
    return null;
};

export const biome_definitions = readFile('../resources/biome_definitions.nbt');
export const entity_identifiers = readFile('../resources/entity_identifiers.nbt');
export const canonical_block_states = readFile('../jsp/runtime_block_states.dat');
export const r12_to_current_block_map = readFile('../resources/r12_to_current_block_map.bin');

export {
    banner_patterns,
    block_id_map,
    creativeitems,
    entity_id_map,
    item_id_map
    // recipes,
};
