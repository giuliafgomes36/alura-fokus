const html = document.querySelector('html');
const botaoFoco = document.querySelector('.app__card-button--foco');
const botaoCurto = document.querySelector('.app__card-button--curto');
const botaoLongo = document.querySelector('.app__card-button--longo');
const botaoComecar = document.querySelector('.app__card-primary-button');

const displayTempo = document.querySelector('#timer')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

const duracaoFoco = 1500;
const duracaoCurto = 300;
const duracaoLongo = 900;

botaoFoco.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

botaoCurto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

botaoLongo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})