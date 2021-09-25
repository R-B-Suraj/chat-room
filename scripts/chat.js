// we learnt about classes........  so we will use classes  for practice

import {db, collection, doc, getDoc,setDoc,getDocs, addDoc, deleteDoc, query, where,orderBy, onSnapshot} from "./setup.js";

// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room


// this  chatroom class   interacts with chat data and database...  does above functions



class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = collection(db,'chats');
        this.unsub;
    }




    // adding a chat.. this is an asynchronous funciton takes some time to do
    async addChat(message){
        // new chat is not just a string it's a document.. we send it as js object
        // format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: now
            // firebase automatically converts date to timestamp object
        };
        // save the chat document
        const response = await addDoc(this.chats, chat);
        return response;
    }




    // setting up realtime lsitener .. not an async funciton because it is not running only once... it returns anytime there is a change
    getChats(callback){

        // listen only for changes in current room not the whole chat collections... not other rooms in chatroom
        // by default data is not sorted in a query... 
        // to order data need to be ordered in database.. if error comes go to the provided link and index data   index enabled
       
        const q = query(this.chats , where('room','==',this.room),orderBy('created_at'));
 
       this.unsub = onSnapshot(q, snapshot =>{
        snapshot.docChanges().forEach(change =>{

            if(change.type === 'added'){
                // update ui   responsibility of ui class
                callback(change.doc.data() );
            }
            if(change.type === 'modified'){

            }
            if(change.type === 'removed'){

            }

        });
       })

    }


    // update username
     updateName(username){
        this.username = username;
        localStorage.setItem('username',username);
    }

    // update room
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        // this only changes the room property but still we are listening to previous room documents , need to unsubscribe
        if(this.unsub){
            // if unsub has value call it,    else there will be error
            this.unsub();
        }
    }

}



export {Chatroom};





