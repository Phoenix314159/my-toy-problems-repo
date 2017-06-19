let squareSum = numbers => {
    return numbers.map(a => {
        return a * a;
    }).reduce((c,d) => {
        return c + d;
    });
}
