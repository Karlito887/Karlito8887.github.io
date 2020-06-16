import profileReducer, { addPostActionCreator } from "./profile-reducer";

let initialState = {
    postData: [
        { id: 1, message: 'Hi, everyone, my name is Nazar', likes: 12 },
        { id: 2, message: 'This is my second post', likes: 2222 },
    ],
    profile: null,
    status: '',
}

test('Length posts should be inrement', () => {
    let action = addPostActionCreator('Test post')

    let newState = profileReducer(initialState, action)

    expect(newState.postData.length).toBe(initialState.postData.length + 1)
    
  });
  