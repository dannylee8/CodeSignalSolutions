function mutateTheArray(n, a) {
    let b = [];
    
    if (n == 1) return a;
    
    for (let i=0; i < n; i++) {
        if (i == 0) {
            b[0] = 0 + a[i] + a[i+1];
        } else if (i == n - 1) {
            b[i] = a[i-1] + a[i] + 0;
        } else {
            b[i] = a[i-1] + a[i] + a[i+1];
        }
    }
    return b;
}
