Array.from(document.querySelectorAll('img')).forEach((x)=>x.addEventListener('click',(e)=>console.log(window.open(`${e.target.src}`, '_blank').focus())))
