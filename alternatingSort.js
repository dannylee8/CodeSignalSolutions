function alternatingSort(a) {
    let b = [];
    let k = 0;
    let j = a.length - 1;
    
    for (let i = 0 ; i < a.length; i++) {
        b[i] = i % 2 == 0 ? a[k++] : a[j--];
    }
        
    for (i = 0; i < b.length - 1; i++) {
        if (b[i] >= b[i+1]) return false
    }
    
    return true;
}
