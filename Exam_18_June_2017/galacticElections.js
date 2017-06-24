function solve(inputSystems) {
    let systems = new Map();
    let candidates = new Map();
    let candidateWinningAreas = new Map();

    for (let system of inputSystems) {
        let systemName = system['system'];
        let candidate = system['candidate'];
        let votes = system['votes'];

        if (!systems.has(systemName)) {
            systems.set(systemName, new Map());
        }

        if (!systems.get(systemName).has(candidate)) {
            systems.get(systemName).set(candidate, 0);
        }

        let currentVotes = systems.get(systemName).get(candidate);
        systems.get(systemName).set(candidate, currentVotes += votes);
    }

    for (let system of systems) {
        let sortedCandidates = [...system[1]].sort((a, b) => b[1] - a[1]);
        let winner = sortedCandidates[0][0];

        if (!candidates.has(winner)) {
            candidates.set(winner, 0);
            candidateWinningAreas.set(winner, new Map());
        }

        let systemVotes = 0;
        for (let candidateVote of system[1]) {
            systemVotes += candidateVote[1];
        }

        let candidateVotes = candidates.get(winner);

        candidates.set(winner, candidateVotes += systemVotes);
        candidateWinningAreas.get(winner).set(system[0], systemVotes);
    }

    let candidatesDescending = [...candidates].sort((a, b) => b[1] - a[1]);
    let [firstCandidate, firstCandidateVotes] = candidatesDescending[0];


    let allVotes = 0;
    for (let [canVotes, votes] of candidates) {
        allVotes += votes;
    }

    if (firstCandidateVotes == allVotes) {
        console.log(`${firstCandidate} wins with ${firstCandidateVotes} votes`);
        console.log(`${firstCandidate} wins unopposed!`)
    } else if (firstCandidateVotes > allVotes / 2) {
        let [secondCandidate, secondCandidateVotes] = candidatesDescending[1];
        console.log(`${firstCandidate} wins with ${firstCandidateVotes} votes`);
        console.log(`Runner up: ${secondCandidate}`);

        let sortedWinningSystems = [...candidateWinningAreas.get(secondCandidate)]
            .sort((a, b) => b[1] - a[1]);

        for (let [systemName, systemVotes] of sortedWinningSystems) {
            console.log(`${systemName}: ${systemVotes}`);
        }
    } else {
        let [secondCandidate, secondCandidateVotes] = candidatesDescending[1];
        let firstCandidatePercent = Math.floor(firstCandidateVotes / allVotes* 100) ;
        let secondCandidatePercent = Math.floor(secondCandidateVotes / allVotes* 100) ;
        console.log(`Runoff between ${firstCandidate} with ${firstCandidatePercent}% and ${secondCandidate} with ${secondCandidatePercent}%`);
    }
}

solve([{system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
    {system: 'Tau', candidate: 'Space Cow', votes: 100},
    {system: 'Theta', candidate: 'Space Cow', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 75},
    {system: 'Omicron', candidate: 'Flying Shrimp', votes: 50},
    {system: 'Omicron', candidate: 'Octocat', votes: 75}]
);