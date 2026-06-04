var gameData = {

//store
    seedsCost: 5,
    upgradesCost: 20,
    upgradesStrength: 10,


//inventory 
    moneyOwned: 20,
    seedsOwned: 0,
    upgradesOwned: 0,
    microgreensOwned: 0,

    
    
    update: 1
}

function buySeeds() {
    gameData.moneyOwned -= gameData.seedsCost
    gameData.seedsOwned ++
}
//function buySeedsPerClick() {
  //  if(gameData.seeds >= gameData.seedsCost) {
   //     gameData.seeds -= gameData.seedsPerClickCost
    //    gameData.seedsPerClick += 1
    //    gameData.seedsPerClickCost *= 2
    //    document.getElementById("seedsOwned").innerHTML = gameData.seedsOwned+ " seeds owned"
    //    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Microfarm (Currently Level " + gameData.upgradesOwned + " Cost:: " + gameData.goldPerClickCost + " Gold"
   // }
}

//var mainGameLoop = window.setInterval(function() {
//   mineGold()
//}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))

}, 15000)
