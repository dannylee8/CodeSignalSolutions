function countTinyPairs(a, b, k) {
    let tinyPairs = 0;
    
    for (let i = 0; i < a.length; i++) {
        let concatNum = a[i].toString() + b[b.length - 1 - i].toString();
        if (Number(concatNum) < k) {
            tinyPairs++;
        }
    }
    return tinyPairs;
}
