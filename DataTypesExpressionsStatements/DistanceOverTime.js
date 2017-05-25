function distanceOverTime(arr) {
    let speedOne = Number(arr[0]);
    let speedTwo = Number(arr[1]);
    let time = Number(arr[2]) / 3600;

    let distanceOne = speedOne * time;
    let distanceTwo = speedTwo * time;

    let delta = Math.abs(distanceOne - distanceTwo)* 1000;

    console.log(delta);
}

distanceOverTime([5, -5, 40])