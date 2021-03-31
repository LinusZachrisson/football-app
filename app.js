const playerBtn = document.getElementById("playerBtn");
const playersBox = document.getElementById("playersBox");
const searchedPlayerInfo = document.getElementById("searchedPlayerInfo");
const playerInfo = document.getElementById("playerInfo");

playerBtn.addEventListener("click", function(){
    playersBox.innerHTML = "";
    playersBox.insertAdjacentHTML("afterbegin", `<input id="searchedPlayerInfo" type="text"><button id="searchForPlayerBtn">Search</button>`)
});

function getPlayerInfo() {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=thiago_alcantara`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.player[0].strTeam);
        
        playerInfo.insertAdjacentHTML("afterbegin", `<p>${data.player[0].strTeam}</p>`);
    })
}

document.addEventListener("click", (event) => {
    if(event.target && event.target.id === "searchForPlayerBtn") {
        getPlayerInfo();
        playerInfo.innerHTML = "";
    }
})
    