const player = document.getElementById("video")

player.addEventListener("click", ()=>{
    player.innerHTML = ""
    player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/kevn0vUFYjU?si=AZmjahXc5LnjBmt7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay="true"; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
})