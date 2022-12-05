function* cores(){
    yield 'vermelho'
    yield 'azul'
    yield 'verde'
    yield 'laranja'
    yield 'rosa'
}
    let itc=cores()

    console.log(itc.next().value)
    console.log(itc.next().value)
    console.log(itc.next().value)
    console.log(itc.next().value)
    console.log(itc.next().value)
    console.log(itc.next().value)

    function* perguntas(){
        const nome=yield 'Qual seu nome?'
        const esporte=yield 'Qual seu esporte favorito?'
        return 'Seu nome é: ' + nome + ', seu esporte favorito é: ' + esporte
    }

    const itp = perguntas()
        console.log(itp.next().value)
        console.log(itp.next("Carlos").value)
        console.log(itp.next("Futebol e Age of Empires ").value)
    


function* contador(){
    let i=0
    while(true){
        yield i++
        if(i>=30){
            yield i++
            break
        }
        
    }
}

const ttt=contador()
for(n of ttt){
console.log(n)
}

