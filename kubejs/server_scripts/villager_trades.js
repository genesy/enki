MoreJSEvents.villagerTrades((event) => {
  const profession = "librarian";
  const level = 1;
  const input = ["minecraft:cobblestone", "64x minecraft:diamond"];
  const output = "minecraft:elytra";
  /**
   * Adds a trade to the given profession.
   * - `profession`: The profession to add the trade to.
   * - `level`: The level, the villager needs to offer the trade.
   * - `input`: The input items for the trade. You can use a single item or an array with two items.
   * - `output`: The output items for the trade.
   */
  // const trade = event.addTrade(profession, level, input, output);
  event.removeVanillaTrades("librarian");
  event.removeVanillaTrades("librarian");

  // event.removeTrades({
  //   firstItem: "minecraft:paper",
  //   secondItem: "",
  //   outputItem: "minecraft:emerald",
  // });

  event.removeTrades({
    firstItem: "minecraft:emerald",
    secondItem: "minecraft:book",
    outputItem: Item.of("minecraft:enchanted_book"),
  });
  event.removeTrades({
    firstItem: Item.of("minecraft:emerald"),
    secondItem: "",
    outputItem: Item.of("minecraft:bookshelf"),
  });
  event.removeTrades({
    firstItem: "",
    secondItem: "",
    outputItem: Item.of("minecraft:paper"),
  });

  // `addTrade` return the trade to set optional data.
  // trade.maxUses(number); // Sets the maximum amount of uses for the trade.
  // trade.villagerExperience(number); // Sets the amount of villager experience the trade gives.
  // trade.priceMultiplier(number); // Sets the price multiplier for the trade.
  // // trade.transform((offer, entity, random) => { ... }); // Transforms the offer when it's generated.
});
