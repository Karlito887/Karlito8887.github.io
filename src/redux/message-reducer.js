const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, { id: state.messageData + 1, message: action.newMessageText }],
            }
        default:
            return state
    }
}

export const sendMeassageActionCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })

export default messageReducer