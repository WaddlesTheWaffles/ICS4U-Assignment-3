

const heronButton = document.getElementById("heroncalcbutton");
heronButton.addEventListener('click', heronformula);

const ambiguousButton = document.getElementById("ambiguouscalcbutton");
ambiguousButton.addEventListener('click', ambiguouscase)

const newtonButton = document.getElementById("newtoncalcbutton");
newtonButton.addEventListener('click', newtonmethod)

const polynomialButton = document.getElementById("polynomialcalcbutton");
polynomialButton.addEventListener('click', polynomialfunction)

function heronformula() {

    let sideA = parseFloat(document.getElementById("sideah").value);
    let sideB = parseFloat(document.getElementById("sidebh").value);
    let sideC = parseFloat(document.getElementById("sidech").value);
    const resultsHeron = document.getElementById("trianglearea");

    let area = 0.25 * Math.sqrt(4 * Math.pow(sideA, 2) * Math.pow(sideB, 2) - Math.pow(Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2), 2));

    resultsHeron.value = area;
}

function ambiguouscase() {

    let angleA = parseFloat(document.getElementById("anglea").value)
    let sideA = parseFloat(document.getElementById("sideaam").value)
    let sideB = parseFloat(document.getElementById("sidebam").value)
    const resultsAmbiguous = document.getElementById("triangletype");

    height = Math.round(sideB * Math.sin(angleA * Math.PI / 180));

    if (angleA <= 90) {
        if (sideA < height) {
            resultsAmbiguous.value = "No Triangle";
        }
        else if (sideA == height) {
            resultsAmbiguous.value = "Right Triangle";
        }
        else if (sideA > sideB) {
            resultsAmbiguous.value = "One Triangle";
        }
        else if (sideA > height && sideA < sideB) {
            resultsAmbiguous.value = "Two Triangle";
        }
        else {
            resultsAmbiguous.value = "ERROR";
        }
    }
    else if (angleA > 90) {
        if (sideA <= sideB) {
            resultsAmbiguous.value = "No Triangle";
        }
        else if (sideA > sideB) {
            resultsAmbiguous.value = "One Triangle";
        }
        else {
            resultsAmbiguous.value = "Error";
        }
    }

}

function newtonmethod() {

    let rootguess = document.getElementById("rootguess").value;
    const resultsNewton = document.getElementById("rootaprox");

    let x0 = rootguess, x1, f, f1;

    while (true) {

        f = 6 * Math.pow(x0, 4) - 13 * Math.pow(x0, 3) - 18 * Math.pow(x0, 2) + 7 * x0 + 6;
        f1 = 24 * Math.pow(x0, 3) - 39 * Math.pow(x0, 2) - 36 * x0 + 7

        x1 = x0 - f / f1;

        if (x0 - x1 < 0.00001) {
            break;
        }
        else {
            x0 = x1;
        }
    }

    resultsNewton.value = x1;
}

function polynomialfunction() {

    let coefficentsAsStr = document.getElementById("coefficents").value;
    let exponentsAsStr = document.getElementById("exponents").value;
    let xValueAsStr = document.getElementById("xvalue").value;
    const polynomialFunction = document.getElementById("polynomialfunction");
    const polynomialEvaluation = document.getElementById("polynomialevaluation");

    let coefficents = coefficentsAsStr.split(" ");
    let exponents = exponentsAsStr.split(" ");
    let polynomialFullFunction = "f(x) = ";

    for (i = 0; i < coefficents.length; i++) {
        let tempValue = parseFloat(coefficents[i]);

        if (tempValue < 0) {
            polynomialFullFunction += coefficents[i] + "x^" + exponents[i];
        }
        else if (i != 0) {
            polynomialFullFunction += "+" + coefficents[i] + "x^" + exponents[i];
        }
        else {
            polynomialFullFunction += coefficents[i] + "x^" + exponents[i];
        }
    }

    let xValue = parseFloat(xValueAsStr);
    let yValue = 0;

    for (i = 0; i < coefficents.length; i++) {

        yValue += parseFloat(coefficents[i]) * Math.pow(xValue, parseFloat(exponents[i]));

    }
    let functionXCaculated = "f(" + xValue + ") = " + yValue;

    polynomialFunction.value = polynomialFullFunction;
    polynomialEvaluation.value = functionXCaculated;
}