const f= function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}

f(10,5)

console.log(f(10,5))

const g=new Function("v1","v2","v3","return v1+v2+v3")

console.log(g(10,10,10))