let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
    // Faço a consulta na API e retorno o JSON na variavel respo
    let resp = await fetch(URL);

    let exemplo = resp.json()
    console.log(exemplo)

}

DogApi()

