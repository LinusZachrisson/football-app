const playerBtn = document.getElementById("playerBtn");
const playersBox = document.getElementById("playersBox");
const searchedPlayerInfo = document.getElementById("searchedPlayerInfo");
const playerInfo = document.getElementById("playerInfo");
const landingPage = document.getElementById("landingPage");

fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4328`)
.then((response) => response.json())
.then((data) => {
    console.log(data);

    printLeaugeInfo(data)
});

// function printLeaugeInfo(info) {
//     for(data in info) {
//         console.log(info.leagues[0].dateFirstEvent);

//         landingPage.insertAdjacentHTML("afterbegin", `<p class="landing-info">${info.leagues[0].strDescriptionEN}`)
//     }
// }






//PLAYERS PAGE

playerBtn.addEventListener("click", function(){
    playersBox.innerHTML = "";
    playersBox.insertAdjacentHTML("afterbegin", `<input id="searchedPlayerInfo" type="text"><button id="searchForPlayerBtn">Search</button>`)
    
});


const getPlayerInfo = async (player) => {
     
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${player}`)
        const playerInfo = response.json()
        return playerInfo;
}

document.addEventListener("click", async (event) => {
    if(event.target && event.target.id === "searchForPlayerBtn") {
        const info = await getPlayerInfo(event.target.previousSibling.value);
        if( !info.player) {
           const error = renderErrorHTML("player")
           renderHTML(error, playerInfo)
        } else {
            createPlayerTemplateAndRenderHTML(info.player[0])
        }
        
    }
})

const renderHTML = (template, element) => {
    element.innerHTML = template;
}

const createPlayerTemplateAndRenderHTML = (player) => {
    console.log("spelare", player);
    const {strPlayer, dateBorn} = player
    const HTML = `<h2>${strPlayer}</h2> <p>${dateBorn}</p>`
    renderHTML(HTML, playerInfo)
}

const renderErrorHTML = (errorType) => {
    switch(errorType) {
        case "player":
            return `<p> ERROR! No player found </p>`
        case y:
          // code block
          break;
        default:
          return `<p> ERROR! Try again`
      }
    
}
    