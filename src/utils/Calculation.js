let Calculation = cc.Class.extend({
});

Calculation.add = (a, b) => {
    return a + b;
}

Calculation.minus = (a, b) => {
    return a - b;
}

Calculation.multiple = (a, b) => {
    return a * b;
}

Calculation.divide = (a, b) => {
    return a / b;
}

export default Calculation;