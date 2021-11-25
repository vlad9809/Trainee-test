
let welcomeLine = document.querySelector(".welcomeLine")
let headerState = document.querySelector(".headerState")
let topHalf = document.querySelector(".topHalf")

let aurora = document.querySelector(".aurora")
let searchWindow = document.querySelector(".searchWindow")
let item = document.querySelector(".item")
let btnThree = document.querySelector(".btnThree")
let pages = document.querySelector(".pages")

let signInText = document.querySelector(".signInText")
let regist = document.querySelector(".regist")


function logIn() {
    welcomeLine.classList.add("logIn")
    headerState.classList.add("logIn")
    topHalf.classList.add("logIn")
    aurora.classList.add("logIn")
    searchWindow.classList.add("logIn")
    item.classList.add("logIn")
    btnThree.classList.add("logIn")
    pages.classList.add("logIn")
    signInText.classList.add("logIn")
    regist.classList.add("logIn")
}

signInText.onclick = function() {
    logIn()
}