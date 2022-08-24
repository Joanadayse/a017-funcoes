function imprimirNome (nome){
    console.log(`Ola ${nome}`)
}
imprimirNome("joana")




// function tabuada (...args){
//     console.log(`Argumentos que foram passados: ${args}`) 
//     for (let valor of args) {
//                 console.log(`${valor} * 6 = ${valor*6} `)
//             } 

// }
// tabuada(1,2,3,4,5,6,7,8,9,10)


function imprimaTabuada(tabuada){
   const novaTabuada = []
 
//    for( let i = 1; i <= 10; i++){
//     console.log(`${6} x ${i} = ${6*i}`)
//    }
    for( let valor of tabuada){
        console.log(`${6} x ${valor} = ${6*valor}`)
    }
}
imprimaTabuada([1,2,3,4,5,6,7,8,9,10])



const multip = (n1,n2)=>{
    return n1*n2
}

const tabuada = multip(2,6)
console.log(tabuada)