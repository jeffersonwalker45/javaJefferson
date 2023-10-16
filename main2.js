const jeffinho = document.querySelector;
function tocasomclap(){
    jeffinho('#som_tecla_clap').play();
}
function tocasompom (){
    jeffinho('#som_tecla_pom').play();
}
function tocasomtim (){
    jeffinho('#som_tecla_tim').play();
}
function tocasompuff (){
    jeffinho('#som_tecla_puff').play();
}
function tocasomsplash (){
    jeffinho('#som_tecla_splash').play();
}
function tocasomtoim (){
    jeffinho('#som_tecla_toim').play();
}
function tocasompsh (){
    jeffinho('#som_tecla_psh').play();
}
function tocasomtic (){
    jeffinho('#som_tecla_tic').play();
}
function tocasomtom (){
    jeffinho('#som_tecla_tom').play();
}
jeffinho('.tecla_pom').onclick = tocasompom;
jeffinho('.tecla_clap').onclick = tocasomclap;
jeffinho('.tecla_tim').onclick = tocasomtim;
jeffinho('.tecla_puff').onclick = tocasompuff;
jeffinho('.tecla_splash').onclick = tocasomsplash;
jeffinho('.tecla_toim').onclick = tocasomtoim;
jeffinho('.tecla_psh').onclick = tocasompsh;
jeffinho('.tecla_tic').onclick = tocasomtic;
jeffinho('.tecla_tom').onclick = tocasomtom;
