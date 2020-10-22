

// Action creator
// A function that produces an action
export const fetchNotesSuccess = (notes) => {
    return {
        type: 'FETCH_NOTES_SUCCESS',
        notes
    }
}

export const showNote = (id) => {
    return {
        type: 'SHOW_NOTE',
        id
    }
}


export const newNote = (note) => {
    return {
        type: 'NEW_NOTE',
        note: note
    }
}
export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        id

    }
}
export const editNote = (note) => {
    return {
        type: 'EDIT_NOTE',
        note
    }
}

