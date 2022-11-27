StartupEvents.registry("block", (event) => {
  const blocks = [
    "Iron",
    "Gold",
    "Zinc",
    "Copper",
    "Tin",
    "Silver",
    "Lead",
    "Nickel",
  ];

  blocks.forEach((block) => {
    event
      .create(`${block.toLowerCase()}_block`)
      .material("metal")
      .hardness(2)
      .displayName(`${block} Node Block`)
      .tagBlock("create:non_movable") // Make it require an iron or higher level tool on 1.18.2+
      .requiresTool(true); // Make it require a tool to drop ay loot
  });
});
