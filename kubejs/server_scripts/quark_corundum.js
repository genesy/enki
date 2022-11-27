// priority: 0

ServerEvents.recipes((event) => {
  const corundums = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "white",
    "black",
  ];
  corundums.forEach((color) => {
    event.shapeless(`quark:${color}_corundum`, [
      `4x quark:${color}_corundum_cluster`,
    ]);
  });
});
