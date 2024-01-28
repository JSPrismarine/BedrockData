'use strict';
const fs = require('fs');

const banner_patterns = require('./resources/banner_patterns.json');
const block_id_map = require('./jsp/block_id_map.json');
const creativeitems = require('./resources/creativeitems.json');
const entity_id_map = require('./resources/entity_id_map.json');
const item_id_map = require('./jsp/item_id_map.json');
// const recipes = require('./resources/recipes.json');

const biome_definitions = fs.readFileSync(__dirname + '/resources/biome_definitions.nbt');
const entity_identifiers = fs.readFileSync(__dirname + '/resources/entity_identifiers.nbt');
const canonical_block_states = fs.readFileSync(__dirname + '/jsp/runtime_block_states.dat');
const r12_to_current_block_map = fs.readFileSync(__dirname + '/resources/r12_to_current_block_map.bin');

module.exports = {
    banner_patterns,
    biome_definitions,
    block_id_map,
    creativeitems,
    entity_id_map,
    entity_identifiers,
    item_id_map,
    r12_to_current_block_map,
    // recipes,
    canonical_block_states
};
