function solve(arr) {
    let systems = arr.map(r => r.split(' | ').filter(e => e != ''));

    let systemsMap = new Map();

    for (let [system, component, subcomponent] of systems) {
        if (!systemsMap.has(system)) {
            systemsMap.set(system, new Map());
        }

        if (!systemsMap.get(system).has(component)) {
            systemsMap.get(system).set(component, new Set());
        }

        systemsMap.get(system).get(component).add(subcomponent);
    }

    let sortedSystemMap = [...systemsMap].sort(sortSystem);

    for (let [system, components] of sortedSystemMap) {
        console.log(system);

        let sortedComponents = [...components].sort(sortComponents);

        for (let [component, subcomponents] of sortedComponents) {
            console.log(`|||${component}`);

            for (let subcomponent of subcomponents) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }

    function sortSystem(a, b) {
        let firstSystemComponents = [...a[1]].length;
        let secondSystemComponents = [...b[1]].length;

        if (firstSystemComponents != secondSystemComponents) {
            return secondSystemComponents - firstSystemComponents;
        } else {
            return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
        }
    }

    function sortComponents(a, b) {
        let aSubComponentsCount = [...a[1]].length;
        let bSubComponentsCount = [...b[1]].length;
        return bSubComponentsCount - aSubComponentsCount;
    }
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);
