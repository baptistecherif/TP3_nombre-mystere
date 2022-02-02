function start_player_guess_game() {
    var min = 1;
    var max = 100;
    var computer_number = Math.floor(Math.random() * (max - min)) + min;
}

function show(element) {
    element.style.display = ’’;
}

function hide(element) {
    element.style.display = ’none’;
}

function new_game() { // fonction qui montre l’´ecran de s´election du mode de jeu
    show(game_selection);
    hide(game1);
    hide(game2);
}