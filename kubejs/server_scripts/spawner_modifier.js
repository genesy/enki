ServerEvents.recipes((event) => {
  const recipes = [
    {
      id: "apotheosis:spawner/no_ai",
    },
    {
      id: "apotheosis:spawner/no_ai_inverted",
    },
    {
      id: "apotheosis:spawner/ignore_players",
    },
    {
      id: "apotheosis:spawner/ignore_players_inverted",
    },
    {
      id: "apotheosis:spawner/ignore_conditions",
    },
    {
      id: "apotheosis:spawner/ignore_conditions_inverted",
    },
    {
      id: "apotheosis:spawner/ignore_light",
    },
    {
      id: "apotheosis:spawner/ignore_light_inverted",
    },
    {
      id: "apotheosis:spawner/max_nearby",
    },
    {
      id: "apotheosis:spawner/max_nearby_inverted",
    },
    {},
    {
      id: "apotheosis:spawner/min_delay_inverted",
    },
    {
      id: "apotheosis:spawner/spawn_count",
    },
    {
      id: "apotheosis:spawner/spawn_count_inverted",
    },
    {
      id: "apotheosis:spawner/player_range",
    },
    {
      id: "apotheosis:spawner/player_range_inverted",
    },
    {
      id: "apotheosis:spawner/spawn_range",
    },
    {
      id: "apotheosis:spawner/spawn_range_inverted",
    },
  ];

  [
    "no_ai",
    "no_ai_inverted",
    "max_nearby",
    "min_delay",
    "max_delay",
    "spawn_count",
  ].forEach((id) => {
    event.remove({
      id: `apotheosis:spawner/${id}`,
      type: "apotheosis:spawner_modifier",
    });
  });

  recipes.forEach((recipe) => {
    recipe.type = "apotheosis:spawner_modifier";
    recipe.conditions = [{ type: "apotheosis:module", module: "spawner" }];
    event.remove({ id: recipe.id, type: recipe.type });
  });
});
