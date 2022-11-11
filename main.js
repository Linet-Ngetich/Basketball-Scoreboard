const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const homeAddOne = document.getElementById("home-add-one")
const homeAddTwo = document.getElementById("home-add-two")
const homeAddThree = document.getElementById("home-add-three")
const guestAddOne = document.getElementById("guest-add-one")
const guestAddTwo = document.getElementById("guest-add-two")
const guestAddThree = document.getElementById("guest-add-three")
let homePoints = 0
let guestPoints = 0

homeAddOne.addEventListener("click", function() {
    homePoints += 1
    homeScore.textContent = homePoints
})

homeAddTwo.addEventListener("click", function() {
    homePoints += 2
    homeScore.textContent = homePoints
})

homeAddThree.addEventListener("click", function() {
    homePoints += 3
    homeScore.textContent = homePoints
})

guestAddOne.addEventListener("click", function() {
    guestPoints += 1
    guestScore.textContent = guestPoints
})

guestAddTwo.addEventListener("click", function() {
    guestPoints += 2
    guestScore.textContent = guestPoints
})

guestAddThree.addEventListener("click", function() {
    guestPoints += 3
    guestScore.textContent = guestPoints
})