function sortSystem(data) {
    let systems = {};

    for (let i = 0; i < data.length; i++) {
        const [system, component, subcomponent] = data[i].split(/\s*\|\s*/)
            .filter(el => {return el;})
            .map(el => {return el.trim();});

        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
            systems[system][component] = [];
            systems[system][component].push(subcomponent)
        } else {
            if (!systems[system].hasOwnProperty(component)) {
                systems[system][component] = [];
                systems[system][component].push(subcomponent);
            } else {
                systems[system][component].push(subcomponent);
            }
        }
    }

    Object.keys(systems).sort()
        .sort((sys1, sys2) => {
        return Object.keys(systems[sys2]).length - Object.keys(systems[sys1]).length;
    }).forEach(sys => {
        console.log(`${sys}`);

        Object.keys(systems[sys]).sort((comp1, comp2) => {
            return Object.keys(systems[sys][comp2]).length - Object.keys(systems[sys][comp1]).length;
        }).forEach(comp => {
            console.log(`|||${comp}`);

            systems[sys][comp].forEach(subcomp => {
                console.log(`||||||${subcomp}`);
            });
        });
    });
}