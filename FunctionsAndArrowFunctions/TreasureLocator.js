function locateTreasures(points) {
    let tuvalu = {x1: 1, x2: 3, y1: 1, y2: 3};
    let tokelau = {x1: 8, x2: 9, y1: 0, y2: 1};
    let samoa = {x1: 5, x2: 7, y1: 3, y2: 6};
    let tonga = {x1: 0, x2: 3, y1: 6, y2: 8};
    let cook = {x1: 4, x2: 9, y1: 7, y2: 8};

    for (let i = 0; i < points.length; i += 2) {
        let pointX = Number(points[i]);
        let pointy = Number(points[i + 1]);

        console.log(locate(pointX, pointy));
    }

    function locate(x, y) {
        if (isInIsland(x, y, tuvalu)) {
            return 'Tuvalu';
        } else if (isInIsland(x, y, tokelau)) {
            return 'Tokelau';
        } else if (isInIsland(x, y, samoa)) {
            return 'Samoa';
        } else if (isInIsland(x, y, tonga)) {
            return 'Tonga';
        } else if (isInIsland(x, y, cook)) {
            return 'Cook';
        } else {
            return 'On the bottom of the ocean';
        }
    }

    function isInIsland(x, y, island) {
        let isIn = x >= island.x1 && x <= island.x2 && y >= island.y1 && y <= island.y2;
        return isIn;
    }
}

locateTreasures([4, 2, 1.5, 6.5, 1, 3]);