let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isQueryValid = false;
let isTextAreaValid = false;
let isCheckboxValid = false;

const form = document.querySelector("form");

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#Last-name");
const email = document.querySelector("#email");
const generalQuery = document.querySelector("#general");
const suporteQuery = document.querySelector("#supporte");
const messageArea = document.querySelector("#message");
const concentbox = document.querySelector("#concentbox");
const submitBtn = document.querySelector("#submitBtn")

const fNamenMsg = document.querySelector("#fname-msg");
const lNameMsg = document.querySelector("#lname-msg");
const emailMsg = document.querySelector("#email-msg");
const queryMsg = document.querySelector("#query-msg");
const textMsg = document.querySelector("#text-msg");
const checkboxMsg = document.querySelector("#checkbox-msg");

const radioGeneralContainer = document.querySelector(".radio-general");
const radioSupporteContainer = document.querySelector(".radio-supporte");

const modal =document.querySelector(".modal");

function validFirstname() {
    
    fNamenMsg.classList.add("hide");
    firstName.classList.remove("error");
    isFirstNameValid = false;
    
    if (!firstName.value) {
        fNamenMsg.classList.remove("hide");
        firstName.classList.add("error");
    } else {
        isFirstNameValid = true;
    }
}

function validLastName() {
    
    lNameMsg.classList.add("hide");
    lastName.classList.remove("error")
    isLastNameValid = false;
    
    if (!lastName.value) {
        lNameMsg.classList.remove("hide");
        lastName.classList.add("error")
    } else {
        isLastNameValid = true;
    }
}

function validEmail() {
    email.classList.remove("error");
    emailMsg.classList.add("hide");
    isEmailValid = false;
    
    if(!email.value) {
        emailMsg.classList.remove("hide");
        email.classList.add("error")
    } else {
        isEmailValid = true;
    }
}

function validQuery() {
        
    queryMsg.classList.add("hide");
    isQueryValid = false;
    
    if (!generalQuery.checked && !suporteQuery.checked) {
        queryMsg.classList.remove("hide");

    } else {
        isQueryValid = true;
    }
}

function validTextArea() {
    
    messageArea.classList.remove("error");
    textMsg.classList.add("hide");
    isTextAreaValid = false;

    if(!messageArea.value) {
        textMsg.classList.remove("hide");
        messageArea.classList.add("error");
    } else {
        isTextAreaValid = true;
    }
}

function validConcentBox() {

    checkboxMsg.classList.add("hide");
    isCheckboxValid = false;

    if (!concentbox.checked) {
        checkboxMsg.classList.remove("hide");
    } else {
        isCheckboxValid = true;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validFirstname();
    validLastName();
    validEmail();
    validQuery();
    validTextArea();
    validConcentBox();

    if (isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isQueryValid &&
        isTextAreaValid &&
        isCheckboxValid) {
            modal.classList.remove("hidden-modal")
        }
})

radioGeneralContainer.addEventListener("click", () => {
    
    radioSupporteContainer.classList.remove("checked-radio-background");
    generalQuery.checked = true;   
    radioGeneralContainer.classList.add("checked-radio-background");
    
})

radioSupporteContainer.addEventListener("click", () => {

    radioGeneralContainer.classList.remove("checked-radio-background");
    suporteQuery.checked = true;
    radioSupporteContainer.classList.add("checked-radio-background");    
})



