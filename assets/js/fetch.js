// Déclaration des fonctions

function getDatas(nomPokemon) {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${nomPokemon}`)
    .then((res) => res.json())
    .then((lePokemon) => {
        // console.log("Pokemon récupéré : ", lePokemon);
        let types = [];
        lePokemon.apiTypes.forEach(type => {
        types.push(type.name);
        });
        let lesTypes = types.join("/");

        let evolution = [];
        lePokemon.apiEvolutions.forEach(type => {
        evolution.push(type.name);
        });
        let lesEvolutions = evolution.join("/");

        const infos = document.querySelector('#infos');
        infos.innerHTML = `
        <h2>${lePokemon.name}</h2>
        <img id="image" src="${lePokemon.image}" alt="${lePokemon.name}">
        <p id="types">Élément : ${lesTypes}</p>
        <p id="evolution">Évolution : ${lesEvolutions}</p>
        <button type="submit" name="details">Détails</button>`; 
          
        const detailsBtn = document.querySelector("button[type='submit']");
        detailsBtn.addEventListener("click", (event) => {
            event.preventDefault();
                let para = new URLSearchParams();
                para.append("pokemon", lePokemon.name);
                console.log(para.get("pokemon"));
                location.href = "http://127.0.0.1:5500/pokemon-select/details.html?" + para.toString();
            })      
    })
}

fetch(`https://pokebuildapi.fr/api/v1/pokemon/`)
.then((response) => response.json()) //convertit la réponse de l'api en bdd Json
.then((dataPokemon) => {
    console.log(dataPokemon)
    for (let i = 0; i < dataPokemon.length; i++) {
        const pokemon = dataPokemon[i];
        const select = document.getElementById('choisir');
        const option = document.createElement('option'); // Créez une nouvelle option
        option.value = pokemon.name;
        option.text = pokemon.name;
        select.appendChild(option);
    }
});

//je déclare la constante pour le formulaire

document.querySelector("input[type='submit']").addEventListener("click", getForm);
function getForm(event) {
    event.preventDefault(); 
    //console.log(this);
  
    // Code pour chercher dans le formulaire(this) quelle option est selected
    let pokemonChoisi = document.querySelector("select").value;
    // console.log(pokemonChoisi);
    // console.log("pokemonChoisi : ", pokemonChoisi);
    getDatas(pokemonChoisi);  
  }