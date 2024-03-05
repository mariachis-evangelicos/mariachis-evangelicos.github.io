const player = document.getElementById("video")
const ancho = window.screen.width
console.log(ancho)
player.addEventListener("click", ()=>{
    player.innerHTML = ""
    
    player.innerHTML = `<iframe width=${ancho} height="200" src="https://www.youtube.com/embed/kevn0vUFYjU?si=AZmjahXc5LnjBmt7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay="true"; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
})