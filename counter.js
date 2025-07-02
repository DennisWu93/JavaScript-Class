//check if there is already a value in the storage
if(!localStorage.getItem('counter')) {
    // if no set item to 0
    localStorage.setItem('counter',0);
}

// let counter = 0;
function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    // if (counter % 10 === 0) {
    //     alert(`Count is now ${counter}`);
    // }
    //store counter in local storage
    localStorage.setItem('counter',counter);
}
// wait until the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    //set heading to the current value inside local storage
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;

})