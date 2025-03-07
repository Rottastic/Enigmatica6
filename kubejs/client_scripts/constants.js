//priority: 1000

const refinedStorageItems = [
    'grid',
    'crafting_grid',
    'pattern_grid',
    'fluid_grid',
    'controller',
    'creative_controller',
    'network_receiver',
    'network_transmitter',
    'relay',
    'detector',
    'security_manager',
    'wireless_transmitter',
    'crafter',
    'crafting_monitor',
    'disk_manipulator',
    'crafter_manager'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer cobblegens.
const generatableCobblestone = [
    'byg:dacite_cobblestone',
    'byg:ether_stone',
    'byg:purpur_stone',
    'byg:red_rock',
    'byg:scoria_cobblestone',
    'byg:soapstone',
    'create:andesite_cobblestone',
    'create:diorite_cobblestone',
    'create:granite_cobblestone',
    'quark:cobbedstone',
    'undergarden:depthrock',
    'undergarden:shiverstone',
    'undergarden:tremblecrust',
    'create:dark_scoria_cobblestone',
    'create:scoria_cobblestone',
    'create:gabbro_cobblestone',
    'create:dolomite_cobblestone',
    'create:weathered_limestone_cobblestone',
    'create:limestone_cobblestone',
    'atmospheric:saffron_travertine',
    'atmospheric:persimmon_travertine',
    'atmospheric:peach_travertine',
    'atmospheric:ivory_travertine'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer stonegens.
const generatableStone = [
    'minecraft:andesite',
    'minecraft:diorite',
    'minecraft:granite',
    'betterendforge:flavolite',
    'betterendforge:sulphuric_rock',
    'betterendforge:violecite',
    'byg:black_sandstone',
    'byg:blue_sandstone',
    'byg:dacite',
    'byg:purple_sandstone',
    'byg:pink_sandstone',
    'byg:scoria_stone',
    'byg:white_sandstone',
    'minecraft:red_sandstone',
    'minecraft:sandstone',
    'quark:basalt',
    'quark:brimstone',
    'quark:jasper',
    'quark:limestone',
    'quark:marble',
    'quark:permafrost',
    'quark:slate',
    'astralsorcery:marble_raw',
    'create:dark_scoria',
    'create:scoria',
    'create:gabbro',
    'create:dolomite',
    'create:weathered_limestone',
    'create:limestone',
    'atmospheric:red_arid_sandstone',
    'atmospheric:arid_sandstone'
];
const generatableBasalt = [];

const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

var itemsToHide = [
    'aiotbotania:livingwood_shears',
    'aiotbotania:livingrock_shears',

    'ars_nouveau:arcane_brick',
    'ars_nouveau:arcane_ore',
    'ars_nouveau:mana_gem_block',

    'bloodmagic:coalsand',
    'bloodmagic:saltpeter',
    'bloodmagic:sulfur',

    'create:powdered_obsidian',
    'create:honey_bucket',
    'create:copper_ore',
    'create:zinc_ore',

    'eidolon:tallow',

    'emendatusenigmatica:dimensional_crushed',
    'emendatusenigmatica:arcane_crushed',
    'emendatusenigmatica:potassium_nitrate_crushed',
    'emendatusenigmatica:sulfur_crushed',
    'emendatusenigmatica:apatite_crushed',
    'emendatusenigmatica:cinnabar_crushed',
    'emendatusenigmatica:bitumen_crushed',
    'emendatusenigmatica:fluorite_crushed',
    'emendatusenigmatica:certus_quartz_crushed',
    'emendatusenigmatica:ancient_debris_crushed',
    'emendatusenigmatica:quartz_crushed',
    'emendatusenigmatica:redstone_crushed',
    'emendatusenigmatica:lapis_crushed',
    'emendatusenigmatica:emerald_crushed',
    'emendatusenigmatica:diamond_crushed',
    'emendatusenigmatica:coal_crushed',
    'emendatusenigmatica:molten_zinc_bucket',
    'emendatusenigmatica:molten_uranium_bucket',
    'emendatusenigmatica:molten_tin_bucket',
    'emendatusenigmatica:molten_steel_bucket',
    'emendatusenigmatica:molten_silver_bucket',
    'emendatusenigmatica:molten_osmium_bucket',
    'emendatusenigmatica:molten_nickel_bucket',
    'emendatusenigmatica:molten_lead_bucket',
    'emendatusenigmatica:molten_iron_bucket',
    'emendatusenigmatica:molten_invar_bucket',
    'emendatusenigmatica:molten_gold_bucket',
    'emendatusenigmatica:molten_fluix_bucket',
    'emendatusenigmatica:molten_emerald_bucket',
    'emendatusenigmatica:molten_electrum_bucket',
    'emendatusenigmatica:molten_diamond_bucket',
    'emendatusenigmatica:molten_copper_bucket',
    'emendatusenigmatica:molten_constantan_bucket',
    'emendatusenigmatica:molten_cobalt_bucket',
    'emendatusenigmatica:molten_charged_certus_quartz_bucket',
    'emendatusenigmatica:molten_certus_quartz_bucket',
    'emendatusenigmatica:molten_bronze_bucket',
    'emendatusenigmatica:molten_brass_bucket',
    'emendatusenigmatica:molten_aluminum_bucket',
    'emendatusenigmatica:molten_ancient_debris_bucket',

    'environmental:cherry_pie',
    'environmental:apple_pie',

    'immersiveengineering:dust_saltpeter',
    'immersiveengineering:dust_wood',
    'immersiveengineering:coal_coke',

    'mekanism:fluorite_gem',

    'morevanillalib:obsidian_shard',

    // Deprecated Pedestals Items
    'pedestals:coin/fmagnetmodb',
    'pedestals:coin/fmagnetmod',
    'pedestals:coin/fmagnetitemstackb',
    'pedestals:coin/fluidpumpfilterblacklist',
    'pedestals:coin/fluidrelayblocked',
    'pedestals:coin/rfquarry',
    'pedestals:coin/rfquarryb',
    'pedestals:coin/rfrelayblocked',
    'pedestals:coin/xprelayblocked',
    'pedestals:coin/fmagnetitem',
    'pedestals:coin/fmagnetitemb',
    'pedestals:coin/fmagnetitemstack',
    'pedestals:coin/fluidpumpfilter',
    'pedestals:coin/fluidfilterblacklist',
    'pedestals:coin/fluidfilter',
    'pedestals:coin/enderfilteredexactimport',
    'pedestals:coin/enderfilteredfuzzyimport',
    'pedestals:coin/enderfilteredmodimport',
    'pedestals:coin/enderfilteredenchantedimport',
    'pedestals:coin/enderfilteredfoodimport',
    'pedestals:coin/fexportenchanted',
    'pedestals:coin/filterenchantedfuzzy',
    'pedestals:coin/filterenchantedfuzzyb',
    'pedestals:coin/filterenchantedexact',
    'pedestals:coin/filterenchantedexactb',
    'pedestals:coin/filterenchantedcount',
    'pedestals:coin/fexportitem',
    'pedestals:coin/fexportitemstack',
    'pedestals:coin/fexportmod',
    'pedestals:coin/fexportfood',
    'pedestals:coin/filterenchantedb',
    'pedestals:coin/filterenchanted',
    'pedestals:coin/filterdurabilityless',
    'pedestals:coin/filterdurability',
    'pedestals:coin/filterfoodb',
    'pedestals:coin/filterfood',
    'pedestals:coin/filtermodb',
    'pedestals:coin/filtermod',
    'pedestals:coin/filtertagb',
    'pedestals:coin/filtertag',
    'pedestals:coin/filteritemstackb',
    'pedestals:coin/filteritemstack',
    'pedestals:coin/filteritemb',
    'pedestals:coin/filteritem',
    'pedestals:coin/quarryb',
    'pedestals:coin/restriction',

    'powah:uraninite_ore',
    'powah:uraninite_ore_dense',
    'powah:uraninite_ore_poor',
    'powah:uraninite_raw',
    'powah:uraninite_raw_dense',
    'powah:uraninite_raw_poor',

    'quark:biotite',
    'quark:biotite_ore',
    'quark:tallow',

    'refinedstorage:silicon',

    'simplefarming:apple_pie',
    'simplefarming:blueberry_pie',

    'supplementaries:pedestal',
    'supplementaries:crank',
    'supplementaries:cog_block',
    'supplementaries:redstone_illuminator',
    'supplementaries:turn_table',
    'supplementaries:firefly_jar',
    'supplementaries:stone_lamp',
    'supplementaries:sack',
    'supplementaries:blackboard',

    'tconstruct:copper_ore',
    'tconstruct:cobalt_ore',

    'thermal:coal_coke',
    'thermal:coal_coke_block',
    'thermal:ender_pearl_dust',
    'thermal:sawdust',
    'thermal:press_gear_die',
    'thermal:press_packing_3x3_die',
    'thermal:press_packing_2x2_die',
    'thermal:press_unpacking_die',
    'thermal:rubber',

    'quark:bonded_ravager_hide',
    'quark:ravager_hide',
    'quark:backpack',
    'quark:crate',
    'quark:magnet',
    'quark:soul_compass'
];

const fluidsToHide = [
    'cofh_core:honey',
    'create:honey',
    'thermal:crude_oil',
    'immersivepetroleum:oil',
    'emendatusenigmatica:molten_zinc',
    'emendatusenigmatica:molten_uranium',
    'emendatusenigmatica:molten_tin',
    'emendatusenigmatica:molten_steel',
    'emendatusenigmatica:molten_silver',
    'emendatusenigmatica:molten_osmium',
    'emendatusenigmatica:molten_nickel',
    'emendatusenigmatica:molten_lead',
    'emendatusenigmatica:molten_iron',
    'emendatusenigmatica:molten_invar',
    'emendatusenigmatica:molten_gold',
    'emendatusenigmatica:molten_fluix',
    'emendatusenigmatica:molten_emerald',
    'emendatusenigmatica:molten_electrum',
    'emendatusenigmatica:molten_diamond',
    'emendatusenigmatica:molten_copper',
    'emendatusenigmatica:molten_constantan',
    'emendatusenigmatica:molten_cobalt',
    'emendatusenigmatica:molten_charged_certus_quartz',
    'emendatusenigmatica:molten_certus_quartz',
    'emendatusenigmatica:molten_bronze',
    'emendatusenigmatica:molten_brass',
    'emendatusenigmatica:molten_aluminum',
    'emendatusenigmatica:molten_ancient_debris'
];

/*  This allows hiding individual recipes. It's used primarily for recipes displayed in Patchouli manuals 
    that have been changed to use a different crafting type or that have been disabled. It allows creating a
    recipe pointer that will display in Patchouli but not in JEI.  

    Use the below logger to discover the correct CategoryID. They do not match the recipe type.
*/
//console.log('JEI RECIPE TYPES: ' + event.getCategoryIds());
const recipesToHide = [
    {
        category: 'minecraft:crafting',
        recipes_by_id: [
            'ars_nouveau:arcane_stone',
            'ars_nouveau:crystallizer',
            'ars_nouveau:volcanic_accumulator',
            'naturesaura:calling_spirit',
            'naturesaura:animal_spawner',
            'botania:spark',
            'mythicbotany:wither_aconite_floating',
            'mythicbotany:raindeletia_floating'
        ]
    },
    {
        category: 'ars_nouveau:apparatus',
        recipes_by_id: ['ars_nouveau:jar_of_light', 'ars_nouveau:void_jar']
    },
    {
        category: 'botania:petals',
        recipes_by_id: ['mythicbotany:petal_apothecary/wither_aconite', 'mythicbotany:petal_apothecary/raindeletia']
    }
];

var regexHide = [
    /emendatusenigmatica:\w+_andesite_ore/,
    /emendatusenigmatica:\w+_gabbro_ore/,
    /emendatusenigmatica:\w+_c_limestone_ore/,
    /emendatusenigmatica:\w+_scoria_ore/,
    /emendatusenigmatica:\w+_weathered_limestone_ore/,
    /emendatusenigmatica:\w+_jasper_ore/,
    /emendatusenigmatica:\w+_marble_ore/,
    /emendatusenigmatica:\w+_slate_ore/,
    /emendatusenigmatica:\w+_netherrack_ore/,
    /emendatusenigmatica:\w+_blackstone_ore/,
    /emendatusenigmatica:\w+_end_stone_ore/,
    /emendatusenigmatica:\w+_mossy_stone_ore/,
    /emendatusenigmatica:\w+_granite_ore/,
    /emendatusenigmatica:\w+_diorite_ore/,
    /emendatusenigmatica:\w+_sand_ore/,
    /emendatusenigmatica:\w+_gravel_ore/,
    /emendatusenigmatica:\w+_violecite_ore/,
    /emendatusenigmatica:\w+_sulphuric_rock_ore/,
    /emendatusenigmatica:\w+_flavolite_ore/,
    /emendatusenigmatica:\w+_cryptic_stone_ore/,
    /emendatusenigmatica:\w+_ether_stone_ore/,
    /emendatusenigmatica:\w+_nylium_soul_soil_ore/,
    /emendatusenigmatica:\w+_subzero_ash_ore/,
    /emendatusenigmatica:\w+_brimstone_ore/,
    /emendatusenigmatica:\w+_soul_soil_ore/,
    /emendatusenigmatica:\w+_basalt_ore/,
    /tconstruct:\w+_station/,
    /tconstruct:\w+_anvil/,
    /tconstruct:part_builder/,
    /titanium:\w+_gear/,
    /thermal:\w+_dust/,
    /thermal:\w+_gear$/,
    /thermal:\w+_ingot/,
    /thermal:\w+_nugget/,
    /thermal:\w+_ore/,
    /thermal:\w+_plate/,
    /pedestals:dust/,
    /mekanism:\w+_ore/,
    /minecraft:\w+_ore/,
    /immersiveengineering:plate_/,
    /immersiveengineering:storage_/,
    /immersiveengineering:ore_/,
    /create:\w+_sheet/,
    /create:\w+_nugget/,
    /create:\w+_ingot/,
    /immersiveposts:stick_/,
    /eidolon:\w+_ore/,
    /byg:pendorite/,
    /byg:ametrine/,
    /emendatusenigmatica:\w+certus/,
    /emendatusenigmatica:\w+fluix/,
    /powah:\w+_starter/,
    /rftoolsbase:dimensionalshard/,
    /betterendforge:\w+_anvil/,
    /theoneprobe:/,
    /upgrade_aquatic:\w+_jelly_torch/
];

const disabledItems = [
    'abnormals_delight:adzuki_cake_slice',
    'abnormals_delight:banana_cake_slice',
    'abnormals_delight:cherry_pantry',
    'abnormals_delight:chocolate_cake_slice',
    'abnormals_delight:cooked_duck_fillet',
    'abnormals_delight:cooked_venison_shanks',
    'abnormals_delight:duck_fillet',
    'abnormals_delight:mint_cake_slice',
    'abnormals_delight:necromium_knife',
    'abnormals_delight:passionfruit_glazed_duck',
    'abnormals_delight:seared_venison',
    'abnormals_delight:silver_knife',
    'abnormals_delight:strawberry_cake_slice',
    'abnormals_delight:vanilla_cake_slice',
    'abnormals_delight:venison_shanks',
    'abnormals_delight:willow_pantry',
    'abnormals_delight:wisteria_pantry',

    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    'aquaculture:frog_legs_raw',
    'aquaculture:frog_legs_cooked',

    'betterendforge:ender_dust',

    'blockcarpentry:frame_chest',
    'blockcarpentry:illusion_chest',

    'bloodmagic:sand_netherite',
    'bloodmagic:gravel_netherite_scrap',
    'bloodmagic:fragment_netherite_scrap',

    'byg:ametrine_block',
    'byg:ametrine_boots',
    'byg:ametrine_chestplate',
    'byg:ametrine_gems',
    'byg:ametrine_helmet',
    'byg:ametrine_horse_armor',
    'byg:ametrine_leggings',
    'byg:ametrine_ore',
    'byg:pendorite_axe',
    'byg:pendorite_battleaxe',
    'byg:pendorite_block',
    'byg:pendorite_hoe',
    'byg:pendorite_horse_armor',
    'byg:pendorite_ore',
    'byg:pendorite_pickaxe',
    'byg:pendorite_scraps',
    'byg:pendorite_shovel',
    'byg:pendorite_sword',

    'create:dough',

    'decorative_blocks_abnormals:ender_brazier',

    'ironjetpacks:strap',
    'ironjetpacks:basic_coil',
    'ironjetpacks:advanced_coil',
    'ironjetpacks:elite_coil',
    'ironjetpacks:ultimate_coil',
    'ironjetpacks:hardened_cell',
    'ironjetpacks:hardened_capacitor',
    'ironjetpacks:invar_cell',
    'ironjetpacks:invar_capacitor',
    'ironjetpacks:blazing_cell',
    'ironjetpacks:blazing_capacitor',
    'ironjetpacks:signalum_cell',
    'ironjetpacks:signalum_capacitor',
    'ironjetpacks:niotic_cell',
    'ironjetpacks:niotic_capacitor',
    'ironjetpacks:lumium_cell',
    'ironjetpacks:lumium_capacitor',
    'ironjetpacks:spirited_cell',
    'ironjetpacks:spirited_capacitor',
    'ironjetpacks:enderium_cell',
    'ironjetpacks:enderium_capacitor',
    'ironjetpacks:nitro_cell',
    'ironjetpacks:nitro_capacitor',

    'mekanism:sawdust',
    'mekanism:dust_lapis_lazuli',
    'mekanism:dust_lithium',

    'mythicbotany:raindeletia',
    'mythicbotany:raindeletia_floating',
    'mythicbotany:wither_aconite',
    'mythicbotany:wither_aconite_floating',

    'pedestals:dustflour',

    'pitg:green_dye',

    'pneumaticcraft:wheat_flour',

    'quark:pipe',
    'quark:potato_crate',
    'quark:beetroot_crate',
    'quark:carrot_crate',

    'thermal:beetroot_block',
    'thermal:carrot_block',
    'thermal:potato_block',
    'thermal:sugar_cane_block',
    'thermal:apple_block',
    'simplefarming:raw_bacon',
    'simplefarming:cooked_bacon',
    'simplefarming:cooked_egg',
    'simplefarming:noodles',
    'simplefarming:chocolate'
];
const materialsToUnify = [
    'iron',
    'gold',
    'copper',
    'silver',
    'zinc',
    'brass',
    'lead',
    'tin',
    'compressed_iron',
    'nickel',
    'aluminum',
    'uranium',
    'bronze',
    'electrum',
    'constantan',
    'steel',
    'osmium',
    'diamond',
    'lapis',
    'emerald',
    'quartz',
    'coal',
    'charcoal',
    'obsidian',
    'ender',
    'fluix',
    'saltpeter',
    'fluorite',
    'invar',
    'signalum',
    'lumium',
    'enderium',
    'sulfur',
    'cinnabar',
    'niter',
    'potassium_nitrate',
    'saltpeter',
    'apatite',
    'bitumen',
    'redstone',
    'glowstone',
    'arcane',
    'mana',
    'certus_quartz',
    'charged_certus_quartz',
    'iesnium',
    'dimensional',
    'cloggrum',
    'froststeel',
    'regalium',
    'utherium',
    'coal_coke',
    'starmetal'
];

const packMode = global.packmode;

const isNormalMode = packMode == 'normal';
const isExpertMode = packMode == 'expert';
