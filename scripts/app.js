// brings ui and chat together.   do everything organized


import { ChatUI } from "./ui.js";
import { Chatroom } from "./chat.js";




// dom queries

const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');



// add a new chat         default  action of submit button is refresh
newChatForm.addEventListener('submit',e => {
    e.preventDefault();
    // to get an input element with id/name property inside a form.. we can use dot notation
    // after sending reset the form
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(()=> newChatForm.reset())
        .catch(err => console.log(err));
});

// const chatroom is defined below.. no scope problem.. above is an event listener
// before we try to access it ( by typing and sending it) all code already run




// update username
newNameForm.addEventListener('submit', e=>{
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    
    chatroom.updateName(newName);
    newNameForm.reset();
    console.log(chatroom);


    // if we refresh/ start the web app the name is shaun.. as we defined it below.. use local storage
    // local storage while updating in chat class
    // show then hide update message.. 
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(()=> updateMssg.innerText='', 2000);
    
});





// event deligation ... for different rooms  update chat rooms
rooms.addEventListener('click',e =>{

    if(e.target.tagName === 'BUTTON'){
        // clear current chats from ui  load new chats
        chatUI.clear();

        // update room
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }


});










// first check local storage for a username
const username = localStorage.username ? localStorage.username: "anonymous" ;






// class instances

const chatUI = new ChatUI(chatList);

const chatroom = new Chatroom('general',username);


// get the chats and render

chatroom.getChats(data => {
    chatUI.render(data);
});








