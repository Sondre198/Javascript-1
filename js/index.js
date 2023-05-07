let response = await fetch("https://api.noroff.dev/api/v1/gamehub")
let games = await response.json()

let newestRelease = games[0]
document.getElementById("spinner").remove()
document.getElementById("newest_release_title").innerText = newestRelease.title
const newestReleaseImg = document.getElementById("newest_release_image")
newestReleaseImg.src = newestRelease.image
newestReleaseImg.alt = newestRelease.title + " cover"
const newestReleaseLink = document.getElementById("newest_release_link")
newestReleaseLink.href = "product_page.html?gameId=" + newestRelease.id
newestReleaseLink.innerText ="Add to cart: " + newestRelease.price + "$"

function setGameInfo(container, game){
    container.getElementsByTagName("h3")[0].innerText = game.title
    const img = container.getElementsByTagName("img")[0]
    img.src = game.image
    img.alt = game.title + " cover"
    const link = container.getElementsByTagName("a")[0]
    link.href = "product_page.html?gameId=" + game.id
    link.innerText ="Add to cart: " + game.price + "$"
}

setGameInfo(document.getElementById("game_1"), games[1])
setGameInfo(document.getElementById("game_2"), games[2])
setGameInfo(document.getElementById("game_3"), games[3])
setGameInfo(document.getElementById("game_4"), games[4])