let res = document.getElementById('res')
let res2 = document.getElementById('res2')
let res3 = document.getElementById('res2')
let test = document.getElementById('test')
let soma = document.getElementById('soma')
let num = [1, 2, 3, 4, 5]

// array: exemplo
// let nome = ['Pedro', 'João', 'Maria']
// let idade = [55, 44, 33]
// let peso = [80, 75, 60]

soma.addEventListener('click', ()=>{
    let soma_elementos = 0
    for(i=0;i<5;i++){
        if((num[i] % 2) == 0){
            soma_elementos = soma_elementos + num[i]
        } 
    }
    res.innerHTML = soma_elementos
})
dimi.addEventListener('dblclick', ()=>{
    let dimi_elementos = 0
    for(i=0;i<5;i++){
        if((num[i] % 2) == 1){
            dimi_elementos = dimi_elementos + num[i]
        } 
    }
    res2.innerHTML = dimi_elementos
})
test.addEventListener('click', ()=>{
    let soma = 0
    for(i=0;i<num.length;i++){
        if((i % 2) == 0){
            soma = soma = (num[i]*3)+i
        }else{
            soma = soma = ((num[i]*3)+i) + ((num[i]*2)-i)
        }
    }
    res3.innerHTML = soma
})