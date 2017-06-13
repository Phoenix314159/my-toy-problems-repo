let duckDuckGoose = (players, goose) => {
    let pick = (goose - 1) % players.length
    return players[pick].name;
}
