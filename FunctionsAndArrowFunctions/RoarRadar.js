function roarRadar([speed, area]) {
    let limitSpeed = areaLimitSpeed();
    let overLimitSpeed = speed - limitSpeed;
    let isInSeverity = overLimitSpeed > 0;

    if (isInSeverity) console.log(severityCondition());

    function areaLimitSpeed() {
        switch (area) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }

    function severityCondition() {
        if (overLimitSpeed <= 20) {
            return 'speeding';
        } else if (overLimitSpeed > 20 && overLimitSpeed <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}

roarRadar([200, 'motorway']);