PlayerEvents.loggedIn((event) => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has("starting_items")) {
    // Add the stage
    event.player.stages.add("starting_items");
    event.player.give(GUIDEBOOK);
    event.player.give("comforts:sleeping_bag_white");
    event.player.give(MC("bed"));
    event.player.give(MC("stone_sword"));
    event.player.give(EP("wood_paxel"));
    event.player.give("crafting_on_a_stick:crafting_table");
    event.player.give("16x minecraft:bread");
    event.player.give("4x minecraft:torch");
  }
});
