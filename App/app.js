const squadsLists = document.querySelectorAll(".squads");

const random = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

squadsLists.forEach(squad => {
    squad.addEventListener("click", () => {
        let colors = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        squad.
    })
});

