
let welcomeLine = document.querySelector(".welcomeLine") // we deliver worldwide and our stores
let headerState = document.querySelector(".headerState") // header (text from white to black)
let topHalf = document.querySelector(".topHalf") // photo

let aurora = document.querySelector(".aurora") // title Aurora
let searchWindow = document.querySelector(".searchWindow") //search window
let item = document.querySelector(".item") // logo search (from white to black)
let btnThree = document.querySelector(".btnThree") // buttons sign In | register and purchase
let pages = document.querySelector(".pages") // lines What's new, women ...

let signIn = document.querySelector(".signIn") // signIn div
let signInText = document.querySelector(".signInText")// signIn text (button)
let separator = document.querySelector(".separator") // |
let regist = document.querySelector(".registText") //regist button

let basket = document.querySelector(".basketText") // purchase

let indicator = document.querySelector(".indicator") // yellow circle
let goods = 49 // number on yellow circle

indicator.classList.remove("logIn")

function logIn() {   //press register
    welcomeLine.classList.add("logIn") // adding podclass logIn
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

signInText.onclick = function() { // while pressing Sign In button we launch functions below
    logIn()
    letIn()
}

regist.onclick = function() { //while pressing regist button we launch function below
    logIn()
}

function logOut() {  // press hi,angela -> first page
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
        letIn()
    }
}

function letIn() {  // press sign In -> hi,angels 49
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

