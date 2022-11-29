ServerEvents.recipes((event) => {
  const stones = [
    "veridium",
    "crimsite",
    "asurine",
    "ochrum",
    "scoria",
    "scorchia",
  ];
  event.remove({
    type: "create:crushing",
    input: "#create:stone_types/asurine",
  });
  event.remove({
    type: "create:crushing",
    input: "create:asurine",
  });
  event.remove({
    type: "create:crushing",
    input: "#create:stone_types/veridium",
  });
  event.remove({
    type: "create:crushing",
    input: "create:veridium",
  });
  event.remove({
    type: "create:crushing",
    input: "#create:stone_types/ochrum",
  });
  event.remove({
    type: "create:crushing",
    input: "create:ochrum",
  });
  event.remove({
    type: "create:crushing",
    input: "#create:stone_types/crimsite",
  });
  event.remove({
    type: "create:crushing",
    input: "create:crimsite",
  });

  stones.forEach((stone) => {
    event.custom({
      type: "create_mechanical_extruder:extruding",
      ingredients: [
        { fluid: "minecraft:lava", amount: 1000 },
        { fluid: "water", amount: 1000 },
      ],
      catalyst: { item: CR(stone) },
      result: { item: CR(stone) },
    });
  });
});
