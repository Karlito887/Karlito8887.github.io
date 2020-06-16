import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import messageReducer from "./message-reducer"

 let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi, everyone, my name is Nazar', likes: 12 },
                { id: 2, message: 'This is my second post', likes: 2222 },
            ],
            messageText: 'some texhhxxt'
        },
        messagesPage: {
            dialogData: [
                { id: 1, name: 'Andiana' },
                { id: 2, name: 'Sanya' },
                { id: 3, name: 'Vasya' },
            ],
            messageData: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'This message from obj from arr' },
                { id: 3, message: 'Tell me a story from your childhood' },
            ],
            messageText: '',
        },
        sideBar: {
            friends: [
                { id: 1, name: "Andiy", },
                { id: 2, name: "Sasha", },
                { id: 3, name: "Petya", },
            ]
        }
    },
    _callSubscriber() {
        return true
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        profileReducer(this.getState().profilePage, action)
        messageReducer(this.getState().messagesPage, action)
        sidebarReducer(this.getState().sideBar, action )
        this._callSubscriber(this._state)
    }

}
