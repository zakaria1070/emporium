// // selection global
let body = document.querySelector("body")
let contraste = document.getElementById("buttonnoir")
let blanc = document.getElementById("buttonblanc")
let h1 = document.getElementsByTagName("h1")[0]


// // bouton contraste noire 
contraste.addEventListener("click", () => {
    body.style.backgroundColor = "black"
    h1.style.color = "white"

}
)
// // bouton contraste blanc
blanc.addEventListener("click", () => {
    body.style.backgroundColor = "white"
    h1.style.color = "black"

})

// // navbar fixed

let nav = document.getElementById("nav")
let topOfNav = nav.offsetTop;
let titre = document.getElementsByClassName("d-none")[0]

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add('fixed-nav')
        document.querySelector('#navbarNav h1').classList.remove("d-none")

    } else {
        document.body.style.paddingTop = 0;
        document.querySelector('#navbarNav h1').classList.add("d-none")
        document.body.classList.remove('fixed-nav')
    }
}

window.addEventListener("scroll", fixNav);

// connexion




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





let modal45 = document.getElementById('modal')
let inscrip = document.getElementById('inscrip')
let modal2 = document.getElementById('modal2')
let inscrip2 = document.getElementById('inscrip2')
let quit = document.getElementById('quit')








// connexion.addEventListener("click",()=>{
//     modal.style.display = "flex"
// })

quit.addEventListener('click', () => {
    modal45.style.display = "none"
    alert('Bien enregistré!')
})
inscrip.addEventListener('click', () => {
    modal2.style.display = "flex"
})
inscrip2.addEventListener('click', () => {
    modal2.style.display = "none"
    // alert('Bien enregistré!')
})


// carousel
let carouselImg = document.querySelectorAll('.carImg')
let carouselBtn = document.querySelectorAll('i.fa-circle')

carouselBtn[0].addEventListener("click", () => {
    carouselImg[0].classList.remove('d-none')
    carouselImg[1].classList.remove('d-none')
    carouselImg[2].classList.remove('d-none')
    carouselImg[3].classList.remove('d-none')
    carouselImg[4].classList.remove('d-none')
    carouselImg[5].classList.add('d-none')
    carouselImg[6].classList.add('d-none')
    carouselImg[7].classList.add('d-none')
    carouselImg[8].classList.add('d-none')
})

carouselBtn[1].addEventListener("click", () => {
    carouselImg[0].classList.add('d-none')
    carouselImg[1].classList.remove('d-none')
    carouselImg[2].classList.remove('d-none')
    carouselImg[3].classList.remove('d-none')
    carouselImg[4].classList.remove('d-none')
    carouselImg[5].classList.add('d-none')
    carouselImg[6].classList.add('d-none')
    carouselImg[7].classList.add('d-none')
    carouselImg[8].classList.add('d-none')
})
carouselBtn[2].addEventListener("click", () => {
    carouselImg[0].classList.add('d-none')
    carouselImg[1].classList.add('d-none')
    carouselImg[2].classList.remove('d-none')
    carouselImg[3].classList.remove('d-none')
    carouselImg[4].classList.remove('d-none')
    carouselImg[5].classList.remove('d-none')
    carouselImg[6].classList.add('d-none')
    carouselImg[7].classList.add('d-none')
    carouselImg[8].classList.add('d-none')
})
carouselBtn[3].addEventListener("click", () => {
    carouselImg[0].classList.add('d-none')
    carouselImg[1].classList.add('d-none')
    carouselImg[2].classList.add('d-none')
    carouselImg[3].classList.remove('d-none')
    carouselImg[4].classList.remove('d-none')
    carouselImg[5].classList.remove('d-none')
    carouselImg[6].classList.remove('d-none')
    carouselImg[7].classList.add('d-none')
    carouselImg[8].classList.add('d-none')


})



// Div.style.border = "solid 5px black"


// shop.style.backgroundColor = "black"
    // shop.classList.remove('bg-light')