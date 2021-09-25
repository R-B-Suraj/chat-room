// render chat templates to the DOM
// clear the list of chats  when the room changes


class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML='';
    }
    // called in app.js for each chat added
    render(chat){
        const when = dateFns.distanceInWordsToNow(
            chat.created_at.toDate(),
            { addSuffix: true}
        );

        const html =`
        <li class="list-group-item">
            <span class="username">${chat.username}</span>
            <span class="message">${chat.message}</span>
            <div class="time">${when}</div>
        </li>
        `;
        this.list.innerHTML += html;
    }
}

// for formatting data we used data fns    <script src="http://cdn.date-fns.org/v1.9.0/date_fns.min.js"></script>


export {ChatUI};