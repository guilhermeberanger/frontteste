


document.addEventListener("DOMContentLoaded", function () {
    const dataForm = document.getElementById("myForm");
    dataForm.addEventListener("submit", function (event) {
        event.preventDefault()
        //-------------------------------
        const cepOrigem = document.getElementById("cepOrigemID").value; // você vai pegar as informções do quadrado CEP ORIGEM
        const cepDestino = document.getElementById("cepDestinoID").value;
        const tipoCarga = document.getElementById("tipoCargaId").value;
        const valorDeclarado = document.getElementById("valorDeclaradoId").value;
        const volume = document.getElementById("volumeID").value;
        const comprimento = document.getElementById("comprimentoId").value;
        const altura = document.getElementById("alturaId").value;
        const largura = document.getElementById("larguraId").value;
        const peso = document.getElementById("pesoId").value;
        ;
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

        //----------------------
        const urls = [
            'https://sad-babbage-d06970.netlify.com/.netlify/functions/braspres',
            'https://sad-babbage-d06970.netlify.com/.netlify/functions/correios',
            'https://sad-babbage-d06970.netlify.com/.netlify/functions/centralfrete',

        ];

        // use map() to perform a fetch and handle the response for each url
        Promise.all(urls.map(url =>
            fetch(url, {
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
                //.then(response => console.log(
                      //  response.CALCULOFRETE,
                        //response.sender,
                       // response.cServico
                  //  ))
                .catch(error => console.error('Error:', error))
        ))
        //--------------------------------------------


    });
});