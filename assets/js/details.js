let para = new URLSearchParams(document.location.search);
let pass = para.get("pokemon");
console.log(pass);
fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pass}`)
.then((res) => res.json())
    .then((carac) => {
        console.log(carac);
        
        const statList = document.querySelector('.stats');
        statList.innerHTML = `
        <li class="stats">HP : ${carac.stats.HP}</li>
        <li class="stats">Attaque : ${carac.stats.attack}</li>
        <li class="stats">Défense : ${carac.stats.defense}</li>
        <li class="stats">Attaque spéciale : ${carac.stats.special_attack}</li>
        <li class="stats">Défense spéciale : ${carac.stats.special_defense}</li>
        <li class="stats">Vitesse : ${carac.stats.speed}</li>`        
    }
    );    