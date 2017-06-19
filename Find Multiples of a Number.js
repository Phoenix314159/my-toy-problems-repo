let findMultiples = (int,limit) => {
    const arr = [];
    for(let i = limit; i >= int; i--){
        if (i % int === 0){
            arr.push(i);
        }
    }
    return arr.reverse();
}
