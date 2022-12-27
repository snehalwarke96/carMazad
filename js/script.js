let bidbtn1= document.getElementById('bidbtn1');
let bidbtn2= document.getElementById('bidbtn2');
let filterclick= document.getElementById('filter-click');
let bids= document.querySelector('.bids');
let arrow= document.querySelector('.arrow');
let carbtn= document.querySelector('.carbtn');
let formdiv= document.querySelector('.form-div');
let rightdiv= document.querySelector('.rightdiv');

bidbtn1.addEventListener('click',(e=>{
    console.log('snail');
    bids.classList.toggle('bidsclick');
    arrow.classList.toggle('arrowrot');
    carbtn.classList.toggle('carbtnbg');
  
}))



filterclick.addEventListener('click',(e=>{
    console.log('snail');
    rightdiv.style.display='none';
    formdiv.style.display='block';
    formdiv.classList.add('leftdiv');
  
  
}))