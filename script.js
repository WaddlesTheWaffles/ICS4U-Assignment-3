let test = ambiguouscase(30, 6, 10) //test
console.log(test);

function heronformula(sideA, sideB, sideC) {

    area = 0.25 * Math.sqrt(4 * Math.pow(sideA, 2) * Math.pow(sideB, 2) - Math.pow(Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2), 2));

    return area;
}

function ambiguouscase(angleADegree, sideA, sideB) {

    height = sideB * Math.sin(angleADegree * Math.PI / 180);

    if (angleADegree <= 90) {
        if (sideA < height) {
            return "No Triangle";
        }
        else if (sideA == height) {
            return "Right Triangle"
        }
        else if (sideA > sideB) {
            return "One Triangle"
        }
        else if (sideA > height && sideA < sideB) {
            return "Two Triangle"
        }
        else {
            return "ERROR"
        }
    }
    else if (angleADegree > 90) {
        if (sideA <= sideB) {
            return "No Triangle";
        }
        else if (sideA > sideB) {
            return "One Triangle";
        }
        else {
            return "Error";
        }
    }

}