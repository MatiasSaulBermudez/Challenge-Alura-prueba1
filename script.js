function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtCifrado = texto.replace(/e/igm, "enter");
    txtCifrado = txtCifrado.replace(/o/igm, "ober");
    txtCifrado = txtCifrado.replace(/i/igm, "imes");
    txtCifrado = txtCifrado.replace(/a/igm, "ai");
    txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").value = txtCifrado;
    document.getElementById("copiar").style.display = "block";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtDescifrado = texto.replace(/enter/igm,"e");
    txtDescifrado = txtDescifrado.replace(/ober/igm,"o");
    txtDescifrado = txtDescifrado.replace(/imes/igm,"i");
    txtDescifrado = txtDescifrado.replace(/ai/igm,"a");
    txtDescifrado = txtDescifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").value = txtDescifrado;
    document.getElementById("copiar").style.display = "block";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
}
