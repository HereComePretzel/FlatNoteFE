


const auth = (state={}, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return action.user
        case 'LOGOUT_SUCCESS':
            return {}
        default:
            return state
    }
}

export default auth