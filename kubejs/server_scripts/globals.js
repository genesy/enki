// priority: 1000

const MOD = (domain, id, x) =>
  (x ? `${x}x ` : "") +
  (id.startsWith("#") ? "#" : "") +
  domain +
  ":" +
  id.replace("#", "");
const MC = (id, x) => MOD("minecraft", id, x);
const PF = (id, x) => MOD("potionflasks", id, x);
const CR = (id, x) => MOD("create", id, x);
const CRCR = (id, x) => MOD("createchromaticreturn", id, x);
const CRC = (id, x) => MOD("createcafe", id, x);
const CRCF = (id, x) => MOD("create_confectionery", id, x);
const CD = (id, x) => MOD("createdeco", id, x);
const AP = (id, x) => MOD("apotheosis", id, x);
const BB = (id, x) => MOD("buzzier_bees", id, x);
const AA = (id, x) => MOD("additionaladditions", id, x);
const IRF = (id, x) => MOD("ironfurnaces", id, x);
const BE = (id, x) => MOD("beyond_earth", id, x);
const DU = (id, x) => MOD("darkutils", id, x);
const OAD = (id, x) => MOD("oresabovediamonds", id, x);
const SS = (id, x) => MOD("sophisticatedstorage", id, x);
const SB = (id, x) => MOD("sophisticatedbackpacks", id, x);
const PC = (id, x) => MOD("pneumaticcraft", id, x);
const RS = (id, x) => MOD("refinedstorage", id, x);
const TF = (id, x) => MOD("thermal", id, x);
const TE = (id, x) => MOD("toolsextension", id, x);
const NN = (id, x) => MOD("nourished_nether", id, x);
const SN = (id, x) => MOD("storagenetwork", id, x);
const SD = (id, x) => MOD("storagedrawers", id, x);
const MW = (id, x) => MOD("mysticalworld", id, x);
const AN = (id, x) => MOD("ars_nouveau", id, x);
const EP = (id, x) => MOD("easypaxel", id, x);
const CT = (id, x) => MOD("croptopia", id, x);

const GUIDEBOOK = Item.of(
  Item.of(
    "akashictome:tome",
    '{"akashictome:data":{apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},pneumaticcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}},rftoolsbase:{Count:1b,id:"rftoolsbase:manual"},simpleplanes:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simpleplanes:planes_book"}}}}'
  )
);

const HIDDEN_ITEMS = [
  CR("fluid_tank"),
  MC("enchanted_golden_apple"),
  AP("potion_charm"),
  AP("potion_enchanting"),
  AP("ender_library"),
  "immersive_paintings:painting",
  AA("honeyed_apple"),
  BB("honey_apple"),
  IRF("million_furnace"),
  IRF("augment_generator"),
  IRF("item_linker"),
  IRF("rainbow_plating"),
  IRF("rainbow_coal"),
  IRF("item_copy"),
  CRC("mixing/mandarin_tea_mixing"),
  CRC("mixing/citron_tea_mixing"),
  "pipez:item_pipe",
  "pipez:fluid_pipe",
  "pipez:gas_pipe",
  "pipez:universal_pipe",
  "buildinggadgets:gadget_exchanging",
  "buildinggadgets:gadget_building",
  "buildinggadgets:gadget_copy_paste",
  "buildinggadgets:gadget_destruction",
  "structures_compass:structures_compass",
  "create_jetpack:jetpack",
  "rsinfinitybooster:infinity_card",
  CR("creative_motor"),
  PC("jet_boots_upgrade_4"),
  PC("jet_boots_upgrade_5"),
  PC("jumping_upgrade_3"),
  PC("jumping_upgrade_4"),
  SN("slow_upgrade"),
  SN("single_upgrade"),
];

// TODO
const ALL_POTIONS = [
  MC("night_vision"),
  MC("invisibility"),
  MC("leaping"),
  MC("strong_leaping"),
];

ServerEvents.recipes((event) => {
  HIDDEN_ITEMS.forEach((id) => {
    event.remove({ output: id });
  });
});
