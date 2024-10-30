let test = ambiguouscase(30, 10, 16) //test
console.log(test);

function heronformula(sideA, sideB, sideC) {

    area = 0.25 * Math.sqrt(4 * Math.pow(sideA, 2) * Math.pow(sideB, 2) - Math.pow(Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2), 2));

    return area;
}

function ambiguouscase(angleADegree, sideA, sideB) {

angleARadian = angleADegree * Math.PI/180;

return angleARadian;
}