// Función para verificar si el texto tiene mayúsculas, acentos o caracteres especiales
function verificarTexto() {
    // Obtén el valor del textarea
    let inputText = document.getElementById('inputText').value;

    // Expresión regular para detectar mayúsculas, acentos o caracteres especiales
    let regex = /[A-ZÁÉÍÓÚÑáéíóúñ]/;

    // Verifica si el texto cumple con la expresión regular
    if (regex.test(inputText)) {
        // Muestra un alert si encuentra mayúsculas, acentos o caracteres especiales
        alert("Solo se aceptan letras minúsculas y sin acentos.");
        
        // Elimina el último carácter incorrecto
        document.getElementById('inputText').value = inputText.slice(0, -1);
    }
}

//funcion para convertir el texto cambiando el valor de las vocales y obteniendo lo que ingrese el usuario
function convertText() {
    let input = document.getElementById("inputText").value;
    
    let convertedText = input
        .replace(/a/g, "ay")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    //salida del texto convertido por etiqueta <p> con id= "outputText" guardado con el nuevo valor en variable 'convertedText'
    document.getElementById("outputText").value = convertedText;
}

function revertText() {
    let input = document.getElementById("inputText").value;
    
    let originalText = input
        .replace(/ay/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("outputText").value = originalText;
}

function replaceDivContent() {
    let convertedText = document.getElementById("outputText").value;
    
    // Reemplaza el contenido del div
    let div = document.querySelector(".textoEncriptado");
    div.innerHTML = `<div class="styleText">
                       <div class="title">Texto Encriptado</div>
                       <textarea id="botonCopiar" class= "textArea2  limpiar1">${convertedText}</textarea>
                       <div class="buttonContainer">
                          <button id="copiar">Copiar</button>
                          <p id="mensaje"></p>
                       </div>
                     </div>`;

document.getElementById("copiar").addEventListener("click", function() {
    // Selecciona el textarea
    let textarea = document.getElementById("botonCopiar");

    // Selecciona y copia el texto al portapapeles
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para móviles

    // Copia el texto al portapapeles
    navigator.clipboard.writeText(textarea.value).then(() => {
        // Muestra un mensaje de confirmación
        document.getElementById("mensaje").textContent = "copiado!";
    }).catch(err => {
        // Si ocurre un error
        console.error('Error al copiar el texto: ', err);
    });
});
}



// Función combinada que convierte el texto y reemplaza el contenido del div
function convertAndReplace() {
    convertText();       // Convierte el texto
    replaceDivContent(); // Reemplaza el contenido del div
}

function replaceDivContent2(){
    let originalText =document.getElementById("outputText").value;
    
    let div = document.querySelector(".textoEncriptado");
    div.innerHTML = `
                     <div class="styleText">
                       <div class="title">Texto Desencriptado</div>
                       <textarea class= "textArea2">${originalText}</textarea>
                       </div>`;
}

function convertAndReplace2(){
    revertText();
    replaceDivContent2();
}

// Función para limpiar todos los textareas y restablecer el contenido inicial
function limpiarTextArea() {
    // Selecciona todos los elementos con la clase 'limpiar1'
    let textareas = document.querySelectorAll('.limpiar1');
    
    // Itera sobre todos los textarea y limpia su valor
    textareas.forEach(function(textarea) {
        textarea.value = '';
    });

    // Restablece el contenido inicial del div textoEncriptado
    resetContent();
}

// Función para restablecer el contenido inicial del div
function resetContent() {
    let div = document.querySelector(".textoEncriptado");
    div.innerHTML = `
        <p id="outputText"></p>
        <img class="imagenLupa" src="Muñeco.png" alt="muñeco de alura">
        <div>
            <p class="mensajeLupa1">Ningún mensaje fue <br>encontrado</p>
            <p class="mensajeLupa2">Por favor ingrese el texto que desees <br> encriptar o desencriptar.</p>
        </div>`;
}

// Agrega un event listener al textarea para detectar cuando el usuario escribe
document.getElementById('inputText').addEventListener('input', verificarTexto);
/*
// Función combinada que convierte el texto y reemplaza el contenido del div
function convertAndReplace() {
    convertText();       // Convierte el texto
    replaceDivContent(); // Reemplaza el contenido del div
}

// Función combinada que desencripta el texto y reemplaza el contenido del div
function convertAndReplace2() {
    revertText();
    replaceDivContent2();
}*/

