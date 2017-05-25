function pointInRectangle([x, y, xMin, xMax, yMin, yMax]) {
    let isPointInRect = x >= xMin && x <= xMax && y >= yMin && y <= yMax;
    console.log(isPointInRect ? 'inside' : 'outside')
}

pointInRectangle([8, -1, 2, 12, -3, 3]);