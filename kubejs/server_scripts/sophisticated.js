// priority: 0

ServerEvents.recipes((event) => {
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
  ];

  ssupgrades.forEach((upgrade) => {
    event.remove({ output: SS(upgrade) });
  });

  [
    SB("inception_upgrade"),
    SB("xp_pump_upgrade"),
    SB("feeding_upgrade"),
    SB("advanced_feeding_upgrade"),
    SB("tool_swapper_upgrade"),
    SB("advanced_tool_swapper_upgrade"),
  ].forEach((x) => {
    event.remove({ output: x });
  });

  event.shapeless(SS("barrel"), [MC("barrel"), MC("redstone_torch")]);

  function makeUpgradeRecipe(tier, M, X) {
    event.remove({ output: SS(`${tier}_tier_upgrade`) });
    event.shaped(SS(`${tier}_tier_upgrade`), ["MMM", "MXM", "MMM"], {
      M: M,
      X: X,
    });
  }

  makeUpgradeRecipe("basic", "#forge:stone", SS("upgrade_base"));
  makeUpgradeRecipe(
    "basic_to_iron",
    "#forge:ingots/iron",
    SS("basic_tier_upgrade")
  );
  makeUpgradeRecipe(
    "iron_to_gold",
    "#forge:ingots/gold",
    SS("basic_to_iron_tier_upgrade")
  );
  makeUpgradeRecipe(
    "gold_to_diamond",
    "#forge:gems/diamond",
    SS("iron_to_gold_tier_upgrade")
  );
  makeUpgradeRecipe(
    "diamond_to_netherite",
    "#forge:nuggets/netherite",
    SS("gold_to_diamond_tier_upgrade")
  );
});
