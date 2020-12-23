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
                let list = document.createElement('li');
                let listText = document.createTextNode('Added Double Room');
                let removeList = document.createElement('span');
                removeList.className = 'spanRemove';
                let cancelRemoveList = document.createTextNode('x')
                list.append(listText,removeList);
                removeList.append(cancelRemoveList);
                allTheList.append(list);
                console.warn('mark check');
                if (removeList) {
                    removeList.onclick = () => {
                        list.remove();
                    }
                }
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
                let list2 = document.createElement('li');
                let listText2 = document.createTextNode('Added Single Room');
                let removeList2 = document.createElement('span');
                removeList2.className = 'spanRemove';
                let cancelRemoveList2 = document.createTextNode('x')
                list2.append(listText2,removeList2);
                removeList2.append(cancelRemoveList2);
                allTheList.append(list2);
                console.warn('mark check');
                if (removeList2) {
                    removeLis2t.onclick = () => {
                        list2.remove();
                    }
                }
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
                let list3 = document.createElement('li');
                let listText3 = document.createTextNode('Added Deluxe Room');
                let removeList3 = document.createElement('span');
                removeList3.className = 'spanRemove';
                let cancelRemoveList3 = document.createTextNode('x')
                list3.append(listText3,removeList3);
                removeList3.append(cancelRemoveList3);
                allTheList.append(list3);
                console.warn('mark check');
                if (removeList3) {
                    removeList3.onclick = () => {
                        list3.remove();
                    }
                }
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
                let list4 = document.createElement('li');
                let listText4 = document.createTextNode('Added Rest Room');
                let removeList4 = document.createElement('span');
                removeList4.className = 'spanRemove';
                let cancelRemoveList4 = document.createTextNode('x')
                list4.append(listText4,removeList4);
                removeList4.append(cancelRemoveList4);
                allTheList.append(list4);
                console.warn('mark check');
                if (removeList4) {
                    removeList4.onclick = () => {
                        list4.remove();
                    }
                }
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
                let list5 = document.createElement('li');
                let listText5 = document.createTextNode('Added Dining Room');
                let removeList5 = document.createElement('span');
                removeList5.className = 'spanRemove';
                let cancelRemoveList5 = document.createTextNode('x')
                list5.append(listText5,removeList5);
                removeList5.append(cancelRemoveList5);
                allTheList.append(list5);
                console.warn('mark check');
                if (removeList5) {
                    removeList5.onclick = () => {
                        list5.remove();
                    }
                }
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
                let list6 = document.createElement('li');
                let listText6 = document.createTextNode('Added Super Deluxe Room');
                let removeList6 = document.createElement('span');
                removeList6.className = 'spanRemove';
                let cancelRemoveList6 = document.createTextNode('x')
                list6.append(listText6,removeList6);
                removeList6.append(cancelRemoveList6);
                allTheList.append(list6);
                console.warn('mark check');
                if (removeList6) {
                    removeList6.onclick = () => {
                        list6.remove();
                    }
                }
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