const urlParams = new URLSearchParams(window.location.search)
const gameId = urlParams.get("gameId")
try {
    let response = await fetch("https://api.noroff.dev/api/v1/gamehub/" + gameId)
    if (!response.ok)
        throw new Error("Not found")
    let game = await response.json()

    await new Promise(r=>setTimeout(r, 5000)) //FJERN ETTER STYLING//
    document.getElementById("spinner").remove()

    document.getElementById("game_title").innerText = game.title
    document.getElementById("game_title2").innerText = game.title
    document.getElementById("game_description").innerText = game.description
    document.getElementById("game_price").innerText = game.price
    document.getElementById("game_ageRating").innerText = game.ageRating

    const newestReleaseImg = document.getElementById("game_image")
    newestReleaseImg.src = game.image
    newestReleaseImg.alt = game.title + " cover"
} catch (e) {
    location.href="404.html"
}
