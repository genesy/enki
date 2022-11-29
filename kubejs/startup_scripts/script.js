// priority: 0

console.info(
  "Hello, World! (You will only see this line once in console, during startup)"
);

let MOD = (domain, id, x) =>
  (x ? `${x}x ` : "") +
  (id.startsWith("#") ? "#" : "") +
  domain +
  ":" +
  id.replace("#", "");
let TE = (id, x) => MOD("thermal", id, x);
let AP = (id, x) => MOD("architects_palette", id, x);
let LV = (id, x) => MOD("libvulpes", id, x);
let CR = (id, x) => MOD("create", id, x);
let TC = (id, x) => MOD("tconstruct", id, x);
let MC = (id, x) => MOD("minecraft", id, x);
let KJ = (id, x) => MOD("kubejs", id, x);
let EG = (id, x) => MOD("endergetic", id, x);
let FD = (id, x) => MOD("farmersdelight", id, x);
let BOP = (id, x) => MOD("biomesoplenty", id, x);
let PR_C = (id, x) => MOD("projectred-core", id, x);
let RQ = (id, x) => MOD("xreliquary", id, x);
let SD = (id, x) => MOD("storagedrawers", id, x);
let SP = (id, x) => MOD("supplementaries", id, x);
let F = (id, x) => MOD("forge", id, x);
let AC = (id, x) => MOD("aquaculture", id, x);

