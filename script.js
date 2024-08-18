const textArea1 = document.querySelector(".text-area1");
const textArea2 = document.querySelector(".text-area2");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea1.value);
    mensaje.value = textoEncriptado; 
    textArea1.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea2.value);
    mensaje.value = textoDesencriptado; 
    textArea2.value = "";
}

function btnCopiar() {
    const copiarTexto = mensaje.value;
    navigator.clipboard.writeText(copiarTexto);
    mensaje.value = "";
  }
  
function encriptar(stringEncriptado){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    
    for(let i = 0; i<matriz.length; i++){
         if(stringEncriptado.includes(matriz[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matriz[i][0], matriz[i][1]);
         }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    
    for(let i = 0; i<matriz.length; i++){
         if(stringDesencriptado.includes(matriz[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matriz[i][1], matriz[i][0]);
         }
    }
    return stringDesencriptado;
}