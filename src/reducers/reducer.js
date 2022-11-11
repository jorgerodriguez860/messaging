const reducer = (state, action) => {
    if(state === undefined) {
        state = {
            users: []
        }
    }

    switch(action.type) {
        default:
            return state
    }
}

export default reducer