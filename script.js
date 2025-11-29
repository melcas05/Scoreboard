let homenum = document.getElementById("home-num")
let guestnum = document.getElementById("guest-num")

let homecount = 0
let guestcount = 0

function boxclick01HOME() {
    homecount += 1
    homenum.textContent = homecount
    
}

function boxclick02HOME() {
    homecount +=2
    homenum.textContent = homecount
}

function boxclick03HOME() {
    homecount +=3
    homenum.textContent= homecount
}

function boxclick01GUEST() {
    guestcount += 1
    guestnum.textContent = guestcount
}

function boxclick02GUEST() {
    guestcount +=2
    guestnum.textContent = guestcount
}

function boxclick03GUEST() {
    guestcount +=3
    guestnum.textContent= guestcount
}