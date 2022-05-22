



document.querySelector('.btn').addEventListener('click', next);
document.querySelector('.btn1').addEventListener('click', next1);
document.querySelector('.btn2').addEventListener('click', remove);


function next() {
    document.querySelector('.tur').classList.add('hide')
    document.querySelector('.jap').classList.add('new-next')
    document.querySelector('.mex').classList.add('new-next1')
}
function next1(){
    document.querySelector('.jap').classList.add('go-sub1')
    document.querySelector('.tur').classList.add('go-main')
    document.querySelector('.mex').classList.add('go-sub2')
}
function next2(){
    
}
function remove(){
    document.querySelector('.jap').classList.remove('new-next','go-sub1')
    document.querySelector('.tur').classList.remove('hide','go-main')
    document.querySelector('.mex').classList.remove('new-next1','go-sub2')
}
