function solve(flights) {
    let airport = new Set();
    let townsStatistics = new Map();
    let townsAirplanes = new Map();

    for (let flight of flights.filter(r=>r!='')) {
        let [planeId, town, passengersCount, action] = flight.split(/\s+/g).filter(e => e != '');
        passengersCount = Number(passengersCount);

        if ((action === 'land' && airport.has(planeId)) ||
            (action === 'depart' && !airport.has(planeId))) {
            continue;
        }

        if (!townsStatistics.has(town)) {
            townsStatistics.set(town, [0, 0]);
            townsAirplanes.set(town, new Set());
        }

        townsAirplanes.get(town).add(planeId);

        //Just manage the airport arrivals/departures planes
        if (action === 'land') {
            airport.add(planeId);
            townsStatistics.get(town)[0] += passengersCount;
        } else {
            airport.delete(planeId);
            townsStatistics.get(town)[1] += passengersCount;
        }
    }

    console.log('Planes left:');
    [...airport].sort((a, b) => a.localeCompare(b)).forEach(p => console.log(`- ${p}`));

    let sortedTowns = [...townsStatistics].sort(sortTowns);

    for (let [town, statistics] of sortedTowns) {
        console.log(town);
        let [arrivals ,departures]= statistics;

        console.log(`Arrivals: ${arrivals}`);
        console.log(`Departures: ${departures}`);

        console.log('Planes:');

        let sortedPlanes = [...townsAirplanes.get(town)].sort((a, b) => a.localeCompare(b));

        for (let plane of sortedPlanes) {
            console.log(`-- ${plane}`)
        }
    }

    function sortTowns(a, b) {
        let aArrivals = a[1][0];
        let bArrivals = b[1][0];
        if (aArrivals != bArrivals) {
            return bArrivals - aArrivals;
        } else {
            return a[0].localeCompare(b[0]);
        }
    }
}


solve([
        "RTA72 London -10 land",
        "RTA#72 Brussels -110 depart",
        "RTA7!2 Warshaw 350 land",
        "RTA72 Riga -201 depart",
        "rta72 riga -13 land",
        "rta Riga -200 depart"
    ]
);