# Paxio Docs

[Paxio-Logo](https://paxio.netlify.app/favicon.ico)

## Page

[Paxio-Site](https://paxio.netlify.app)

Seja bem vindo ao documentação da Paxio, Veja e reveja para sua melhor performançe.

``` Javascript
function PaxioCode(Unit){

    if(Unit < 4 || Unit > 8 || Unit === undefined){

        if(Unit < 4 || Unit === undefined){
            Unit = 4
        }
        
        if(Unit > 8){
            Unit = 8
        }

    }

    const Codes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    var Response = '';

    for(let i = 0; i < Unit; i++){
        let CodesLenght = Codes.length;
        let Random = (Math.random() * CodesLenght).toFixed();
        if(Random > 61){
            Random = (Math.random() * CodesLenght).toFixed();
        }
        Response = Response + Codes[Random];
    }

    return JSON.stringify({
        Unit,
        data: Response
    })
}

module.exports = PaxioCode;
```

# Usando no projeto

import a função *paxiocode* no seu projeto

``` Javascript
import PaxioCode from 'paxiocode';
```

Ou via cdn

``` html
<script src="https://cdn.jsdelivr.net/npm/paxiocode@1.0.1/index.min.js">
```

# Usando no codigo

``` Javascript
import PaxioCode from 'paxiocode';

var Resultado = PaxiCode(6);

/* 
{
    Unit: 6,
    data: jdkepd
} 
*/

```

Caso o argumento for menor que 4, Ele retorna uma senha com 4 digitos, Caso maior que 8 uma senha com 8 digitos, Caso não tenha, Retorna com 4 digitos.