function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        
    }
    else{
        menuMobile.classList.add('open');

    }
}

function trocaIcone(){
    const mode = document.querySelector('#mode_icon');
    mode.addEventListener("click", ()=> {
    const form = document.querySelector('#login_form_all'); 
    const inputados = document.querySelector('#inputs');
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark')
        inputados.classList.add('dark')
        return;
    }

        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        form.classList.remove('dark');
        inputados.classList.remove('dark');
        

         })
}

/* JOGO */
const player = document.querySelector('.player');
const pipe = document.querySelector('.pipe');
const jump =() =>{
    player.classList.add('jump');
    setTimeout(() =>{
        player.classList.remove('jump')
    }, 500)

    const loop = setInterval(() =>{
        const pipePosition = pipe.offsetLeft;
        const playerPosition = window.getComputedStyle(player).bottom.replace('px','');
        if(pipePosition <= 90 && pipePosition > 0 && playerPosition < 120){
            pipe.style.animation ='none';
            pipe.style.left = '${pipePosition}px';

            player.style.animation ='none';
            player.style.bottom = '0px';

            player.src='./img/defeat.png';
            player.classList.add('defeat');
            pipe.src='./img/pcwin.png';
            
            clearInterval(loop);
        }}, 10); 
}
document.addEventListener('keydown',jump);