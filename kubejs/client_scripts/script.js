// priority: 0

console.info(
  "Hello, World! (You will see this line every time client resources reload)"
);

// JEIEvents.hideItems(event => {
// 	// Hide items in JEI here
// 	// event.hide('minecraft:cobblestone')
// })

const MOD = (domain, id, x) =>
  (x ? `${x}x ` : "") +
  (id.startsWith("#") ? "#" : "") +
  domain +
  ":" +
  id.replace("#", "");
const RQ = (id, x) => MOD("reliquary", id, x);
const SS = (id, x) => MOD("sophisticatedstorage", id, x);
const SB = (id, x) => MOD("sophisticatedbackpacks", id, x);
const TF = (id, x) => MOD("thermal", id, x);

global.itemIdsToRemove = [
  RQ("alkahestry_tome"),
  RQ("angelic_feather"),
  RQ("destruction_catalyst"),
  RQ("handgun"),
  RQ("grip_assembly"),
  RQ("barrel_assembly"),
  RQ("hammer_assembly"),
  RQ("rod_of_olyssa"),
  RQ("infernal_chalice"),
  RQ("hero_medallion"),
  RQ("infernal_tear"),
  RQ("witherless_rose"),
  RQ("mercy_cross"),
  TF("device_rock_gen"),
  SB("inception_upgrade"),
  SB("xp_pump_upgrade"),
  SB("feeding_upgrade"),
  SB("advanced_feeding_upgrade"),
  "functionalstorage:ender_drawer",
];
const ssupgrades = [
  "pickup_upgrade",
  "advanced_pickup_upgrade",
  "filter_upgrade",
  "advanced_filter_upgrade",
  "magnet_upgrade",
  "advanced_magnet_upgrade",
  "feeding_upgrade",
  "advanced_feeding_upgrade",
  "compacting_upgrade",
  "advanced_compacting_upgrade",
  "void_upgrade",
  "advanced_void_upgrade",
  "smelting_upgrade",
  "auto_smelting_upgrade",
  "smoking_upgrade",
  "auto_smoking_upgrade",
  "blasting_upgrade",
  "auto_blasting_upgrade",
  "crafting_upgrade",
  "stonecutter_upgrade",
  "stack_upgrade_tier_1",
  "stack_upgrade_tier_2",
  "stack_upgrade_tier_3",
  "stack_upgrade_tier_4",
  "controller",
  "storage_link",
  "storage_tool",
  "debug_tool",
  "pump_upgrade",
  "xp_pump_upgrade",
  "advanced_pump_upgrade",
  "jukebox_upgrade",
  "barrel",
];

REIEvents.hide("item", (event) => {
  console.log("time to hide");
  ssupgrades.forEach((upgrade) => {
    console.log(SS(upgrade));
    event.hide(SS(upgrade));
  });

  event.hide("/refinedstorage:disk_.*?/");
  event.hide("/refinedstorage:.*?_disk/");
  event.hide("/refinedstorage:.*?storage_part*/");
  event.hide("/refinedstorage:.*?storage_block*/");
  event.hide("/refinedstorage:.*?creative_controller*/");
  event.hide("/rftoolsbase:.*?/");

  event.hide("/reliquary:pedestals/.*?pedestal/");
  event.hide("/reliquary:.*?magazine/");
  event.hide("/reliquary:.*?bullet/");
  event.hide("/reliquary:bullets/.*?bullet/");

  for (const id of global.itemIdsToRemove) {
    console.log(id);
    event.hide(id);
  }
});

