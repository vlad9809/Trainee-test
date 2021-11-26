
let welcomeLine = document.querySelector(".welcomeLine")
let headerState = document.querySelector(".headerState")
let topHalf = document.querySelector(".topHalf")

let aurora = document.querySelector(".aurora")
let searchWindow = document.querySelector(".searchWindow")
let item = document.querySelector(".item")
let btnThree = document.querySelector(".btnThree")
let pages = document.querySelector(".pages")

let signIn = document.querySelector(".signIn")
let signInText = document.querySelector(".signInText")
let separator = document.querySelector(".separator")
let regist = document.querySelector(".registText")

let basket = document.querySelector(".basketText")

let indicator = document.querySelector(".indicator")
let goods = 49

indicator.classList.remove("logIn")

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
    separator.classList.add("logIn")
    regist.classList.add("logIn")
    basket.classList.add("logIn")
    
}

signInText.onclick = function() {
    logIn()
    singIn()
}

regist.onclick = function() {
    logIn()
}

function logOut() {
    welcomeLine.classList.remove("logIn")
    headerState.classList.remove("logIn")
    topHalf.classList.remove("logIn")
    aurora.classList.remove("logIn")
    searchWindow.classList.remove("logIn")
    item.classList.remove("logIn")
    btnThree.classList.remove("logIn")
    pages.classList.remove("logIn")
    signInText.classList.remove("logIn")
    signIn.classList.remove("logIn")
    separator.classList.remove("logIn")
    regist.classList.remove("logIn")
    basket.classList.remove("logIn")
    indicator.classList.remove("logIn")
    separator.innerHTML = "|"
    regist.innerHTML = "Register"
    signInText.innerHTML = "Sign in"
    signInText.onclick = function() {
        logIn()
        singIn()
    }

}

function singIn() {
    indicator.classList.add("logIn")
    indicator.innerHTML = goods

    separator.innerHTML = ""
    regist.innerHTML = ""
    signInText.innerHTML = "Hi, Angels!"
    signIn.classList.add("logIn")
    signInText.onclick = function() {
        logOut()
    }
}

