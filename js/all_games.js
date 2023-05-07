let response = await fetch("https://api.noroff.dev/api/v1/gamehub")
let games = await response.json() 

let html = ""
document.getElementById("spinner").remove()

for (const game of games){
    html += `
    <div class="game">
        <div class="game_img"><img src="${game.image}" alt="${game.title} cover"></div>

        <p>${game.title}</p>

        <div class="purchase_button"><a href="product_page.html?gameId=${game.id}">Add to cart: ${game.discountedPrice}$</a></div>
    </div>
    `;
}

document.getElementById("all_games_container").innerHTML=html