StartupEvents.registry("item", (event) => {
  // Register new items here
  // event.create('example_item').displayName('Example Item')
  global.trades = [];
  global.professions = [];
  global.transactions = [];

  let profession = (name, c1, c2, transactions) => {
    let id = name.toLowerCase().replace("'", "").split(" ").join("_");
    global.professions.push(id);
    global.transactions[id] = transactions;
    event
      .create(`profession_card_${id}`)
      .color(1, c1)
      .color(2, c2)
      .parentModel("kubejs:item/profession_card")
      .texture("kubejs:item/profession_card_0")
      .displayName(`Profession: ${name}`)
      .unstackable();
  };

  let trade = (name, c1, c2, transactions, custom) => {
    let id = name.toLowerCase().replace("'", "").split(" ").join("_");
    global.trades.push(id);
    global.transactions[id] = transactions;
    event
      .create(`trade_card_${id}`)
      .color(1, c1)
      .color(2, c2)
      .parentModel("kubejs:item/trade_card")
      .texture("kubejs:item/trade_card_0")
      .displayName((custom ? "" : "Import: ") + name)
      .unstackable();
  };

  let S = (x) => TE("silver_coin", x);
  let G = (x) => TE("gold_coin", x);
  profession("Farming", 0xffcc29, 0x81b214, [
    // { in: FD("carrot_crate"), out: S(1) },
    // { in: FD("potato_crate"), out: S(1) },
    // { in: FD("beetroot_crate"), out: S(1) },
    // { in: FD("cabbage_crate"), out: S(1) },
    // { in: FD("tomato_crate"), out: S(1) },
    // { in: FD("onion_crate"), out: S(1) },
    // { in: FD("rice_bag"), out: S(1) },
    // { in: FD("canvas", 32), out: S(1) },
    { in: TE("apple_block"), out: S(1) },
    { in: MC("sweet_berries", 8), out: S(1) },
    { in: MC("cocoa_beans", 16), out: S(1) },
    { in: MC("honey_bottle", 8), out: S(1) },
    { in: MC("honeycomb", 4), out: S(1) },
    { in: MC("dandelion", 16), out: S(1) },
    { in: MC("poppy", 16), out: S(1) },
    { in: MC("oxeye_daisy", 16), out: S(1) },
    { in: MC("bread", 8), out: S(1) },
    { in: MC("brown_mushroom", 8), out: S(1) },
    { in: MC("red_mushroom", 8), out: S(1) },
    { in: BOP("toadstool", 8), out: S(1) },
    { in: MC("kelp", 64), out: S(1) },
    { in: MC("pumpkin", 9), out: S(1) },
    { in: MC("#wool", 16), out: S(1) },
    { in: MC("melon", 3), out: S(1) },
  ]);

  profession("Carpentry", 0xd0af84, 0x966c3b, [
    { in: MC("oak_log", 64), out: S(1) },
    { in: MC("spruce_log", 64), out: S(1) },
    { in: MC("jungle_log", 64), out: S(1) },
    { in: MC("dark_oak_log", 64), out: S(1) },
    { in: BOP("redwood_log", 64), out: S(1) },
    { in: BOP("fir_log", 64), out: S(1) },
    { in: BOP("umbran_log", 64), out: S(1) },
    { in: BOP("dead_log", 64), out: S(1) },
    { in: MC("acacia_log", 64), out: S(2) },
    { in: MC("birch_log", 64), out: S(2) },
    { in: BOP("cherry_log", 64), out: S(2) },
    { in: BOP("willow_log", 64), out: S(3) },
    { in: BOP("palm_log", 64), out: S(3) },
    { in: BOP("mahogany_log", 64), out: S(3) },
    { in: BOP("magic_log", 64), out: S(3) },
    { in: MC("crimson_stem", 64), out: S(4) },
    { in: MC("warped_stem", 64), out: S(4) },
    { in: BOP("hellbark_log", 64), out: S(8) },
  ]);

  profession("Mining", 0x1c1124, 0x88fff7, [
    { in: CR("crushed_iron_ore", 16), out: S(8) },
    { in: CR("crushed_copper_ore", 16), out: S(8) },
    { in: CR("crushed_zinc_ore", 16), out: S(8) },
    { in: CR("crushed_gold_ore", 16), out: S(10) },
    { in: CR("crushed_nickel_ore", 16), out: S(12) },
    { in: CR("crushed_lead_ore", 16), out: S(12) },
    { in: MC("andesite", 64), out: S(1) },
    { in: MC("granite", 64), out: S(1) },
    { in: MC("diorite", 64), out: S(1) },
    { in: MC("sandstone", 64), out: S(1) },
    { in: CR("limestone", 64), out: S(1) },
    { in: CR("gabbro", 64), out: S(1) },
    { in: CR("weathered_limestone", 64), out: S(2) },
    { in: CR("dolomite", 64), out: S(2) },
    { in: TE("cinnabar", 8), out: S(6) },
    { in: TE("sulfur", 16), out: S(6) },
    { in: TE("niter", 16), out: S(6) },
    { in: MC("lapis_lazuli", 16), out: S(6) },
    { in: TE("apatite", 16), out: S(4) },
    { in: TE("sapphire", 1), out: S(10) },
    { in: TE("ruby", 1), out: S(10) },
    { in: MC("diamond", 1), out: S(14) },
    { in: MC("coal", 16), out: S(2) },
    // { in: "16x advancedrocketry:moonturf", out: S(2) },
  ]);

  profession("Masonry", 0x5e6f64, 0xba7967, [
    { in: SP("checker_block", 64), out: S(4) },
    // { in: AP("basalt_tiles", 64), out: S(6) },
    // { in: TC("seared_bricks", 64), out: S(10) },
    // { in: AP("sunmetal_block", 64), out: S(8) },
    // { in: AP("osseous_bricks", 64), out: S(6) },
    // { in: AP("packed_ice_pillar", 64), out: S(8) },
    // { in: AP("flint_tiles", 64), out: S(4) },
    // { in: AP("abyssaline", 64), out: S(12) },
    // { in: AP("gilded_sandstone", 64), out: S(10) },
    { in: MC("bricks", 64), out: S(6) },
    // { in: TC("mud_bricks", 64), out: S(6) },
    // { in: AP("olivestone_bricks", 64), out: S(4) },
    { in: MC("quartz_bricks", 64), out: S(18) },
    // { in: AP("algal_bricks", 64), out: S(6) },
    // { in: TC("lavawood", 64), out: S(6) },
    { in: CR("ornate_iron_window", 64), out: S(10) },
    { in: MC("mossy_cobblestone", 64), out: S(6) },
    { in: F("#glazed_terracotta", 64), out: S(6) },
    { in: SP("daub_brace", 64), out: S(8) },
  ]);

  profession("Hunting", 0x393e46, 0xcf0000, [
    { in: RQ("slime_pearl"), out: S(6) },
    { in: RQ("catalyzing_gland"), out: S(10) },
    { in: RQ("witch_hat"), out: S(15) },
    { in: RQ("squid_beak"), out: S(3) },
    { in: RQ("withered_rib"), out: S(15) },
    { in: RQ("rib_bone"), out: S(5) },
    { in: RQ("zombie_heart"), out: S(5) },
    { in: RQ("chelicerae"), out: S(5) },
    { in: RQ("bat_wing"), out: S(10) },
    { in: RQ("frozen_core"), out: S(4) },
    { in: RQ("nebulous_heart"), out: S(5) },
    { in: RQ("molten_core"), out: S(5) },
    { in: RQ("eye_of_the_storm"), out: S(12) },
    { in: MC("phantom_membrane"), out: S(8) },
    { in: MC("rabbit_foot"), out: S(8) },
    { in: MC("nether_star"), out: G(1) },
    { in: MC("dragon_breath"), out: S(1) },
    { in: MC("ghast_tear"), out: S(10) },
    { in: MC("dragon_egg"), out: G(2) },
    { in: RQ("guardian_spike"), out: S(6) },
  ]);

  profession("Cooking", 0xd8b384, 0xf7dad9, [
    { in: CR("bar_of_chocolate", 16), out: S(4) },
    { in: CR("honeyed_apple", 16), out: S(4) },
    { in: CR("builders_tea", 16), out: S(4) },
    // { in: FD("hot_cocoa", 16), out: S(5) },
    // { in: FD("tomato_sauce", 8), out: S(3) },
    // { in: FD("apple_pie_slice", 16), out: S(3) },
    // { in: FD("chocolate_pie_slice", 16), out: S(4) },
    // { in: FD("sweet_berry_cheesecake_slice", 17), out: S(3) },
    // { in: FD("cake_slice", 14), out: S(3) },
    // { in: FD("sweet_berry_cookie", 64), out: S(2) },
    // { in: FD("honey_cookie", 64), out: S(2) },
    { in: MC("cookie", 64), out: S(2) },
    // { in: FD("melon_popsicle", 16), out: S(7) },
    // { in: FD("fruit_salad", 16), out: S(7) },
    // { in: FD("mixed_salad", 16), out: S(9) },
    // { in: FD("nether_salad", 16), out: S(5) },
    // { in: FD("barbecue_stick", 16), out: S(6) },
    // { in: FD("egg_sandwich", 16), out: S(5) },
    // { in: FD("chicken_sandwich", 16), out: S(9) },
    // { in: FD("bacon_sandwich", 16), out: S(9) },
    // { in: FD("hamburger", 16), out: S(11) },
    // { in: FD("mutton_wrap", 16), out: S(10) },
    // { in: FD("dumplings", 16), out: S(7) },
    // { in: FD("stuffed_potato", 16), out: S(6) },
    // { in: FD("cabbage_rolls", 16), out: S(5) },
    // { in: FD("beef_stew", 16), out: S(8) },
    // { in: FD("chicken_soup", 16), out: S(9) },
    { in: MC("rabbit_stew", 16), out: S(10) },
    { in: MC("beetroot_soup", 16), out: S(7) },
    { in: MC("pumpkin_pie", 16), out: S(6) },
    { in: FD("vegetable_soup", 16), out: S(9) },
    { in: SP("pancake", 32), out: S(4) },
    // { in: FD("fish_stew", 16), out: S(9) },
    // { in: FD("fried_rice", 16), out: S(8) },
    // { in: FD("pumpkin_soup", 16), out: S(12) },
    // { in: FD("baked_cod_stew", 16), out: S(9) },
    // { in: FD("noodle_soup", 16), out: S(9) },
    // { in: FD("pasta_with_meatballs", 16), out: S(10) },
    // { in: FD("pasta_with_mutton_chop", 16), out: S(10) },
    // { in: FD("roasted_mutton_chops", 16), out: S(9) },
    // { in: FD("vegetable_noodles", 16), out: S(10) },
    // { in: FD("steak_and_potatoes", 16), out: S(9) },
    // { in: FD("ratatouille", 16), out: S(9) },
    // { in: FD("squid_ink_pasta", 16), out: S(11) },
    // { in: FD("roast_chicken", 16), out: S(7) },
    // { in: FD("stuffed_pumpkin", 16), out: S(9) },
    // { in: FD("honey_glazed_ham", 16), out: S(7) },
    // { in: FD("shepherds_pie", 16), out: S(7) },
    // { in: AC("sushi", 16), out: S(3) },
    { in: CR("sweet_roll", 16), out: S(4) },
  ]);

  let quota = 8;
  profession("Fishing", 0x9ddfd3, 0xdbf6e9, [
    { in: MC("cod", quota), out: S(1) },
    { in: MC("salmon", quota), out: S(1) },
    { in: MC("pufferfish", quota), out: S(1) },
    { in: MC("tropical_fish", quota), out: S(1) },
    // { in: AC("atlantic_herring", quota), out: S(3) },
    // { in: AC("synodontis", quota), out: S(3) },
    // { in: AC("bluegill", quota), out: S(3) },
    // { in: AC("perch", quota), out: S(3) },
    // { in: AC("tambaqui", quota), out: S(3) },
    // { in: AC("minnow", quota), out: S(4) },
    // { in: AC("blackfish", quota), out: S(4) },
    // { in: AC("pink_salmon", quota), out: S(5) },
    // { in: AC("brown_trout", quota), out: S(5) },
    // { in: AC("carp", quota), out: S(5) },
    // { in: AC("pollock", quota), out: S(5) },
    // { in: AC("smallmouth_bass", quota), out: S(5) },
    // { in: AC("boulti", quota), out: S(5) },
    // { in: AC("red_shrooma", quota), out: S(5) },
    // { in: AC("brown_shrooma", quota), out: S(5) },
    // { in: AC("gar", quota), out: S(7) },
    // { in: AC("rainbow_trout", quota), out: S(7) },
    // { in: AC("bayad", quota), out: S(7) },
    // { in: AC("piranha", quota), out: S(7) },
    // { in: AC("jellyfish", quota), out: S(7) },
    // { in: AC("red_grouper", quota), out: S(7) },
    // { in: AC("atlantic_cod", quota), out: S(7) },
    // { in: AC("muskellunge", quota), out: S(8) },
    // { in: AC("pacific_halibut", quota), out: S(8) },
    // { in: AC("atlantic_halibut", quota), out: S(8) },
    // { in: AC("catfish", quota), out: S(10) },
    // { in: AC("capitaine", quota), out: S(10) },
    // { in: AC("tuna", quota), out: S(10) },
    // { in: AC("arapaima", quota), out: S(10) },
    // { in: AC("arrau_turtle", quota), out: S(10) },
    // { in: AC("box_turtle", quota), out: S(10) },
    // { in: AC("starshell_turtle", quota), out: S(10) },
    // { in: AC("goldfish", quota), out: S(10) },
    // { in: AC("neptunium_ingot", 5), out: S(16) },
  ]);

  profession("Smithing", 0xffc93c, 0xff7a00, [
    { in: MC("iron_boots"), out: S(2) },
    { in: MC("iron_leggings"), out: S(4) },
    { in: MC("iron_chestplate"), out: S(4) },
    // { in: TC("blank_cast"), out: S(1) },
    // { in: TC("ingot_cast"), out: S(2) },
    // { in: TC("pickaxe_head_cast"), out: S(3) },
    // { in: TC("gem_cast"), out: S(4) },
    { in: MC("iron_helmet"), out: S(3) },
    { in: MC("golden_boots"), out: S(4) },
    { in: MC("golden_leggings"), out: S(7) },
    { in: MC("golden_chestplate"), out: S(8) },
    { in: MC("golden_helmet"), out: S(5) },
    { in: MC("golden_apple"), out: S(10) },
    { in: MC("arrow", 32), out: S(3) },
    { in: MC("iron_sword"), out: S(1) },
    // { in: TC("#modifiable/two_handed"), out: S(1) },
    { in: MC("golden_sword"), out: S(2) },
  ]);

  trade(
    "Exchange Currencies",
    0xeba83a,
    0xf4f4f4,
    [
      { in: G(1), out: S(64) },
      { in: S(64), out: G(1) },
    ],
    true
  );
});

StartupEvents.registry("block", (event) => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});
