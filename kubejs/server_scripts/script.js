// priority: 0

let KJ = (id, x) => MOD("kubejs", id, x);
console.info(
  "Hello, World! (You will see this line every time server resources reload)"
);

ServerEvents.recipes((event) => {
  // Change recipes here
  global.itemIdsToRemove.forEach((id) => {
    event.remove({ output: id });
  });

  event.remove({ id: "/thermal:machines/press/.*/" });
  // event.remove({ input: "thermal:crafting/dies" });
  // trading(event);
});

ServerEvents.tags("item", (event) => {
  global.trades.forEach((element) => {
    event.get("forge:trade_cards").add(`kubejs:trade_card_${element}`);
  });

  global.professions.forEach((element) => {
    event
      .get("forge:profession_cards")
      .add(`kubejs:profession_card_${element}`);
  });
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')

  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});

function trading(event) {
  let trade = (card_id, ingredient, output) => {
    event.custom({
      type: "thermal:press",
      ingredients: [
        Ingredient.of(ingredient).toJson(),
        Ingredient.of(card_id).toJson(),
      ],
      result: [Item.of(output).toJson()],
      energy: 1000,
    });
  };

  global.trades.forEach((element) => {
    if (global.transactions[element])
      global.transactions[element].forEach((transaction) => {
        trade(KJ("trade_card_" + element), transaction.in, transaction.out);
      });
  });

  global.professions.forEach((element) => {
    if (global.transactions[element])
      global.transactions[element].forEach((transaction) => {
        trade(
          KJ("profession_card_" + element),
          transaction.in,
          transaction.out
        );
      });
  });
}
