'use strict';
const fs = require('fs');

const banner_patterns = require('./resources/banner_patterns.json');
const block_id_map = require('./resources/block_id_map.json');
const creativeitems = require('./resources/creativeitems.json');
const entity_id_map = require('./resources/entity_id_map.json');
const item_id_map = require('./resources/item_id_map.json');
const r12_block_states = require('./resources/r12_block_states.json');
const recipes = require('./resources/recipes.json');

const biome_definitions = fs.readFileSync('./resources/biome_definitions.nbt');
const entity_identifiers = fs.readFileSync('./resources/entity_identifiers.nbt');
const required_block_states = fs.readFileSync('./resources/required_block_states.nbt');

module.exports = {
    banner_patterns,
    biome_definitions,
    block_id_map,
    creativeitems,
    entity_id_map,
    entity_identifiers,
    item_id_map,
    r12_block_states,
    recipes,
    required_block_states
};
