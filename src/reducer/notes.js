



const initialState = []



const notes = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_NOTES_SUCCESS':
            return [...action.notes]
        case 'SHOW_NOTE':
            const id = parseInt(action.id)
            const note = state.filter(note => {
                return note.id === id})
            return note
        case 'NEW_NOTE':
            return [...state, action.note]
        case 'EDIT_NOTE':
            return [...state, action.note]
        case 'DELETE_NOTE':
            const delId = parseInt(action.id)
            const delNote = state.filter(note => {
                return note.id !== delId})
            return delNote

        default:
            return state
    }
}

export default notes
