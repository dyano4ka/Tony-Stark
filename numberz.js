function shownumberz() {
    const numberz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let even = "";
    for (let z = 1; z < numberz[15-1]; z++) {
        if (z % 2 == 0) {
            even += z + "<br>";
        }
        

    }

      document.getElementById("zenumberz").innerHTML = "The even numbers are: <br>" + even;
}

function fourseasonz() {
    let season = "";
    switch (new Date('2022-09-15').getMonth() + 1) {
        case 12:
        case 1:
        case 2: 
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5: 
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Fall";
            break;
        default:
            season = "nope";
    }
    document.getElementById("zeseasonz").innerHTML = "Current season is: " + season;

}