const playerBtn = document.getElementById("playerBtn");
const playersBox = document.getElementById("playersBox");
const searchedPlayerInfo = document.getElementById("searchedPlayerInfo");
const playerInfo = document.getElementById("playerInfo");
const landingPage = document.getElementById("landingPage");

//LANDING PAGE

const getLandingPage = async () => {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4328`)
    const leagueInfo = response.json()

    console.log(leagueInfo);

}

getLandingPage();


//PLAYERS PAGE

playerBtn.addEventListener("click", function(){
    playersBox.innerHTML = "";
    playersBox.insertAdjacentHTML("afterbegin", `<input id="searchedPlayerInfo" placeholder="Type in player name" type="text"><button id="searchForPlayerBtn">Search</button>`)
    
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
    const {strPlayer, dateBorn, strBirthLocation, strThumb, strTeam, strPosition, strHeight, strWeight, strWage} = player
    const HTML = `<h2>${strPlayer}</h2> <img class="player-img" src="${strThumb}"> <p><h4>Born in:</h4> ${dateBorn}, ${strBirthLocation}.</p> <p><h4>Current team:</h4> ${strTeam}</p> <p><h4>Position:</h4> ${strPosition}</p> <p><h4>Height:</h4> ${strHeight}</p> <p><h4>Weight:</h4> ${strWeight}</p> <p><h4>Wage:</h4> ${strWage}</p>`
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
    