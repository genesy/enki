// priority: 0

const smelterRecipes = [
  {
    output: [TF("steel_dust")],
    input: ["#forge:coal_coke", "#forge:dusts/iron"],
  },
  // {
  //   output: [`2x ${TF('electrum_dust')}`],
  //   input: ['#forge:dusts/silver', '#forge:dusts/gold'],
  // },
  {
    output: [`2x ${TF("lumium_glass")}`],
    input: ["#forge:dusts/lumium", TF("obsidian_glass", 2)],
  },
  {
    output: [`2x ${TF("signalum_glass")}`],
    input: ["#forge:dusts/signalum", TF("obsidian_glass", 2)],
  },
  {
    output: [`2x ${TF("constantan_dust")}`],
    input: ["#forge:dusts/copper", "#forge:dusts/nickel"],
  },
  {
    output: [`4x ${TF("lumium_dust")}`],
    input: [
      "#forge:dusts/silver",
      "3x #forge:dusts/tin",
      "#forge:dusts/glowstone",
    ],
  },
  {
    output: [TF("cured_rubber", 4)],
    input: ["#forge:dusts/sulfur", `2x ${TF("rubber")}`],
  },
  {
    output: [TF("bronze_dust", 4)],
    input: ["#forge:dusts/tin", `3x #forge:dusts/copper`],
  },
  {
    output: [TF("obsidian_glass", 2)],
    input: ["#forge:dusts/quartz", "#forge:obsidian", "#forge:sand"],
  },
  {
    output: [TF("invar_dust", 3)],
    input: ["#forge:dusts/iron", "#forge:obsidian", "#forge:sand"],
  },
  {
    output: [TF("enderium_dust", 2)],
    input: [
      "#forge:dusts/diamond",
      "3x #forge:dusts/lead",
      "2x #forge:dusts/ender_pearl",
    ],
  },
  {
    output: [`4x ${RS("quartz_enriched_iron")}`],
    input: ["#forge:dusts/quartz", "3x #forge:dusts/iron"],
  },
  {
    output: [TF("enderium_glass", 2)],
    input: ["#forge:dusts/enderium", TF("obsidian_glass", 2)],
  },
  {
    output: [TF("diamond_dust")],
    input: [TF("earth_charge"), MC("diamond")],
  },

  {
    output: [MC("prismarine_shard")],
    input: [TF("earth_charge"), MC("prismarine")],
  },

  {
    output: [MC("prismarine_shard")],
    input: [TF("earth_charge"), MC("prismarine_bricks")],
  },

  {
    output: [TF("lapis_dust")],
    input: [TF("earth_charge"), MC("lapis_lazuli")],
  },

  {
    output: [TF("niter_dust")],
    input: [TF("earth_charge"), TF("niter")],
  },

  {
    output: [TF("sulfur_dust")],
    input: [TF("earth_charge"), TF("sulfur")],
  },

  {
    output: [TF("cinnabar_dust")],
    input: [TF("earth_charge"), TF("cinnabar")],
  },

  {
    output: [TF("ender_pearl_dust")],
    input: [TF("earth_charge"), MC("ender_pearl")],
  },

  {
    output: [TF("quartz_dust")],
    input: [TF("earth_charge"), MC("quartz")],
  },

  {
    output: [TF("emerald_dust")],
    input: [TF("earth_charge"), MC("emerald")],
  },
  {
    output: [TF("apatite_dust")],
    input: [TF("earth_charge"), TF("apatite")],
  },
  {
    output: [TF("signalum_dust", 4)],
    input: [TF("silver_dust"), TF("copper_dust", 3), MC("redstone", 4)],
  },
];

const unremoveable = [TF("lumium_glass"), TF("enderium_dust")];

ServerEvents.recipes((event) => {
  // induction smelter recipes

  // event.remove({ id: "/thermal:machines/smelter.*?create.*?/" });
  // event.remove({ id: "/thermal:machines/smelter.*?/" });
  // event.remove({ id: "/thermal:machines/sawmill.*?/" });
  // event.remove({ id: "/thermal:machines/press/.*?plate/" });
  // event.remove({ id: "/thermal:machines/bottler/.*?/" });
  event.remove({ output: "minecraft:fire_charge" });
  event.remove({ output: "thermal:earth_charge" });
  event.remove({ output: "thermal:ice_charge" });
  event.remove({ output: "thermal:lightning_charge" });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { item: MC("gunpowder") },
      { item: MC("blaze_powder") },
      {
        tag: MC("coals"),
      },
    ],
    results: [{ item: MC("fire_charge") }],
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { item: MC("gunpowder") },
      { item: TF("basalz_powder") },
      {
        tag: MC("coals"),
      },
    ],
    results: [{ item: TF("earth_charge") }],
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { item: MC("gunpowder") },
      { item: TF("blizz_powder") },
      {
        tag: MC("coals"),
      },
    ],
    results: [{ item: TF("ice_charge") }],
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { item: MC("gunpowder") },
      { item: TF("blitz_powder") },
      {
        tag: MC("coals"),
      },
    ],
    results: [{ item: TF("lightning_charge") }],
  });
  event.replaceInput(
    {
      output: "#forge:gears",
    },
    "minecraft:iron_nugget",
    CR("cogwheel")
  );
});
