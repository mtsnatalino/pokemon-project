// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const pokemonList = document.getElementById('pokemonList') //pegando a lista em HTML
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5;
let offset = 0;



function loadPokemonItens(offset, limit) {
 
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {     
        const newHtml =  pokemons.map((pokemon) =>    

                `
                        <li class="pokemon ${pokemon.type}">
                            <span class="number">#${pokemon.number}</span>
                            <span class="name">${pokemon.name}</span>
            
                            <div class="detail">
                                <ol class="types">
                                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                                </ol>
            
                                <img src="${pokemon.photo}"
                                    alt="${pokemon.name}">
                            </div>
                        </li>
                        `
            ).join('') //map = converte para uma li, depois join(junta) sem separador nenhum ''
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})
   
    


    // fetch(url) //fazendo a requisicao HTTP, para buscar os pokemons
//     .then((response) => response.json())   //processamento assincrono
//     .then((jsonBody) => jsonBody.results)

    //     const listItems = []

    //     for(let i = 0; i < pokemons.length; i++) {
    //         const pokemon = pokemons[i];      
    //         listItems.push(convertPokemonToLi(pokemon))
    //     }
    //     console.log(listItems)
    // })