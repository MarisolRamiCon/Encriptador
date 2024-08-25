let texto="";

//logica del juego


function encriptar(){
    let texto_encriptado="";
    texto=document.getElementById('main-texto').value;
    for(i=0;i<texto.length;i++){
        if(texto[i]==="a"){
            texto_encriptado+="ai";
        }else if(texto[i]==="e"){
            texto_encriptado+="enter";
        }
        else if(texto[i]==="i"){
            texto_encriptado+="imes";
        }else if(texto[i]==="o"){
            texto_encriptado+="ober";
        }else if(texto[i]==="u"){
            texto_encriptado+="ufat";
        }else{
            texto_encriptado+=texto[i];
        }
    }

    // Oculta el elemento con id "aside-imagen"
    document.getElementById("aside-imagen").style.display = "none";
    document.getElementById("aside-texto-resultado").innerHTML= texto_encriptado;
    mostrarBoton();
}

function desencriptar(){
    let texto=document.getElementById('main-texto').value;
    let texto_desencriptado = ""; 
    i=0;
    while(i<texto.length){
        if (texto.substring(i).startsWith("ai")) {
            texto_desencriptado += "a";
            i += 2;
        } else if (texto.substring(i).startsWith("enter")) {
            texto_desencriptado += "e";
            i += 5;
        } else if (texto.substring(i).startsWith("imes")) {
            texto_desencriptado += "i";
            i += 4;
        } else if (texto.substring(i).startsWith("ober")) {
            texto_desencriptado += "o";
            i += 4;
        } else if (texto.substring(i).startsWith("ufat")) {
            texto_desencriptado += "u";
            i += 4;
        } else {
            texto_desencriptado += texto[i];
            i++;
        }
    }
    document.getElementById("aside-texto-resultado").innerHTML= texto_desencriptado;
}

function mostrarBoton(){
    document.getElementById("copia").style.display='block';
}

function copiar(){
    let contenido= document.getElementById("aside-texto-resultado");
    navigator.clipboard.writeText(contenido.textContent);

}

function validarTexto(input) {
    const regex = /[A-Z\W ]/g;
    const nuevoValor = input.value.replace(regex, ' ');
    if (nuevoValor !== input.value) {
        alert('Solo se permiten minúsculas y espacios.');
    }
    input.value = nuevoValor;
}





/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */