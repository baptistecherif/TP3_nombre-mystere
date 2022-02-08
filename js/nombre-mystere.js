let computer_value;
let min=0;
let max=101;
computer_value = 50;

document.addEventListener('DOMContentLoaded',Main);

function Main(event){
}

function show(element){
    element.style.display = '';
}

function hide(element){
    element.style.display='none';
}

function new_game(){
    show(gameSelection);
    hide(Game_Player);
    hide(Game_Computer);
    Game1result.innerHTML=''
    Game2result.innerHTML="Je vais trouver ton nombre"
    player_input.value='';
}

new_game();

function start_player_guess_game(){
    computer_value = Math.floor((Math.random()*100)+1)
    hide(gameSelection);
    show(Game_Player);
    hide(Game_Computer);
    hide(restart1);
    trying.addEventListener('click',(event)=>{try_guess()});
    restart1.addEventListener('click',(event)=>{location.reload()});
}

function try_guess(){
    input = player_input.value;
    if(input > computer_value){
        Game1result.innerHTML="Non c'est plus petit";
        player_input.value='';
    }
    else if(input < computer_value){
        Game1result.innerHTML="non c'est plus Grand";
        player_input.value='';
    }
    else{
        Game1result.innerHTML= "Bravo, tu as trouvé !!";
        show(restart1);
    }
}

function its_smaller(){
    max = computer_value;
    computer_value = Math.floor((min+max)/2);
    Game2result.innerHTML='est ce que '+ computer_value +' est ton nombre ?';
}

function its_bigger(){
    min = computer_value;
    computer_value = Math.floor((min+max)/2);
    Game2result.innerHTML='est ce que '+ computer_value +' est ton nombre ?';
}

function start_computer_guess_game(){
    hide(gameSelection);
    hide(Game_Player);
    show(Game_Computer);
    hide(restart2);
    show(small);
    show(bigger);
    show(found);

    Game2result.innerHTML='est ce que '+ computer_value +' est ton nombre ?'
    small.addEventListener('click',(event)=>{its_smaller()});
    bigger.addEventListener('click',(event)=>{its_bigger()});
    restart2.addEventListener('click',(event)=>{location.reload()});
    found.addEventListener('click',(event)=>{

        Game2result.innerHTML="J'ai trouvé";
        show(restart2);
        hide(small);
        hide(bigger);
        hide(found)});
}


game1.addEventListener('click',(event)=>{start_player_guess_game()});
game2.addEventListener('click',(event)=>start_computer_guess_game());