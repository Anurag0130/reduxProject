export const saveNote = (notesData) => {
    return {
        type: 'SAVE_NOTE',
        payload: {
            notes: notesData
        }
    }
}

export const deleteNote = () => {
    return {
        type: 'DELETE_NOTE'
    }
}
