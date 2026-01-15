// DOM Traversal
const close = document.querySelectorAll('.close');

for(let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(e) {
        //close[i].parentElement.style.display = 'none';
         e.target.parentElement.style.display = 'none';
    })
}
//close.forEach(function(el) {
  //el.addEventListener('click', function(e) {
  //  e.target.parentElement.style.display = 'none';
//  });
//});

// Pengetesan Traversal di Console
//const nama = document.querySelector('.nama');
// Ini akan menampilkan elemen nama itu sendiri di console
//console.log(nama.nextElementSibling.previousElementSibling);