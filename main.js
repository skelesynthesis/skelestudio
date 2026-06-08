var gameData = {

//store
    seedsCost: 5,


//inventory 

    seedsOwned: 0,
    moneyOwned: 20,
}

function buySeeds() {
        gameData.seedsOwned += 1
        document.getElementByID("seedsOwned").innerHTML = gameData.seedsOwned + " seeds owned"
}
