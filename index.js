function add(a,b){
return (a + b)
}
function subtract(a,b){
    return (a - b)
}
function multiply(a,b) {
    return (a * b)
}
function divide(a,b){
    return (a / b)
}

function increment (a){
    return (a + 1)
}

function decrement(a){
    return(a - 1)
}

//function makeInt(a)
function makeInt(a){
 // parseInt()
 //parseInt("0x2328", 10)
//return(a)
return(parseInt(a, 10))
}
//stuck at 
/*function makeInt(a = 0x2328){
return (a = 0)

}*/


function preserveDecimal(a){
//return(a)
return(parseFloat(a, 10))
}