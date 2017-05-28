function tripLength([x1, y1, x2, y2, x3, y3]) {
    let pointA = {x: x1, y: y1};
    let pointB = {x: x2, y: y2};
    let pointC = {x: x3, y: y3};

    let ABdistance = distanceBetween2Points(pointA, pointB);
    let BCdistance = distanceBetween2Points(pointB, pointC);
    let CAdistance =distanceBetween2Points(pointC, pointA);

    let shortestPath = Math.min(ABdistance + BCdistance, BCdistance + CAdistance, ABdistance + CAdistance);

    if(shortestPath == ABdistance + BCdistance)
        return `1->2->3: ${ABdistance + BCdistance}`;
    if(shortestPath == ABdistance + CAdistance)
        return `2->1->3: ${ABdistance + CAdistance}`;
    if(shortestPath == CAdistance + BCdistance)
        return `1->3->2: ${CAdistance + BCdistance}`;


    function distanceBetween2Points(pointA, pointB) {
        let distance = Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
        return distance;
    }
}

console.log(tripLength([0, 0, 2, 0, 4, 0]));