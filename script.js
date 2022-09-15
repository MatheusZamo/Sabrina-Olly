const btnMenu = document.querySelector('#btn-menu');
const btnFechar = document.querySelector('#btn-fechar');
const listaMobile = document.querySelector('#lista-mobile');
const box = document.querySelectorAll('.scroll');
const listaOpcoes = document.querySelectorAll('.lista-opcoes');

function menuMobile(){
    btnMenu.classList.toggle('active');
    btnFechar.classList.toggle('active');
    listaMobile.classList.toggle('active');
}
btnMenu.addEventListener('click',menuMobile);
btnFechar.addEventListener('click',menuMobile);


function ativarScroll(){
    box.forEach((elemento,index) => {
        if(elemento.getBoundingClientRect().top < window.innerHeight){
            elemento = elemento.classList.add('box');
        }else{
            elemento = elemento.classList.remove('box');
        }
    })
}
window.addEventListener('scroll', ativarScroll);


function scrollInterno(elemento){
    elemento.preventDefault();
    const opcao = elemento.target;
    const id = opcao.getAttribute('href');
    const topoDaOpcao = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: topoDaOpcao - 50,
        behavior: 'smooth'
    })
}
listaOpcoes.forEach((elemento) =>{
    elemento.addEventListener('click',scrollInterno);
})