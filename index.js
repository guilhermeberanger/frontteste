


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

        const url = 'http://localhost:9000/.netlify/functions/braspres'

        fetch('https://adoring-lewin-4ef470.netlify.com/.netlify/functions/braspres', {
            method: 'POST',
            headers: new Headers({
                'access-control-allow-origin': '*',
                'Access-Control-Allow-Headers': '*' 
            }),
            body: JSON.stringify(objeto)
        })
            .then(response => response.json())
            //.catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error))


    });
});