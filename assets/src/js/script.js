let myform = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email')
let message = document.getElementById('message')
let nameMsgFeed = document.getElementById('nameMsgFeed');
let emailMsgFeed = document.getElementById('emailMsgFeed');
let MsgFeed = document.getElementById('MsgFeed');


class Form {
    constructor(name,email, message) {
        this.name = name;
        this.email = email;
        this.message = message; 
    }
    submitForm() {
        if (this.name.length < 5) {
            return 'name';
        } else if (this.email.length < 5) {
            return 'email';
        } else if (this.message.length < 5) {
            return 'message';
        }
    }
}
myform.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitTheForm = new Form(name.value, email.value, message.value);
    if (submitTheForm.submitForm() === 'name') {
        name.focus();
        nameMsgFeed.textContent = 'Required*';
    } else if (submitTheForm.submitForm() === 'email') {
        email.focus();
        emailMsgFeed.textContent = 'Required*';
    } else if (submitTheForm.submitForm() === 'message') {
        message.focus();
        MsgFeed.textContent = 'Required*';
    } else {
        location.reload();
    }
});

name.addEventListener('keyup', () => {
    if (name.value.length < 3) {
        nameMsgFeed.textContent = '';
    } 
});
email.addEventListener('keyup', () => {
    if (email.value.length < 4) {
        emailMsgFeed.textContent = '';
    } else if (email.value.length < 7){
        emailMsgFeed.textContent = 'Invalid Email';
    } else {
        emailMsgFeed.textContent = '';
    }
});
message.addEventListener('keyup', () => {
    if (message.value.length > 0) {
        MsgFeed.textContent = '';
    } 
});

name.addEventListener('blur', () => {
    if (name.value.length < 3) {
        nameMsgFeed.textContent = 'Required*';
    } 
});
email.addEventListener('blur', () => {
    if (email.value.length < 5) {
        emailMsgFeed.textContent = 'Required*';
    } else if (email.value.length < 7){
        emailMsgFeed.textContent = 'Invalid Email';
    } else {
        emailMsgFeed.textContent = '';
    }
});
message.addEventListener('blur', () => {
    if (message.value.length < 5) {
        MsgFeed.textContent = 'Required*';
    } 
});