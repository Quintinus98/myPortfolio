// function solution(s) {
//     let a = 0;
//     let b = 1;
//     let c = 2;
    
//     let p = 1;
//     let q = 2;
//     let r = s.length - 1;
    

    
//     let count = 0;
    
//     for (let i = 0; i < 10; i++) {
//         let ab = s.slice(a, p).concat(s.slice(b, q));
//         let bc = s.slice(b, q).concat(s.slice(c, r));
//         let ca = s.slice(c, r).concat(s.slice(a, p));
        
//         console.log(ab);
//         console.log(bc);
//         console.log(ca);
//         console.log("\n");
        
//         if (ab !== bc && bc !== ca && ca !== ab) {
//             count += 1;
//         }
        
//         if (c <= s.length - 1){
//             c++;
//             q++;
//         }
//         else if ( c === s.length - 1 && b < q) {
//             b++;
//             p++;
//         }
//         else if (p === s.length - 2 && a !== 0){
//             p--;
//             c--;
//             b--;
//             q--;
            
//         }
//         ab = "";
//         bc = "";
//         ca = "";
//     }
    
//     return count;
// }


// console.log(solution('xzxzx')); 


function solutionb(a, k) {
    a.sort(function(a, b){ return b - a })
    
    for (let i = 0; i < a.length; i++){
        let sum = 0;
        for (let j = 0; j < a.length; j++){
            const val = Math.trunc(a[j]/a[i]);
            if (val >= 1){
                sum += val;
            }
        }
        if (sum >= k){
            return a[i];
        }
    }
    
    for (let q = a[a.length - 1]; q > 0; q--){
        let sum = 0;
        for (let j = 0; j < a.length; j++){
            const val = Math.trunc(a[j]/q);
            if (val >= 1){
                sum += val;
            }
        }
        if (sum >= k){
            return q;
        }
    }
    return 1;
}


function solution(a, k) {
    const max = Math.max(...a);
    let right = max;
    let left = 0;
    while (left < right) {
        const mid = (left + right + 1) >> 1;
        let count = 0;
        for (const e of a) {
            count += Math.trunc(e / mid);
        }
        if (count >= k) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

a = [1, 2, 3, 4, 9];
k = 6;
console.log(solution2(a, k));
console.log(1e5);