let para = new URLSearchParams(document.location.search);
let pass = para.get("pokemon");
console.log(pass);
fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pass}`)
.then((res) => res.json())
    .then((carac) => {
        console.log(carac);
        
        const statList = document.querySelector('.stats');
        statList.innerHTML = `
        <li class="stats">${carac.stats.HP}</li>`
        
    }
    );    