// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function converPokemonTypesToLi(pokemonsTypes) {
    return pokemonsTypes.map((typeSlot) => `<li class="type"> ${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon){

    return `
            <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${converPokemonTypesToLi(pokemon.types).join(' ')}
                    </ol>

                    <img src="${pokemon.sprites.other.dream_world.front_default}"
                        alt="${pokemon.name}">
                </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemonList') //pegando a lista em HTML

// fetch(url) //fazendo a requisicao HTTP, para buscar os pokemons
//     .then((response) => response.json())   //processamento assincrono
//     .then((jsonBody) => jsonBody.results)
   

    pokeApi.getPokemons().then((pokemons = []) => {     
        const newHtml =  pokemons.map(convertPokemonToLi).join('') //map = converte para uma li, depois join(junta) sem separador nenhum ''
        pokemonList.innerHTML = newHtml
    })


    //     const listItems = []

    //     for(let i = 0; i < pokemons.length; i++) {
    //         const pokemon = pokemons[i];      
    //         listItems.push(convertPokemonToLi(pokemon))
    //     }
    //     console.log(listItems)
    // })