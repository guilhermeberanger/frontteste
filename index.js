


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

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              
               document.getElementById("myForm").innerHTML }}

        request.open('POST', "https://app.netlify.com/sites/adoring-lewin-4ef470/functions/braspres");
        request.setRequestHeader('Access-Control-Allow-Origin', '*');
        request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        request.setRequestHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

        request.setRequestHeader('Content-Type', 'application/json');
        request.onload = function () {
            console.log(request.responseText)
        }
        //console.log(centralFrete)
        request.send(JSON.stringify(objeto));


    });
});