ServerEvents.recipes((event) => {
  //event.recipes.createsifterSifting(output, input[]) //EXAMPLE
  // event.recipes.createMechanicalExtruderExtruding("minecraft:sand", [
  // 	"minecraft:cobblestone",
  // 	"minecraft:stone",
  // ]);

  const metals = [
    {
      block: "minecraft:iron_block",
      nugget: "minecraft:iron_nugget",
      catalyst: "kubejs:iron_block",
    },
    {
      block: "minecraft:gold_block",
      nugget: "minecraft:gold_nugget",
      catalyst: "kubejs:gold_block",
    },
    {
      block: "minecraft:copper_block",
      nugget: "create:copper_nugget",
      catalyst: "kubejs:copper_block",
    },
    {
      block: "create:zinc_block",
      nugget: "create:zinc_nugget",
      catalyst: "kubejs:zinc_block",
    },
    {
      block: "thermal:tin_block",
      nugget: "thermal:tin_nugget",
      catalyst: "kubejs:tin_block",
    },
    {
      block: "thermal:silver_block",
      nugget: "thermal:silver_nugget",
      catalyst: "kubejs:tin_block",
    },
  ];

  metals.forEach((metal) => {
    event.custom({
      type: "create_mechanical_extruder:extruding",
      ingredients: [{ item: metal.block }, { item: metal.block }],
      catalyst: { item: metal.catalyst },
      result: { item: metal.nugget },
    });
  });

  const extruderId = "create_mechanical_extruder:mechanical_extruder";
  event.remove({ id: "thermal:device_rock_gen" });
  event.remove({ id: extruderId });

  createMechanicalCrafting(
    extruderId,
    // prettier-ignore
    [
			" A ",
			" A ",
			"BMB",
			"XXX",
		],
    {
      A: "create:piston_extension_pole",
      B: "create_crystal_clear:andesite_glass_casing",
      M: "thermal:machine_frame",
      X: MC("iron_block"),
    },
    event
  );
  // event.custom({
  //   type: "create:mechanical_crafting",
  //   acceptMirrored: true,
  //   key: {
  //     X: {
  //       item: "minecraft:iron_block",
  //     },
  //     B: {
  //       item: "create_crystal_clear:andesite_glass_casing",
  //     },
  //     M: {
  //       item: "thermal:machine_frame",
  //     },
  //     A: {
  //       item: "create:piston_extension_pole",
  //     },
  //   },
  //   // prettier-ignore
  //   pattern: [
  // 		" A ",
  // 		" A ",
  // 		"BMB",
  // 		"XXX",
  // 	],
  //   result: {
  //     item: extruderId,
  //   },
  // });
});
