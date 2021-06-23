Array.from(document.getElementsByClassName('mot_cle_conteneur')).forEach((x)=>x.addEventListener('click',(e)=>{
    Array.from(document.getElementsByClassName('resultat_conteneur')).forEach((x)=>x.style.display='none');
    (Array.from(e.target.classList).slice(1)).forEach((p)=>{
        document.getElementById(`${p}`).style.display='block';
        document.getElementById(`${p}`).style.animation='glisse 1s 1';
    });
}));
