let fusc = n => {
    if (n < 2)
        return n;
    if (n % 2 === 0)
        return fusc(n / 2);
    const N = (n - 1) / 2;
    return fusc(N) + fusc(N + 1);
}
