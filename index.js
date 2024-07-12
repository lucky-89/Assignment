let showForm = document.getElementById('sign');
let showForm1 = document.getElementById('signin');
let showCross = document.getElementsByClassName('cross');
let dropElements = document.getElementsByClassName('drop');
let signinElements=document.getElementsByClassName('signIn');
let createElements =document.getElementsByClassName('createAcc')

// Add event listeners to each element with the class 'drop'
Array.from(dropElements).forEach(element => {
    element.addEventListener('click', function() {
        showForm.classList.remove('hide');
        Array.from(showCross).forEach(cross => {
            cross.classList.remove('hide');
        });
    });
});
Array.from(signinElements).forEach(element => {
    element.addEventListener('click', function() {
        showForm.classList.add('hide');
        showForm1.classList.remove('hide');
    });
});
Array.from(createElements).forEach(element => {
    element.addEventListener('click', function() {
        showForm1.classList.add('hide');
        showForm.classList.remove('hide');
    });
});

Array.from(showCross).forEach(element => {
    element.addEventListener('click', function() {
        showForm1.classList.add('hide');
        showForm.classList.add('hide');
        Array.from(showCross).forEach(cross => {
            cross.classList.add('hide');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    toggleButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });
  
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown')) {
        dropdownMenu.classList.remove('show');
      }
    });
  });

