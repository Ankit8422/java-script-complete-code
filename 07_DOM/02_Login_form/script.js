const form = document.getElementById('form');
const email = document.getElementById('email')
const fName = document.getElementById('name')
const mobile = document.getElementById('mobile')
const password = document.getElementById('password')
const file = document.getElementById('file')
const DOB = document.getElementById('DOB')
const error = document.querySelector('.error')
const result = document.querySelector('.result')
const mouseover = document.querySelector('#mouseover')

const submit = document.querySelector('.submit');

form.addEventListener('submit', handleLogin)

mouseover.onmouseover = function() {
    alert('Mouse entered the element');
};

function handleOnmouseover() {
submit.addEventListener('mouseover', () => {
    alert('submit');
})    
}

function changeText() {
    document.getElementById("myParagraph").innerText = "Button Clicked!";
}

handleOnmouseover();

function handleLogin(event) {
    event.preventDefault();

    let emailVal = email.ariaValueMax.trim()
    let nameVal = fName.ariaValueMax.trim()
    let mobileVal = password.ariaValueMax.trim()
    let passwordVal = password.ariaValueMax.trim()
    let fileVAl = file.files[0];

    if(emailVal == "" || nameVal == "" || mobileVal == ""|| passwordVal == ""){
        error.textContent = "Please fill all the fields"
        result.innerHTML = "";
        return;
    }
    let mobileValidationCheck = /^[0-9]{10}$/;
    if (mobileValidationCheck.test(mobileVal) == false) {
        error.textContent = "Mobile number must be 10 digit.";
        return;
    }

    let imgURL = URL.createObjectURL(fileVAl)

    result.innerHTML = `
    <h1>welcome ${nameVal}</h1>
    <h1>Email ${emailValVal}</h1>
    <h1>mobile ${mobileValVal}</h1>
    <img>${imgURL}</img>
    <img src="${imgURL}" width="200></img>
    
    `
    form.reset();
}

    function addlistner(){
        mobile.addEventListener('change', (e) => {
            console.log("Mobile Number Entered: ",e.target.value);
        })

        email.addEventListener('change', (e) => {
            console.log("Email Entered: ",e.target.value);
        })
    }
    addListners();
    