function heroicInventory(data) {
    let heroes = [];

    data.forEach(hero => {
        const [name, levelStr, inventory] = hero.split(/\s*\/\s*/g);
        const level = +levelStr;
        const items = inventory.split(/\s*,\s*/g);

        heroes.push({name, level, items});
    })

    console.log(JSON.stringify(heroes));
}