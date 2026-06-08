var gameData = {

//store
    seedsCost: 5,


//inventory 

    seedsOwned: 0,
    moneyOwned: 20,
}

function buySeeds() {
//    if(gameData.moneyOwned >= gameData.seedsCost){
        gameData.seedsOwned += 1
//        gameData.moneyOwned -= gameData.seedsCost
        document.getElementByID("seedsOwned").innerHTML = gameData.seedsOwned + " seeds owned"
//        document.getElementByID("moneyOwned").innerHTML = "$" +gameData.moneyOwned
  //  }

//function buySeedsPerClick() {
  //  if(gameData.seeds >= gameData.seedsCost) {
   //     gameData.seeds -= gameData.seedsPerClickCost
    //    gameData.seedsPerClick += 1
    //    gameData.seedsPerClickCost *= 2
    //    document.getElementById("seedsOwned").innerHTML = gameData.seedsOwned+ " seeds owned"
    //    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Microfarm (Currently Level " + gameData.upgradesOwned + " Cost:: " + gameData.goldPerClickCost + " Gold"
   // }


//var mainGameLoop = window.setInterval(function() {
//   mineGold()
//}, 1000)

//var saveGameLoop = window.setInterval(function() {
//    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))

//}, 15000)
