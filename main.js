// limpiar
document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#display").value = "";
})



// funcion atras
const backSpace = () =>{
    const num = document.querySelector("#display").value.slice(0, -1);
    document.querySelector("#display").value = num;
}

// funcion 1
const one = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "1";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "1";
    }
}


// funcion 2
const two = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "2";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "2";
    }
}


// funcion 3
const three = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "3";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "3";
    }
}


// funcion 4
const four = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "4";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "4";
    }
}


// funcion 5
const five = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "5";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "5";
    }
}


// funcion 6
const six = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "6";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "6";
    }
}



// funcion 7
const seven = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "7";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "7";
    }
}


// funcion 8
const eight = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "8";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "8";
    }
}


// funcion 9
const nine = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "9";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "9";
    }
}

// funcion 0
const zero = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "0";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "0";
    }
}



// funcion 0
const point = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = ".";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + ".";
    }
}