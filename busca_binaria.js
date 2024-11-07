function buscarBinaria(lista, elementoProcurando){
    let inicio = 0;
    let fim = lista.length - 1;
    while (inicio <= fim){
        let meio = Math.floor((inicio + fim) / 2);

        if (lista[meio]=== elementoProcurando){
            return meio + 1;
        }else{
            fim = meio -1;
        }
    }
    return -1;
}
const listaordenada = [1, 3, 5, 7, 9, 11];
const elemento = 7;
const resultado = buscarBinaria(listaordenada, elemento);
if (resultado !== -1){
    console.log(`Elemento encontrado na posição ${resultado}.`);
    
}else{
    console.log("Elemento não encontrado.");
}