let array = [10, 7, 8, 9, 1, 5];
function quickSort(arr, inicio, fim){
    if (inicio < fim){
        let indiceParticao = particionar(arr, inicio, fim);
        quickSort(arr, inicio, indiceParticao - 1);
        quickSort(arr, indiceParticao + 1, fim);
    }
}
function particionar(arr, inicio, fim){
    let pivo = arr [fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++){
        if (arr[j] < pivo){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[fim]] = [arr[fim], arr[i+1]];
    return i + 1;
}
console.log("array original :", array);
quickSort(array, 0, array.length - 1);
console.log("array ordenado :", array);