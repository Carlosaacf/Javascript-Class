const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=['1','2','3','4','5'].map(converterInt)


console.log(num)

let num2=['1','2','3','4','5'].map(dobrar)
console.log(num2)




/*const el=document.getElementsByTagName("div")
const val=Array.prototype.map.call(el,({innerHTML})=> innerHTML)
console.log(val)



let el=document.getElementsByTagName("div")
el=[...el]

console.log(el)
el.map((e,i )=> {
    e.innerHTML="CFB CURSOS"
})


const cursos=["HTML","CSS","JAVASCRIPT","PHP","REACT"]
cursos.map((elementos, indice)=>{
    console.log("CURSO:" + elementos + " Posição do Curso " + indice)
})

let c=cursos.map((el,i)=>{
    return el
})

console.log("")
console.log(c)

let d=cursos.map((el,i)=>{
    return "<div>" + el + "</div>"
})

console.log(d) */
