//Exercicio 1
let map = new Map();
map.set('arr1', [1, 2, 3]);
map.set('arr2', [2, 3, 4]);

console.log(map);





//Exercicio 2
function diferencaSimetrica(set1, set2) {
    var diferenca = new Set(set1);
    for (var num of set2) {
        if (diferenca.has(num)) {
            diferenca.delete(num);
        } else {
            diferenca.add(num);
        }
    }
    return diferenca;
}

var set1 = new Set([1, 2, 3]),
    set2 = new Set([2, 4, 6]);

diferencaSimetrica(set1, set2);

