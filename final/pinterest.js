var button= document.getElementbById("button")
var inicio2 = document.getElementById("inicio2")
let contador= 0


function cambio(){
    inicio2.classList.remove("inicio1");
        

}

const arreglo =  [
    {
        email: 'max@o.com',
        contrasenia: "hola",
        saldo: 180
    },
    {
        email: 'mAx@o.com',
        contrasenia: "Hola",
        saldo: 170
    },
    {
        email: 'max.winicki@cimort.edu.mx',
        contrasenia: "hola",
        saldo: 150
    }
]
 

function login(){
    const arreglo =  [
        {
            email: 'max@o.com',
            contrasenia: "hola",
            saldo: 180
        },
        {
            email: 'mAx@o.com',
            contrasenia: "Hola",
            saldo: 170
        },
        {
            email: 'max.winicki@cimort.edu.mx',
            contrasenia: "hola",
            saldo: 150
        }
    ]
     
    let email =document.getElementById("email").value
    let contrasenia = document.getElementById("password").value
    console.log(arreglo[1].email)
    for(i=0;i<=arreglo.length;i++){
        if(arreglo[i].email==email && arreglo[i].contrasenia==contrasenia){
            window.location.replace("index1.html")
        }
    } console.log("error")
    

    
}

function inicio(){
    document.getElementById("inicio2").classList.remove("inicio1")
}

function salir(){
    document.getElementById("inicio2").classList.add("inicio1")
}

