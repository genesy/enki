ServerEvents.recipes((event) => {
  const colors = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
  ];
  colors.forEach((color) => {
    event.replaceInput(
      { output: `elevatorid:elevator_${color}` },
      MC(`ender_pearl`),
      "reliquary:nebulous_heart"
    );
    event.replaceInput(
      { output: `elevatorid:elevator_${color}` },
      MC(`${color}_wool`),
      TF(`${color}_rockwool`)
    );
  });
});
