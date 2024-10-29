
let test = heronformula(2, 3, 4) //test
console.log(test);

function heronformula(sidea, sideb, sidec) {

    area = 0.25 * (Math.sqrt((4 * (Math.pow(sidea, 2)) * (Math.pow(sideb, 2))) - (Math.pow(((Math.pow(sidea, 2)) + (Math.pow(sideb, 2)) - (Math.pow(sidec, 2))), 2))));
    //If side a is => b+c than it doesn't work
    return area;
}