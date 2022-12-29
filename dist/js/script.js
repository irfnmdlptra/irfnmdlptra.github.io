// Hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
    
})

// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
     
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
       
    }
}


// klik di luar hamburger
window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden');
    }
});

// dark mode toggle 
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});


// pindahlan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-sceme: dark)').matches)) {
    darkToggle.checked =true;
} else {
    darkToggle.checked =false;
    
}


var load = document.getElementById("load");

window.addEventListener('load', function(){
  load.style.display = 'none';
})





// error 
  // Menangkap peristiwa kehilangan koneksi internet
  window.addEventListener("offline", function () {
    // Mengubah src atribut error
    var error = (document.getElementById("error").src = "dist/img/gif/nelson-tiapa-gif-baile2.gif");
    error.style.display = "block";
  });

  // Menangkap peristiwa kembalinya koneksi internet
  window.addEventListener("online", function () {
    // Mengubah src atribut error
    var error = (document.getElementById("error").src = "dist/img/gif/error.gif");
    error.style.display = "none";
  });
  // Mengecek apakah web terhubung ke internet atau tidak
  window.addEventListener("offline", function () {
    // Mengubah src atribut error
   var error = (document.getElementById("error").src = "dist/img/gif/error.gif");
    error.style.display = "none";
  });
  // Menangkap peristiwa error
  window.addEventListener("error", function () {
    // Mengubah src atribut gambar
   var error = (document.getElementById("error").src = "dist/img/gif/error.gif");
    error.style.display = "none";
  });
  // Menangkap peristiwa error
  window.onerror = function () {
    // Mengubah src atribut gambar
   var error = (document.getElementById("error").src = "dist/img/gif/error.gif");
    error.style.display = "none";
  };