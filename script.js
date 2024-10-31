let test = newtonmethod() //for testing


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

function newtonmethod() {

}

function polynomialfunction(coefficentsAsStr, exponentsAsStr, xValueAsStr) {

    let coefficents = coefficentsAsStr.split(" ");
    let exponents = exponentsAsStr.split(" ");

    let polynomialFunction = "f(x) = ";

    for (i = 0; i < coefficents.length; i++) {
        let tempValue = parseFloat(coefficents[i]);

        if (tempValue < 0) {
            polynomialFunction += coefficents[i] + "x^" + exponents[i];
        }
        else if (i != 0) {
            polynomialFunction += "+" + coefficents[i] + "x^" + exponents[i];
        }
        else {
            polynomialFunction += coefficents[i] + "x^" + exponents[i];
        }
    }

    let xValue = parseFloat(xValueAsStr);
    let yValue = 0;

    for (i = 0; i < coefficents.length; i++) {
        let tempValue = parseFloat(coefficents[i]);

        yValue += parseFloat(coefficents[i]) * Math.pow(xValue, parseFloat(exponents[i]));

    }

    let functionXCaculated = "f(" + xValue + ") = " + yValue;

    return [polynomialFunction, functionXCaculated]
}