REIEvents.groupEntries((event) => {
  event.groupItemsByTag(
    "kubejs:rei_groups/concrete",
    "Concrete",
    "forge:concrete"
  );
  event.groupItemsByTag(
    "kubejs:rei_groups/concrete_powders",
    "Concrete Powder",
    "forge:concrete_powders"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/controller",
    "Controller",
    "refinedstorage:controller"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/grid",
    "Grid",
    "refinedstorage:grid"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/fluid_grid",
    "Fluid Grid",
    "refinedstorage:fluid_grid"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/crafting_grid",
    "Crafting Grid",
    "refinedstorage:crafting_grid"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/network_receiver",
    "Network Receiver",
    "refinedstorage:network_receiver"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/relay",
    "Relay",
    "refinedstorage:relay"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/detector",
    "Detector",
    "refinedstorage:detector"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/security_manager",
    "Security Manager",
    "refinedstorage:security_manager"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/wireless_transmitter",
    "Wireless Transmitter",
    "refinedstorage:wireless_transmitter"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/disk_manipulator",
    "Disk Manipulator",
    "refinedstorage:disk_manipulator"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/crafting_monitor",
    "Crafting Monitor",
    "refinedstorage:crafting_monitor"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/detector",
    "Detector",
    "refinedstorage:detector"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/detector",
    "Detector",
    "refinedstorage:detector"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/detector",
    "Detector",
    "refinedstorage:detector"
  );
  event.groupItemsByTag(
    "refinedstorage:rei_groups/crafter",
    "Crafter",
    "refinedstorage:crafter"
  );
  event.groupItemsByTag(
    "pitg:rei_groups/glass_panes",
    "Glass Panes",
    "forge:glass_panes"
  );
  event.groupItemsByTag(
    "pitg:rei_groups/glass_panes",
    "Dual Glass Panes",
    "pitg:dual_glass_panes"
  );
  event.groupItemsByTag(
    "pitg:rei_groups/glass_panes",
    "Horizontal Glass Panes",
    "pitg:horizontal_glass_panes"
  );
  event.groupItemsByTag(
    "pitg:rei_groups/glass_panes",
    "Horizontal Glass Panes",
    "pitg:horizontal_glass_panes"
  );

  event.groupItemsByTag(
    "kubejs:rei_groups/flower_pots",
    "Flower pots",
    "minecraft:flower_pots"
  );
  event.groupItemsByTag("kubejs:rei_groups/beds", "Beds", "minecraft:beds");
  event.groupItemsByTag(
    "kubejs:rei_groups/music_discs",
    "Music Discs",
    "minecraft:music_discs"
  );
  event.groupItemsByTag(
    "kubejs:rei_groups/candle",
    "Candle",
    "minecraft:candle"
  );
  event.groupItemsByTag(
    "supplementaries:rei_groups/candle_holders",
    "Candle Holders",
    "supplementaries:candle_holders"
  );
  event.groupItemsByTag(
    "supplementaries:rei_groups/presents",
    "Presents",
    "supplementaries:presents"
  );
  event.groupItemsByTag(
    "supplementaries:rei_groups/hanging_signs",
    "Hanging Signs",
    "supplementaries:hanging_signs"
  );
  event.groupItemsByTag(
    "supplementaries:rei_groups/sign_posts",
    "Sign Posts",
    "supplementaries:sign_posts"
  );
  event.groupItemsByTag(
    "comforts:rei_groups/hammocks",
    "Hammocks",
    "comforts:hammocks"
  );
  event.groupItemsByTag(
    "comforts:rei_groups/sleeping_bags",
    "Sleeping Bags",
    "comforts:sleeping_bags"
  );
  event.groupItemsByTag(
    "create:rei_groups/toolboxes",
    "Toolboxes",
    "create:toolboxes"
  );

  event.groupItemsByTag(
    "elevatorid:rei_groups/elevators",
    "Elevators",
    "elevatorid:elevators"
  );
  event.groupItemsByTag("create:rei_groups/seats", "Seats", "create:seats");
  event.groupItemsByTag("kubejs:rei_groups/seeds", "Seeds", "forge:seeds");

  const useNbt = [
    "potion",
    "enchanted_book",
    "splash_potion",
    "tipped_arrow",
    "lingering_potion",
    "simpleplanes:helicopter",
    "simpleplanes:large_plane",
    "simpleplanes:plane",
    "sophisticatedstorage:barrel",
    "sophisticatedstorage:iron_barrel",
    "sophisticatedstorage:gold_barrel",
    "sophisticatedstorage:diamond_barrel",
    "sophisticatedstorage:netherite_barrel",
    "sophisticatedstorage:chest",
    "sophisticatedstorage:iron_chest",
    "sophisticatedstorage:gold_chest",
    "sophisticatedstorage:diamond_chest",
    "sophisticatedstorage:netherite_chest",
    "sophisticatedstorage:shulker_box",
    "sophisticatedstorage:iron_shulker_box",
    "sophisticatedstorage:gold_shulker_box",
    "sophisticatedstorage:diamond_shulker_box",
    "sophisticatedstorage:netherite_shulker_box",
    "sophisticatedbackpacks:backpack",
    "fairylights:hanging_lights",
    "fairylights:pennant_bunting",
    "fairylights:tinsel",
    "fairylights:fairy_light",
    "fairylights:paper_lantern",
    "fairylights:orb_lantern",
    "fairylights:flower_light",
    "fairylights:candle_lantern_light",
    "fairylights:oil_lantern_light",
    "fairylights:jack_o_lantern",
    "fairylights:skull_light",
    "fairylights:ghost_light",
    "fairylights:spider_light",
    "fairylights:witch_light",
    "fairylights:snowflake_light",
    "fairylights:heart_light",
    "fairylights:moon_light",
    "fairylights:star_light",
    "fairylights:icicle_lights",
    "fairylights:meteor_light",
    "fairylights:triangle_pennant",
    "fairylights:spearhead_pennant",
    "fairylights:swallowtail_pennant",
    "fairylights:square_pennant",
    "supplementaries:bamboo_spikes_tipped",
    "quark:seed_pouch",
    "quark:ancient_tome",
  ];

  useNbt.forEach((id) => {
    const item = Item.of(id);
    const { namespace, path } = Utils.id(item.id);
    event.groupSameItem(
      `kubejs:rei_groups/${namespace}/${path}`,
      item.getHoverName(),
      item
    );
  });
});
