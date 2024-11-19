let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
    // Faço a consulta na API e retorno o JSON na variavel respo
   await fetch(URL).then((response) => {
        // Transformar o JSON recebido pelo FETCH em OBJ
        return response.json();
   }).then((response) => {
        // Apresentar as informações para o Usuario
        // Transformando novamente o OBJ em JSON
        document.getElementById('mostraJSON').innerText = JSON.stringify(response);

        let image = `
            <img style="width: 200px; height:200px" src="${response.message}" alt="">
        `
        document.getElementById('mostraIMG').innerHTML = image;
   })
}









// '{"message":"https:\/\/images.dog.ceo\/breeds\/coonhound\/n02089078_1967.jpg","status":"success"}''

// {message:"https:images.dog.ceo.breedscoonhound.n02089078_1967.jpg",
// status:"success"}
