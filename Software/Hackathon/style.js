const name = document.querySelector('.enterName');
const submitN = document.querySelector('#entername');  
const form = document.querySelector('form'); 
const h2 = document.querySelector('h2'); 
const greeting = document.querySelector('.greeting')

form.addEventListener('submitN', function (e) {
  e.preventDefault(); 
}); 
submitN.addEventListener('click', function() {
    localStorage.setItem('name', getName.value); 

    nameDisplayCheck(); 
}); 
 

function nameDisplayCheck() {
    if (localStorage.getItem('name')); 
        let name = localStorage.getItem('name')
        h2.textContent = 'Welcome ${name}!'; 
        greeting.textContent =  'Welcome ${name}!'; 


}
document.body.onload = nameDisplayCheck; 
console.log(localStorage.getItem('name')); 