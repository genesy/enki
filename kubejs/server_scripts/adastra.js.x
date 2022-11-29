ServerEvents.recipes((event) => {
  rocket(1, "steel");
  rocket(2, "desh");
  rocket(3, "ostrum");
  rocket(4, "calorite");

  function rocket(tier, el) {
    const block = AA(`${el}_block`);
    const tank = AA(`${el}_tank`);
    const engine = AA(`${el}_engine`);
    const output = AA(`tier_${tier}_rocket`);
    event.remove({ output: output });
    createMechanicalCrafting(
      output,
      //prettier-ignore
      [
      '  C  ',
      ' B B ',
      ' B B ',
      ' B B ',
      'FTETF',
      'F W F',
    ],
      {
        C: AA("rocket_nose_cone"),
        B: block,
        T: tank,
        E: engine,
        F: AA("rocket_fin"),
        W: AA("nasa_workbench"),
      },
      event
    );
  }
});
