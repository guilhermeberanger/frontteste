


document.addEventListener("DOMContentLoaded", function () {
    const dataForm = document.getElementById("myForm");
    dataForm.addEventListener("submit", async function (event) {
        event.preventDefault()
        //-------------------------------
        //const cepOrigem = document.getElementById("cepOrigemID").value; // você vai pegar as informções do quadrado CEP ORIGEM
        const cepDestino = document.getElementById("cepDestinoID").value;
        const quantidade = document.getElementById("quantidadeId").value;
        const valorDeclarado = document.getElementById("valorDeclaradoId").value;
        const comprimento = document.getElementById("comprimentoId").value;
        const altura = document.getElementById("alturaId").value;
        const largura = document.getElementById("larguraId").value;
        const peso = document.getElementById("pesoId").value;
        
        const objeto = {
            //cepOrigem,
            cepDestino,
            //tipoCarga,
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
       const [braspres, correios, centralfrete] = await Promise.all(urls.map(url =>
            fetch(url, {
                method: 'POST',
                headers: new Headers({
                    'access-control-allow-origin': '*',
                    'Access-Control-Allow-Headers': '*'
                }),
                body: JSON.stringify(objeto)
            }) 


            /*
                .then(response => response.json())
                //.catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error))*/
        )) 
        const centralFreteJson = await centralfrete.json()
        const braspresJson = await braspres.json()
        const correiosJson = await correios.json()
        
        const criar = centralFreteJson.prices
        const transp =  criar.map(function(item, indice){
            return item.shipping_carrier;
         })
         const transpTostring = transp.toString()

         const preco1 =  criar.map(function(item, indice){
            return item.price;
        })
        const priceToString = preco1.toString()

        const prazo1 =  criar.map(function(item, indice){
            return item.delivery_time;
        })
        const prazoToString = prazo1.toString()
//--------------------------------------------------------------------------------------------------



            const dNow = new Date();
            const  localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
            
        const respostaCliente = {

           'Data da emissão': 'Cotação Realizada em ' + 'São Paulo ' + localdate,
           'Fornecedor': 'Ziro Modas',
            'Primeira Opção': centralFreteJson.sender.name,
            'Transportadora 1': transpTostring,
            'Valor 1': priceToString,
            'Prazo 1': prazoToString,
            'Segunda Opção': braspresJson.CALCULOFRETE.EMPRESA,
            'Transportadora 2': braspresJson.CALCULOFRETE.EMPRESA,
            'Valor 2': braspresJson.CALCULOFRETE.TOTALFRETE,
            'Prazo 2': braspresJson.CALCULOFRETE.PRAZO,
            'Terceira Opção': 'Correios',
            'Transportadora 3': "Correios",
            'Valor 3': correiosJson.cResultado.Servicos.cServico.Valor,
            'Prazo 3': correiosJson.cResultado.Servicos.cServico.PrazoEntrega
        }


       
        //--------------------------------------------
        //console.log('braspres', braspresJson)
        //console.log('correios', correiosJson)
        //console.log('central do Frete', centralFreteJson)
       
        console.log('Sucesso', respostaCliente)  
       
        

    });
});