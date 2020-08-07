function meanGroups(a) {
    
    let obj = {};
    
    for (let i=0; i < a.length; i++) {
        // index - mean
        a[i] = a[i].reduce((x,y) => x+y)/a[i].length;
        console.log(a[i])
    }
    
    for (let i=0; i < a.length; i++) {
        if (!obj[a[i]]) {
            obj[a[i]] = [i];
        } else {
            obj[a[i]].push(i);
        }
    }
    console.log(obj)
    return Object.values(obj);
}
