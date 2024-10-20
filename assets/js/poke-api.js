const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url) //fazendo a requisicao HTTP, para buscar os pokemons
        .then((response) => response.json())   //processamento assincrono
        .then((jsonBody) => jsonBody.results)
}   