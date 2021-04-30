
//variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      message = document.getElementById('message'),
      subject =document.getElementById('subject'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');

//Event Listeners

eventListeners();

function eventListeners() {
    //App init
    document.addEventListener('DOMContentLoaded',appInit);

    //Validate the form
    email.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);

    //Send email & reset Btn
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);
}

//Functions

//App Initialization
function appInit() {
    //Disable the send Btn on load
    sendBtn.disabled = true;
}

function sendEmail(e) {
    e.preventDefault();

    //Show the Spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    //show the image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    //Hide spinner then show the email image
    setTimeout(function() {
        //Hide the spinner
        spinner.style.display = 'none';

        //show the email image
        document.querySelector('#loaders').appendChild(sendEmailImg);

        //after 5 seconds hide the emailimage and reset the form
        setTimeout(function() {
            sendEmailForm.reset();
            sendEmailImg.remove();
            sendBtn.disabled = true;
        }, 5000);

    }, 3000 );
}

//Validate the fields
function validateField() {
    let errors;

    //Validate the length of the field
    validateLength(this);
    
    //Validate the Email
    if(this.type ==='email') {
        validateEmail(this);
    }
    
    //Both will return errors
    errors = document.querySelectorAll('.error');

    //Check that the inputs are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length === 0) {
            sendBtn.disabled = false;
        }
    }

}

//Validate the length of the fields
function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//Validate email (checks for @ in the value)

function validateEmail(field) {
    let emailText = field.value;
    //check if the emailText contain @ sign

    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//Reset the form
function resetForm(e) {
    e.preventDefault();

     sendEmailForm.reset();
     // disable the send button on load
    sendBtn.disabled = true;

}
