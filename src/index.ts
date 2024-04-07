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

import _biome_definitions from '../resources/biome_definitions.nbt' with { type: "file" };
import _entity_identifiers from '../resources/entity_identifiers.nbt' with { type: "file" };
import _canonical_block_states from '../jsp/runtime_block_states.dat' with { type: "file" };
import _r12_to_current_block_map from '../resources/r12_to_current_block_map.bin' with { type: "file" };

export const biome_definitions = fs.readFileSync(path.resolve(__dirname, _biome_definitions));
export const entity_identifiers = fs.readFileSync(path.resolve(__dirname, _entity_identifiers));
export const canonical_block_states = fs.readFileSync(path.resolve(__dirname, _canonical_block_states));
export const r12_to_current_block_map = fs.readFileSync(path.resolve(__dirname, _r12_to_current_block_map));

export {
    banner_patterns,
    block_id_map,
    creativeitems,
    entity_id_map,
    item_id_map,
    // recipes,
};
