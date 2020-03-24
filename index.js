


document.addEventListener("DOMContentLoaded", function () {
    const dataForm = document.getElementById("myForm");
    dataForm.addEventListener("submit", function (event) {
        event.preventDefault()

        const cepOrigem = document.getElementById("cepOrigemID").value;
        const cepDestino = document.getElementById("cepDestinoID").value;
        const tipoCarga = document.getElementById("tipoCargaId").value;
        const valorDeclarado = document.getElementById("valorDeclaradoId").value;
        const volume = document.getElementById("volumeID").value;
        const comprimento = document.getElementById("comprimentoId").value;
        const altura = document.getElementById("alturaId").value;
        const largura = document.getElementById("larguraId").value;
        const peso = document.getElementById("pesoId").value;
        
        const objeto = {
            cepOrigem,
            cepDestino,
            tipoCarga,
            valorDeclarado,
            comprimento,
            altura,
            largura,
            peso

        }

        const request = new XMLHttpRequest();

        request.open('POST', "http://localhost:9000/.netlify/functions/braspres");
        request.setRequestHeader('Content-Type', 'application/json', 'charset=UTF-8, Access-Control-Allow-Origin, *');
        request.onload = function () {
            console.log(request.responseText)
        }
        //console.log(centralFrete)
        request.send(JSON.stringify(objeto));
        

    });
});