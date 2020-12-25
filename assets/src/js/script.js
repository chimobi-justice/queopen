let featureCart = document.getElementById('featuresCart')
let allTheList = document.getElementById('listContainer')
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

let myform = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email')
let message = document.getElementById('message')
let nameMsgFeed = document.getElementById('nameMsgFeed');
let emailMsgFeed = document.getElementById('emailMsgFeed');
let MsgFeed = document.getElementById('MsgFeed');


if (btn1) {
    btn1.onclick = () => {
        let popoutAlert = confirm('Double Room as been added\nDouble bed\nFrom $154');
            if (popoutAlert === true) {
                location.href = './payfield.html';
            } else {
                console.error('cancel check');
                return false;
            }
    } 
}

if (btn2) {
    btn2.onclick = () => {
        let popoutAlert2 = confirm('Single Room as been added\nSingle bed\nFrom $99');
            if (popoutAlert2 === true) {
                location.href = './payfield.html';
            } else {
                console.error('cancel check');
                return false;
            }
    } 
}

if (btn3) {
    btn3.onclick = () => {
        let popoutAlert3 = confirm('Deluxe Room as been added\nMaster side bed\nFrom $197');
            if (popoutAlert3 === true) {
                location.href = './payfield.html';
            } else {
                console.error('cancel check');
                return false;
            }
    }
}

if (btn4) {
    btn4.onclick = () => {
        let popoutAlert4 = confirm('Rest Room as been added\nRest room\nFrom $163');
            if (popoutAlert4 === true) {
                location.href = './payfield.html';
            } else {
                console.error('cancel check');
                return false;
            }
    } 
}

if (btn5) {
    btn5.onclick = () => {
        let popoutAlert5 = confirm('Dining as been added\nSingle Dining room\nFrom $59');
            if (popoutAlert5 === true) {
                location.href = './payfield.html';               
            } else {
                console.error('cancel check');
                return false;
            }
    }
}

if (btn6) {
    btn6.onclick = () => {
        let popoutAlert6 = confirm('Super Deluxe Room as been added\nVip Master side bed\nFrom $237');
            if (popoutAlert6 === true) {
                location.href = './payfield.html';
            } else {
                console.error('cancel check');
                return false;
            }
    }
}

// contact form
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